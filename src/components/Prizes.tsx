export default function Prizes() {
	return (
		<section className="prizes-section" id="prizes">
			<div className="prizes-inner">
				<div className="section-heading reveal">
					Prize <span className="gradient">Pool</span>
				</div>
				<div className="prizes-grid">
					<div className="prize-card reveal">
						<span className="place">2nd Place</span>
						<span className="amount">&#8377;15,000</span>
						<span className="desc">Prize</span>
					</div>
					<div className="prize-card featured reveal">
						<span className="place">1st Place</span>
						<span className="amount">&#8377;20,000</span>
						<span className="desc">Prize</span>
					</div>
					<div className="prize-card reveal">
						<span className="place">3rd Place</span>
						<span className="amount">&#8377;10,000</span>
						<span className="desc">Prize</span>
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
