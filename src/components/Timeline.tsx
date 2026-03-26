const events = [
	{
		time: "06:00 PM",
		day: "Mar 18",
		label: "Registrations open",
		highlight: true,
	},
	{
		time: "11:59 PM",
		day: "Mar 23",
		label: "Registrations closed",
		highlight: false,
	},
	{
		time: "09:00 AM",
		day: "Mar 25",
		label: "Participants start arriving at venue",
		highlight: false,
	},
	{
		time: "09:30 AM",
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
		time: "03:30 PM",
		day: "Mar 25",
		label: "Round 1 Evaluation ends",
		highlight: false,
	},
	{
		time: "07:30 AM",
		day: "Mar 26",
		label: "Round 2 Evaluation and Form Submission ends",
		highlight: false,
	},
	{
		time: "08:30 AM",
		day: "Mar 26",
		label: "Finalists announced",
		highlight: false,
	},
	{
		time: "10:00 AM",
		day: "Mar 26",
		label: "Finals begin",
		highlight: false,
	},
	{
		time: "02:00 PM",
		day: "Mar 26",
		label: "Finals conclude & Winners announced",
		highlight: false,
	},
];

export default function Timeline() {
	const isEventCompleted = (eventDay: string, eventTime: string) => {
		const now = new Date();

		// Parse event date (format: "Mar 23")
		const eventDateParts = eventDay.split(" ");
		const monthStr = eventDateParts[0];
		const eventDateNum = parseInt(eventDateParts[1]);

		// Convert month string to number
		const months: { [key: string]: number } = {
			Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
			Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
		};
		const eventMonth = months[monthStr];

		// Parse event time
		const timeParts = eventTime.match(/(\d+):(\d+)\s(AM|PM)/);
		let eventHour = parseInt(timeParts[1]);
		const eventMinute = parseInt(timeParts[2]);
		const meridiem = timeParts[3];

		if (meridiem === "PM" && eventHour !== 12) eventHour += 12;
		if (meridiem === "AM" && eventHour === 12) eventHour = 0;

		// Create event datetime (assuming 2026)
		const eventDateTime = new Date(2026, eventMonth, eventDateNum, eventHour, eventMinute);
		return eventDateTime < now;
	};

	return (
		<section className="timeline-section" id="timeline">
			<div className="timeline-inner">
				<div className="section-heading reveal">
					Time<span className="gradient">line</span>
				</div>
				<div className="timeline-container">
					{events.map((ev) => {
						const completed = isEventCompleted(ev.day, ev.time);
						return (
							<div
								className={`timeline-item reveal${ev.highlight ? " highlight" : ""}${completed ? " completed" : ""}`}
								key={ev.time + ev.day}
							>
								<div className="timeline-time">
									<span className="day">{ev.day}</span>
									<span className="time-main">{ev.time}</span>
								</div>
								<div className="timeline-dot" />
								<div className="timeline-content">{ev.label}</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
