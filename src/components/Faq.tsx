import { Link } from "@tanstack/react-router";
import { useState } from "react";

const faqs = [
	{
		q: "Is it online or offline?",
		a: "Offline! The event will take place in AB3, SNU Chennai.",
	},
	{
		q: "What are the timings?",
		a: "The hack runs from 9:00 AM on 25th March to 9:00 AM on 26th March (24 hours), followed by evaluation rounds and finals till approximately 2:00 PM on 26th March.",
	},
	{
		q: "Do we have to stay for the entire 24 hours?",
		a: "Participants are currently expected to remain in the venue for the duration of the hackathon. Classrooms will be allocated for participants who wish to sleep. Hostellers are not allowed to go back to their rooms as well",
	},
	{
		q: "Can day scholars sleep in AB3?",
		a: "Yes, classrooms will be allocated for participants to rest in.",
	},
	{
		q: "What is the registration fee?",
		a: "Free! Registration is completely free of charge.",
	},
	{
		q: "When does registration close?",
		a: "Registrations open 18th March and close on 23rd March.",
	},
	{
		q: "Are there different tracks?",
		a: "There are Problem Statements and Open Innovation — no strict tracks. You're free to expand your solutions beyond the baseline expectations of the PS as well.",
	},
	{
		q: "Will food be provided?",
		a: "Refreshments will be provided to all participants. However, no meals such as lunch or dinner will be served — participants are encouraged to stock up on their own food and snacks.",
	},
	{
		q: "Will there be enough power outlets?",
		a: "We will provide as many extension boards as we can. Teams are recommended to bring their own extension cords as well.",
	},
	{
		q: "Is this open to students outside SNU and SSN?",
		a: "No, SNUC Hacks '26 is open only to SNU and SSN students.",
	},
	{
		q: "What about participants involved in Sports Day on 26th March?",
		a: "We understand some participants may be involved in Sports Day activities. Affected teams can have available teammates present for judging, or coordinate their arrival time with the OC. Priority slots or post-1:00 PM judging can be arranged if needed — please reach out to the organizing committee in advance.",
	},
];

export default function Faq() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i);

	return (
		<section className="faq-section" id="faq">
			<div className="faq-inner">
				<div className="section-heading reveal">
					FAQ<span className="gradient">s</span>
				</div>
				<div className="faq-container">
					{faqs.filter(item => [
					"Is it online or offline?",
					"What are the timings?",
					"What is the registration fee?",
					"Will food be provided?",
					"Is this open to students outside SNU and SSN?",
				].includes(item.q)).map((item, i) => {
						const isOpen = activeIndex === i;
						return (
							<div
								key={item.q}
								className={`faq-item${isOpen ? " active" : ""}`}
							>
								<button
									type="button"
									className="faq-question"
									onClick={() => toggle(i)}
								>
									<span>{item.q}</span>
									<span className="toggle">{isOpen ? "\u2212" : "+"}</span>
								</button>
								<div className="faq-answer">
									<div className="faq-answer-wrap">
										<div className="faq-answer-inner">{item.a}</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="faq-more">
					<Link to="/rules" hash="faq" className="btn btn-outline faq-more-btn">
						View more in our Rulebook <span className="btn-arrow">&rarr;</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
