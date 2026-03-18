export default function Details() {
	return (
		<section className="details-section" id="details">
			<div className="section-heading reveal">
				Event
				<br />
				<span className="stroke">Details</span>
			</div>
			<div className="details-grid">
				<div className="detail-card reveal">
					<span className="big">25-26</span>
					<span className="small">March 2026</span>
				</div>
				<div className="detail-card reveal">
					<span className="big">AB3</span>
					<span className="small">SNU Chennai Campus</span>
				</div>
				<div className="detail-card reveal">
					<span className="big" style={{ color: "var(--gold)" }}>
						&#8377;50K
					</span>
					<span className="small">Total Prize Pool</span>
				</div>
				<div className="detail-card reveal">
					<span className="big">3-4</span>
					<span className="small">Members Per Team</span>
				</div>
				<div className="detail-card reveal">
					<span className="big">24H+</span>
					<span className="small">Of Nonstop Hacking</span>
				</div>
				<div className="detail-card reveal">
					<span className="big">SNU&amp;SSN</span>
					<span className="small">Students Eligible</span>
				</div>
			</div>
		</section>
	);
}
