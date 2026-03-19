export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <h1>
          <span className="rotated">SNUC</span>
          <br />
          <span className="gold">HACKS</span>
          <span className="tilt-up">'26</span>
        </h1>
        <p className="hero-sub">
          The first-ever 24-hour hackathon by SNUC Coding Club. Build solutions
          with Real Impact.
        </p>
        <div className="cta-group">
          <a
            href="https://forms.cloud.microsoft/r/h0Cy8tHzkc"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Register Now &rarr;
          </a>
          <span className="btn btn-deadline">Ends on Mar 23</span>
        </div>
      </div>
      <div className="hero-corner">
        <span>SNU CHENNAI</span>
        <span className="upside-down">CODING CLUB</span>
      </div>
    </section>
  );
}
