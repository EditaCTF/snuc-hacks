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
		<section className="timeline-section" id="timeline">
			<div className="timeline-inner">
				<div className="section-heading reveal">
					Time<span className="gradient">line</span>
				</div>
				<div className="timeline-container">
					{events.map((ev) => (
						<div
							className={`timeline-item reveal${ev.highlight ? " highlight" : ""}`}
							key={ev.time + ev.day}
						>
							<div className="timeline-time">
								<span className="time-main">{ev.time}</span>
								<span className="day">{ev.day}</span>
							</div>
							<div className="timeline-dot" />
							<div className="timeline-content">{ev.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
