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
		label: "Hackathon Begins !!!",
		highlight: true,
		timeStyle: { color: "var(--gold)" },
		contentStyle: {
			fontFamily: "'Bebas Neue', sans-serif",
			fontSize: "1.8rem",
			letterSpacing: "3px",
			color: "var(--gold)",
		},
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
		timeStyle: { color: "var(--gold)" },
		contentStyle: {
			fontFamily: "'Bebas Neue', sans-serif",
			fontSize: "1.5rem",
			letterSpacing: "3px",
			color: "var(--gold)",
		},
	},
];

export default function Timeline() {
	return (
		<section className="timeline-section" id="timeline">
			<div className="section-heading reveal" style={{ color: "var(--cream)" }}>
				Time
				<span
					className="stroke"
					style={
						{ WebkitTextStrokeColor: "var(--cream)" } as React.CSSProperties
					}
				>
					line
				</span>
			</div>
			<div className="timeline-container">
				{events.map((ev) => (
					<div className="timeline-item reveal" key={ev.time}>
						<div className="timeline-time" style={ev.timeStyle}>
							{ev.time}
							<span className="day">{ev.day}</span>
						</div>
						<div className="timeline-line" />
						<div className="timeline-content" style={ev.contentStyle}>
							{ev.label}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
