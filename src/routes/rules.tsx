import { Link, createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [{ title: "Rulebook | SNUC Hacks '26" }],
  }),
  component: RulesPage,
});

const sections = [
  { id: "overview", label: "Overview" },
  { id: "format", label: "Hackathon Format" },
  { id: "rules-regs", label: "Rules & Regulations" },
  { id: "judging", label: "Judging Criteria" },
  { id: "ip", label: "Intellectual Property" },
  { id: "prizes", label: "Prizes" },
  { id: "faq", label: "FAQs" },
  { id: "contact", label: "Contact" },
];

function RulesPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = window.innerWidth <= 900 ? 80 : 24;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setDrawerOpen(false);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, [scrollToSection]);

  useEffect(() => {
    const headings = document.querySelectorAll<HTMLElement>("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("data-section") ?? "");
          }
        }
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    for (const el of headings) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="rules-page">
      {/* Mobile top nav */}
      <nav className="rules-mobile-nav">
        <button
          type="button"
          className="rules-hamburger"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
        <Link to="/">
          <img
            src="/cc.png"
            alt="SNUC Coding Club"
            className="rules-mobile-logo"
          />
        </Link>
      </nav>

      {/* Fixed sidebar (also used as mobile drawer) */}
      <aside
        className={`rules-sidebar${drawerOpen ? " rules-sidebar--open" : ""}`}
      >
        <button
          type="button"
          className="rules-drawer-close"
          aria-label="Close menu"
          onClick={() => setDrawerOpen(false)}
        >
          &#x2715;
        </button>
        <div className="rules-sidebar-logo">
          <Link to="/">
            <img src="/cc.png" alt="SNUC Coding Club" />
          </Link>
        </div>

        <p className="rules-sidebar-title">SNUC Hacks '26 — Rulebook</p>

        <nav className="rules-toc">
          {sections.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`rules-toc-item${activeSection === s.id ? " active" : ""}`}
              onClick={() => scrollToSection(s.id)}
            >
              <span className="rules-toc-num">{i + 1}.</span> {s.label}
            </button>
          ))}
        </nav>

        <div className="rules-sidebar-utils">
          <a
            href="/SNUC Hacks 26' - Problem Statements.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Problem Statements
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top
          </button>
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            Go to bottom
          </button>
        </div>
      </aside>

      {/* Scrollable content */}
      <main className="rules-content" ref={contentRef}>
        <div className="rules-inner">
          <header className="rules-header">
            <h1 className="rules-title">SNUC Hacks '26 — Rulebook</h1>
            <hr className="rules-divider" />
            <p className="rules-subtitle">Organized by the SNUC Coding Club</p>
            <p className="rules-meta">
              25th &amp; 26th March | AB3, SNU Chennai
            </p>
            <hr className="rules-divider" />
          </header>

          {/* 1. Overview */}
          <section
            id="overview"
            data-section="overview"
            className="rules-section"
          >
            <h2 className="rules-h2">1. Overview</h2>
            <hr className="rules-divider" />
            <p>
              SNUC Hacks '26 is the first-ever 24-hour+ Hackathon organized by
              the SNUC Coding Club. This event is designed to empower students
              to solve real-world problems with innovative, tech-driven
              solutions. We encourage creativity, collaboration, and bold ideas.
            </p>
            <p>
              Open to all SNU &amp; SSN students across all courses.
              <br />
              Team size: <strong>3–4 members.</strong>
            </p>
          </section>

          {/* 2. Hackathon Format */}
          <section id="format" data-section="format" className="rules-section">
            <h2 className="rules-h2">2. Hackathon Format</h2>
            <hr className="rules-divider" />
            <h3 className="rules-h3">Structure</h3>
            <ul className="rules-list">
              <li>
                <strong>Problem Statements Released</strong> at 9:30 AM on 25th
                March
              </li>
              <li>
                <strong>Team Leaders Meeting</strong> at 10:00 AM for rules
                clarification and Q&amp;A
              </li>
              <li>
                <strong>Round 1 Evaluation ends</strong> at 3:30 PM on 25th
                March and <strong>Round 2 Evaluation</strong> at 8:00 AM on 26th
                March
              </li>
              <li>
                <strong>Finals</strong> from 10:00 AM to 2:00 PM on 26th March
              </li>
            </ul>
            <h3 className="rules-h3">Project Submission Requirements</h3>
            <ul className="rules-list">
              <li>A PPT describing the project, key features, and approach</li>
              <li>A working prototype or demo</li>
              <li>
                Source code hosted on a{" "}
                <strong>public GitHub repository</strong> with regular commits
              </li>
              <li>
                A short demo video (3–5 minutes) showcasing the project's
                functionality
              </li>
            </ul>
          </section>

          {/* 3. Rules & Regulations */}
          <section
            id="rules-regs"
            data-section="rules-regs"
            className="rules-section"
          >
            <h2 className="rules-h2">3. Rules &amp; Regulations</h2>
            <hr className="rules-divider" />

            <h3 className="rules-h3">Venue &amp; Presence</h3>
            <ol className="rules-list rules-ol">
              <li>
                Students are not allowed to leave the venue (AB3) during night
                time. Movement within AB3 is permitted, but participants must
                not disturb others —{" "}
                <strong className="rules-warn">
                  violation will result in disqualification.
                </strong>
              </li>
              <li>
                Participants are free to leave during daytime. All must return
                by <strong>8:30 PM on 25th March</strong>. Inform a volunteer if
                delayed —{" "}
                <strong className="rules-warn">
                  participants who fail to return will be disqualified.
                </strong>
              </li>
              <li>
                At least{" "}
                <strong>
                  1–2 members must stay until 8:30 PM on 25th March
                </strong>{" "}
                to maintain team presence at the venue —{" "}
                <strong className="rules-warn">
                  failure may result in a warning or disqualification at the
                  organizers' discretion.
                </strong>
              </li>
              <li>
                Participants must carry their <strong>ID cards</strong> at all
                times —{" "}
                <strong className="rules-warn">
                  those found without ID may be asked to leave.
                </strong>
              </li>
              <li>
                Teams must not damage venue property —{" "}
                <strong className="rules-warn">
                  teams found responsible for any damage will be held
                  accountable.
                </strong>
              </li>
              <li>
                Organizers are not responsible for loss of personal belongings.
              </li>
            </ol>

            <h3 className="rules-h3">Code &amp; Project</h3>
            <ol className="rules-list rules-ol" start={8}>
              <li>
                All code must be written during the hackathon — no pre-built
                projects —{" "}
                <strong className="rules-warn">
                  violation will result in immediate disqualification.
                </strong>
              </li>
              <li>Any libraries and tools are allowed.</li>
              <li>
                No sharing of code or collaboration between teams —{" "}
                <strong className="rules-warn">
                  violation will result in disqualification of all teams
                  involved.
                </strong>
              </li>
              <li>
                Teams must create a <strong>public GitHub repository</strong>{" "}
                and commit regularly throughout the event.
              </li>
              <li>
                Teams must push their latest commits before every evaluation
                round —{" "}
                <strong className="rules-warn">
                  failure may negatively impact their evaluation score.
                </strong>
              </li>
            </ol>

            <h3 className="rules-h3">Submissions</h3>
            <ol className="rules-list rules-ol" start={13}>
              <li>
                Projects must be submitted before the deadline — no exceptions —{" "}
                <strong className="rules-warn">
                  late submissions will not be considered for judging.
                </strong>
              </li>
              <li>
                Teams must present/demo their project to the judges —{" "}
                <strong className="rules-warn">
                  absence during judging will result in disqualification.
                </strong>
              </li>
              <li>Every team can only submit up to one project.</li>
            </ol>

            <h3 className="rules-h3">Conduct</h3>
            <ol className="rules-list rules-ol" start={15}>
              <li>
                Respectful behaviour towards all participants, mentors, and
                organizers at all times —{" "}
                <strong className="rules-warn">
                  any form of misconduct will result in immediate removal from
                  the event.
                </strong>
              </li>
            </ol>

            <h3 className="rules-h3">Food &amp; Amenities</h3>
            <ol className="rules-list rules-ol" start={16}>
              <li>Outside food is allowed.</li>
              <li>
                Participants will be provided with refreshments during the event
                — no meals such as lunch or dinner will be served.
              </li>
              <li>
                Participants are advised to bring toothbrush, paste or other
                hygiene tools they might require and food.
              </li>
            </ol>
          </section>

          {/* 4. Judging Criteria */}
          <section
            id="judging"
            data-section="judging"
            className="rules-section"
          >
            <h2 className="rules-h2">4. Judging Criteria</h2>
            <hr className="rules-divider" />
            <p>Projects will be assessed on the following criteria:</p>
            <ul className="rules-list">
              <li>
                <strong>Impact &amp; Usefulness</strong> — How effectively does
                the project address the problem statement?
              </li>
              <li>
                <strong>Innovation &amp; Creativity</strong> — Does the solution
                bring fresh ideas or novel approaches?
              </li>
              <li>
                <strong>Technical Implementation</strong> — Quality,
                scalability, and robustness of the code and overall
                architecture.
              </li>
              <li>
                <strong>Presentation</strong> — Clarity and persuasiveness of
                the demo and project documentation.
              </li>
              <li>
                <strong>Learning</strong> — How much participants have learnt
                during the course of the hackathon.
              </li>
            </ul>
          </section>

          {/* 5. Intellectual Property */}
          <section id="ip" data-section="ip" className="rules-section">
            <h2 className="rules-h2">5. Intellectual Property</h2>
            <hr className="rules-divider" />
            <ul className="rules-list">
              <li>
                Participants retain full ownership of their projects and code.
              </li>
              <li>
                By participating, you grant the organizers permission to
                showcase your project in event materials, social media, and
                websites.
              </li>
            </ul>
          </section>

          {/* 6. Prizes */}
          <section id="prizes" data-section="prizes" className="rules-section">
            <h2 className="rules-h2">6. Prizes</h2>
            <hr className="rules-divider" />
            <p>
              <strong>Total Prize Pool: ₹50,000 INR</strong>
            </p>

            <h3 className="rules-h3">Three Domains</h3>
            <ul className="rules-list">
              <li>
                <strong>Domain 1, 2, 3 (₹45,000 combined)</strong>
                <ul className="rules-list">
                  <li>Prize distribution TBD</li>
                </ul>
              </li>
              <li>
                <strong>Freshers Track: ₹2,500</strong>
              </li>
              <li>
                <strong>Rookie Award: ₹2,500</strong>
              </li>
            </ul>

            <h3 className="rules-h3">Additional Rewards</h3>
            <ul className="rules-list">
              <li>Potential internship opportunities for top teams.</li>
              <li>
                All participants will receive a{" "}
                <strong>digital certificate of participation.</strong>
              </li>
              <li>
                Winners will receive special recognition at the closing
                ceremony.
              </li>
            </ul>
          </section>

          {/* 7. FAQs */}
          <section id="faq" data-section="faq" className="rules-section">
            <h2 className="rules-h2">7. FAQs</h2>
            <hr className="rules-divider" />
            <div className="rules-faq-list">
              {[
                {
                  q: "Is it online or offline?",
                  a: "Offline! The event will take place in AB3, SNU Chennai.",
                },
                {
                  q: "What are the timings?",
                  a: "The hack runs from 9:30 AM on 25th March (24 hours), with Round 1 Evaluation ending at 3:30 PM on 25th March and Round 2 Evaluation ending at 8:30 AM on 26th March. Finals run from 10:00 AM to approximately 2:00 PM on 26th March.",
                },
                {
                  q: "Do we have to stay for the entire 24 hours?",
                  a: "Participants are expected to remain in the venue for the duration of the hackathon. Classrooms will be allocated for participants who wish to rest.",
                },
                {
                  q: "Can day scholars sleep in AB3?",
                  a: "Yes, classrooms will be allocated for participants to rest in.",
                },
                {
                  q: "What is the registration fee?",
                  a: "Free! Registration is completely free of charge.",
                },
                {
                  q: "When does registration close?",
                  a: "Registrations open 18th March and close on 23rd March.",
                },
                {
                  q: "Are there different tracks?",
                  a: "There are Problem Statements and Open Innovation — no strict tracks. You're free to expand your solutions beyond the baseline expectations of the PS as well.",
                },
                {
                  q: "Will food be provided?",
                  a: "Refreshments will be provided to all participants. However, no meals such as lunch or dinner will be served — participants are encouraged to stock up on their own food and snacks.",
                },
                {
                  q: "Will there be enough charging ports and power outlets?",
                  a: "We'll do our best to ensure adequate power access for everyone. That said, we strongly recommend bringing your own extension cords and charging cables — it's a hackathon, and you really don't want to run out of juice.",
                },
                {
                  q: "Is this open to students outside SNU and SSN?",
                  a: "No, SNUC Hacks '26 is open only to SNU and SSN students.",
                },
                {
                  q: "What about participants involved in Sports Day on 26th March?",
                  a: "We understand some participants may be involved in Sports Day activities. Affected teams can have available teammates present for judging, or coordinate their arrival time with the OC. Priority slots or post-1:00 PM judging can be arranged if needed — please reach out to the organizing committee in advance.",
                },
                {
                  q: "Can I leave in between and come back later?",
                  a: "You can leave in between upto 8:30 on March 25. All participants are expected to be present for the full duration after that.",
                },
                {
                  q: "Will there be an OD (On-Duty) for participants?",
                  a: "Yes, OD will be arranged for all participants and organizing committee members.",
                },
                {
                  q: "Will the full problem statement be revealed only at the start of the event?",
                  a: "Yes, problem statements are revealed at the start of the hackathon — 9:30 AM on 25th March.",
                },
                {
                  q: "What if I don't understand the problem statement?",
                  a: "Mentors will be available throughout the event to help clarify problem statements and guide teams.",
                },
                {
                  q: "What if there is a medical emergency?",
                  a: "Contact any organizing committee member immediately. Campus security will also be available to assist.",
                },
                {
                  q: "Can my team switch domains after the hackathon starts?",
                  a: "No, teams are expected to commit to a domain once selected.",
                },
                {
                  q: "What are the prizes for SNUC Hacks '26?",
                  a: "Prize details are to be announced. Stay tuned!",
                },
              ].map(({ q, a }) => (
                <div key={q} className="rules-faq-item">
                  <p className="rules-faq-q">
                    <strong>Q: {q}</strong>
                  </p>
                  <p className="rules-faq-a">A: {a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Contact */}
          <section
            id="contact"
            data-section="contact"
            className="rules-section"
          >
            <h2 className="rules-h2">8. Contact</h2>
            <hr className="rules-divider" />
            <p>For any questions or clarifications, please reach out to:</p>
            <ul className="rules-list rules-contact-list">
              <li>Niranjhan SU — 8122152806</li>
              <li>Prajesh Raam — 9489687324</li>
              <li>Surya Narayanan — 9940537699</li>
              <li>Vijayan S — 8080323242</li>
            </ul>
          </section>

          <p className="rules-footer-note">
            <em>SNUC Coding Club | SNUC Hacks '26</em>
          </p>
        </div>
      </main>
    </div>
  );
}
