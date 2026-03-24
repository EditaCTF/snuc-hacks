export default function Prizes() {
	return (
		<section className="prizes-section" id="prizes">
			<div className="prizes-inner">
				<div className="section-heading reveal">
					Prize <span className="gradient">Pool</span>
				</div>
				<div className="prizes-grid">
					<div className="prize-card reveal">
						<span className="place">Domain 1</span>
						<span className="amount">TBD</span>
						<span className="desc">Prizes</span>
					</div>
					<div className="prize-card reveal">
						<span className="place">Domain 2</span>
						<span className="amount">TBD</span>
						<span className="desc">Prizes</span>
					</div>
					<div className="prize-card reveal">
						<span className="place">Domain 3</span>
						<span className="amount">TBD</span>
						<span className="desc">Prizes</span>
					</div>
				</div>
				<div className="prizes-grid prizes-special">
					<div className="prize-card special reveal">
						<span className="place">Best Girls Team</span>
						<span className="amount">&#8377;2,500</span>
						<span className="desc">Special Award</span>
					</div>
					<div className="prize-card special reveal">
						<span className="place">Rookie Award</span>
						<span className="amount">&#8377;2,500</span>
						<span className="desc">Special Award</span>
					</div>
				</div>
			</div>
		</section>
	);
}
