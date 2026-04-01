import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { useState } from "react";
import Nav from "../components/Nav";

interface CertEntry {
  name: string;
  team: string;
  pdf_path: string;
  generated_at: string;
  session: string;
}

interface LookupResult {
  found: boolean;
  entries: CertEntry[];
  error?: string;
}

const lookupCertificate = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => {
    const reg = (input as Record<string, unknown>)?.regNumber;
    if (typeof reg !== "string" || !reg.trim())
      throw new Error("Invalid input");
    return { regNumber: reg.trim() };
  })
  .handler(async ({ data }): Promise<LookupResult> => {
    const dir = join(process.cwd(), "sessions", "mappings");
    let files: string[];
    try {
      files = readdirSync(dir).filter((f) => f.endsWith(".json"));
    } catch {
      return {
        found: false,
        entries: [],
        error: "Certificate data unavailable.",
      };
    }

    const results: CertEntry[] = [];
    for (const file of files) {
      try {
        const mapping = JSON.parse(readFileSync(join(dir, file), "utf-8"));
        const regNum = data.regNumber;
        const regNumNoSpace = regNum.replace(/\s+/g, "");
        const matches: CertEntry[] =
          mapping.certificates?.[regNum] ??
          mapping.certificates?.[regNumNoSpace] ??
          [];
        for (const entry of matches) {
          const p = String(entry.pdf_path ?? "");
          if (
            p.includes("..") ||
            !p.startsWith("/certificates/") ||
            !p.endsWith(".pdf")
          )
            continue;
          results.push({ ...entry, session: mapping.session_name });
        }
      } catch {
        // skip malformed mapping files
      }
    }

    return { found: results.length > 0, entries: results };
  });

export const Route = createFileRoute("/certificate")({
  head: () => ({ meta: [{ title: "Certificates | SNUC Hacks '26" }] }),
  component: CertificatePage,
});

function CertificatePage() {
  const [regNumber, setRegNumber] = useState("");
  const [result, setResult] = useState<LookupResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regNumber.trim()) return;
    setLoading(true);
    setFetchError(null);
    setResult(null);
    setSubmitted(true);
    try {
      const data = await lookupCertificate({ data: { regNumber } });
      setResult(data);
    } catch {
      setFetchError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const hasResult = submitted && !loading && (result || fetchError);
  const errorMsg = fetchError ?? result?.error;

  return (
    <div className="page cert-page">
      <Nav />

      <section className="cert-hero">
        <img
          src="/5.png"
          className="png-deco png-deco-5"
          alt=""
          aria-hidden="true"
        />
        <img
          src="/4.png"
          className="png-deco png-deco-4"
          alt=""
          aria-hidden="true"
        />
        <img
          src="/3.png"
          className="png-deco png-deco-3"
          alt=""
          aria-hidden="true"
        />
        <img
          src="/2.png"
          className="png-deco png-deco-2"
          alt=""
          aria-hidden="true"
        />

        <div className="cert-hero-content">
          <div className="cert-hero-grid">
            {/* LEFT — title + form */}
            <div className="cert-hero-left">
              <h1 className="cert-title">CERTIFICATE</h1>
              <p className="cert-tagline">Enter your registration number.</p>

              <form className="cert-form" onSubmit={handleSearch}>
                <input
                  type="text"
                  className="cert-input"
                  placeholder="e.g. 24011101001"
                  value={regNumber}
                  onChange={(e) => setRegNumber(e.target.value)}
                  autoComplete="off"
                  spellCheck={false}
                  disabled={loading}
                  aria-label="Registration number"
                />
                <div className="cert-form-actions">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading || !regNumber.trim()}
                  >
                    {loading ? "Searching..." : "Look Up"}
                    <span className="btn-arrow">&rarr;</span>
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT — results */}
            <div className="cert-hero-right">
              {!hasResult ? (
                <div className="cert-right-empty" aria-hidden="true" />
              ) : errorMsg ? (
                <div className="cert-results">
                  <h2 className="cert-results-heading">
                    Not <span className="gradient">found</span>
                  </h2>
                  <p className="cert-results-body">
                    No certificate is linked to that registration number.
                    Double-check your number and try again.
                  </p>
                </div>
              ) : result?.found ? (
                <div className="cert-results">
                  <div className="cert-results-top">
                    <h2 className="cert-results-heading">
                      Your <span className="gradient">Certificates</span>
                    </h2>
                    <span className="cert-count">
                      {result.entries.length}{" "}
                      {result.entries.length === 1 ? "result" : "results"}
                    </span>
                  </div>
                  <ul className="cert-list">
                    {result.entries.map((entry, i) => (
                      <li
                        key={`${entry.pdf_path}-${i}`}
                        className="cert-item"
                        style={{ animationDelay: `${i * 80}ms` }}
                      >
                        <div className="cert-item-body">
                          <p className="cert-item-session">{entry.session}</p>
                          <p className="cert-item-name">{entry.name}</p>
                          <p className="cert-item-team">{entry.team}</p>
                        </div>
                        <a
                          href={entry.pdf_path}
                          className="btn btn-outline cert-download-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View PDF
                          <span className="btn-arrow">&rarr;</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="cert-results">
                  <div className="cert-results-top">
                    <h2 className="cert-results-heading">
                      Not <span className="gradient">found</span>
                    </h2>
                  </div>
                  <p className="cert-results-body">
                    No certificate is linked to that registration number.
                    Double-check your number and try again, or reach out to the
                    organizers if you think this is an error.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
