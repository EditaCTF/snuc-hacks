const events = [
	{
		time: "9:00 AM",
		day: "Mar 25",
		label: "Participants start arriving at venue",
		highlight: false,
	},
	{
		time: "9:30 AM",
		day: "Mar 25",
		label: "Problem Statements released",
		highlight: false,
	},
	{
		time: "10:00 AM",
		day: "Mar 25",
		label: "Team Leaders Meeting — rules clarification & Q&A",
		highlight: false,
	},
	{
		time: "3:00 PM",
		day: "Mar 25",
		label: "Round 1 Evaluation ends",
		highlight: false,
	},
	{
		time: "8:00 AM",
		day: "Mar 26",
		label: "Round 2 Evaluation ends (Tentative)",
		highlight: false,
	},
	{
		time: "10:00 AM",
		day: "Mar 26",
		label: "Finals begin",
		highlight: false,
	},
	{
		time: "2:00",
		day: "Mar 26",
		label: "Finals conclude & Winners announced",
		highlight: false,
	},
];

export default function Timeline() {
	return (
		<section className="v2-timeline-section" id="v2-timeline">
			<div className="v2-timeline-inner">
				<div className="v2-section-heading v2-reveal">
					Time<span className="v2-gradient">line</span>
				</div>
				<div className="v2-timeline-container">
					{events.map((ev) => (
						<div
							className={`v2-timeline-item v2-reveal${ev.highlight ? " v2-highlight" : ""}`}
							key={ev.time + ev.day}
						>
							<div className="v2-timeline-time">
								<span className="v2-time-main">{ev.time}</span>
								<span className="v2-day">{ev.day}</span>
							</div>
							<div className="v2-timeline-dot" />
							<div className="v2-timeline-content">{ev.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
