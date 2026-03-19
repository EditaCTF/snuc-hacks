export default function Prizes() {
	return (
		<section className="prizes-section" id="prizes">
			<div className="prizes-inner">
				<div className="section-heading reveal">
					Prize <span className="gradient">Pool</span>
				</div>
				<div className="prizes-grid">
					<div className="prize-card reveal">
						<span className="place">2ND</span>
						<span className="amount">&#8377;15,000</span>
						<span className="desc">Runner Up</span>
					</div>
					<div className="prize-card featured reveal">
						<span className="place">1ST</span>
						<span className="amount">&#8377;25,000</span>
						<span className="desc">Grand Prize</span>
					</div>
					<div className="prize-card reveal">
						<span className="place">3RD</span>
						<span className="amount">&#8377;10,000</span>
						<span className="desc">Second Runner Up</span>
					</div>
				</div>
			</div>
		</section>
	);
}
