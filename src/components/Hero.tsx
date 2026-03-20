import { Link } from "@tanstack/react-router";

export default function Hero() {
	return (
		<section className="hero" id="hero">
			<img src="/5.png" className="png-deco png-deco-5" alt="" aria-hidden="true" />
			<img src="/4.png" className="png-deco png-deco-4" alt="" aria-hidden="true" />
			<img src="/3.png" className="png-deco png-deco-3" alt="" aria-hidden="true" />
			<img src="/2.png" className="png-deco png-deco-2" alt="" aria-hidden="true" />

			<div className="hero-content">
				<div className="hero-grid">
					<div className="hero-left">
						<h1 className="hero-title">
							SNUC
							<br />
							HACKS
							<br />
							'26
						</h1>
						<p className="hero-tagline">24 Hours+ Hackathon - Build Solutions with Real Impact</p>

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
							<Link to="/rules" className="btn btn-outline">
								Rulebook
							</Link>
						</div>
					</div>

					<div className="hero-right">
						<div className="date-marker">
							<div className="date-num">25-26</div>
							<div className="date-text">March</div>
						</div>
						<div className="ascend-stack" aria-hidden="true">
							<div className="ascend-primary">ASCEND</div>
							{[0, 1, 2, 3, 4].map((index) => (
								<div key={`ascend-outline-${index}`} className={`ascend-outline ascend-outline-${index + 1}`}>
									ASCEND
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
