const events = [
	{
		time: "9:30 AM",
		day: "Mar 25",
		label: "Problem Statement Release",
		highlight: false,
	},
	{
		time: "10:00 AM",
		day: "Mar 25",
		label: "Team Leader Meeting",
		highlight: false,
	},
	{
		time: "10:30 AM",
		day: "Mar 25",
		label: "Hackathon Begins",
		highlight: true,
	},
	{ time: "3:00 PM", day: "Mar 25", label: "Review 1", highlight: false },
	{ time: "11:00 PM", day: "Mar 25", label: "Review 2", highlight: false },
	{ time: "6:00 AM", day: "Mar 26", label: "Review 3", highlight: false },
	{
		time: "8:00 AM",
		day: "Mar 26",
		label: "Submission Deadline",
		highlight: false,
	},
	{
		time: "10:00 AM",
		day: "Mar 26",
		label: "Presentation to Judges",
		highlight: false,
	},
	{
		time: "3:00 PM",
		day: "Mar 26",
		label: "Announcement of Winners",
		highlight: true,
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
