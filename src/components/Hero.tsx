import { MeshBlob1, MeshBlob3 } from "./Decorations";

export default function Hero() {
	return (
		<section className="v2-hero" id="v2-hero">
			<MeshBlob1 className="v2-mesh-hero-1" />
			<MeshBlob3 className="v2-mesh-hero-3" />

			<div className="v2-hero-content">
				<div className="v2-hero-grid">
					<div className="v2-hero-left">
						<h1 className="v2-hero-title">
							SNUC
							<br />
							HACKS '26
						</h1>
						<p className="v2-hero-tagline">Build Solutions with Real Impact</p>

						<div className="v2-hero-cta">
							<a
								href="https://forms.cloud.microsoft/r/h0Cy8tHzkc"
								className="v2-btn v2-btn-primary"
								target="_blank"
								rel="noreferrer"
							>
								Register Now
								<span className="v2-btn-arrow">&rarr;</span>
							</a>
						</div>

						<div className="v2-ascend-stack" aria-hidden="true">
							{[1, 0.7, 0.45, 0.25, 0.1].map((opacity) => (
								<div key={`ascend-${opacity}`} style={{ opacity }}>
									ASCEND
								</div>
							))}
						</div>
					</div>

					<div className="v2-hero-right">
						<div className="v2-stat-big">24</div>
						<div className="v2-stat-label">
							Hours+
							<br />
							Hackathon
						</div>
						<div className="v2-date-marker">
							<div className="v2-date-num">25-26</div>
							<div className="v2-date-text">March</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
