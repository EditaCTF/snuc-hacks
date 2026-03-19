import { MeshBlob1, MeshBlob3 } from "./Decorations";

export default function Hero() {
	return (
		<section className="hero" id="hero">
			<MeshBlob1 className="mesh-hero-1" />
			<MeshBlob3 className="mesh-hero-3" />

			<div className="hero-content">
				<div className="hero-grid">
					<div className="hero-left">
						<h1 className="hero-title">
							SNUC
							<br />
							HACKS '26
						</h1>
						<p className="hero-tagline">Build Solutions with Real Impact</p>

						<div className="hero-cta">
							<a
								href="https://forms.cloud.microsoft/r/h0Cy8tHzkc"
								className="btn btn-primary"
								target="_blank"
								rel="noreferrer"
							>
								Register Now
								<span className="btn-arrow">&rarr;</span>
							</a>
						</div>

						<div className="ascend-stack" aria-hidden="true">
							{[1, 0.7, 0.45, 0.25, 0.1].map((opacity) => (
								<div key={`ascend-${opacity}`} style={{ opacity }}>
									ASCEND
								</div>
							))}
						</div>
					</div>

					<div className="hero-right">
						<div className="stat-big">24</div>
						<div className="stat-label">
							Hours+
							<br />
							Hackathon
						</div>
						<div className="date-marker">
							<div className="date-num">25-26</div>
							<div className="date-text">March</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
