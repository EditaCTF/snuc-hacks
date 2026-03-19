import { useState } from "react";

const faqs = [
	{
		q: "Who can participate?",
		a: "SNUC Hacks'26 is open to all currently enrolled students of SNU Chennai and SSN College of Engineering. Form a team of up to 4 members and get ready to build.",
	},
	{
		q: "How do I register?",
		a: 'Click the "Register Now" button on this page. Fill in your team details and you\'ll receive a confirmation email. Registration is free.',
	},
	{
		q: "When will problem statements be released?",
		a: "Problem statements will be released on the day of the event. This gives teams time to brainstorm before the hacking begins.",
	},
	{
		q: "Can I participate solo?",
		a: "Yes, solo participation is allowed. However, we strongly recommend forming a team of 2-4 members for the best experience. Lone wolves welcome, but packs hunt better.",
	},
	{
		q: "What should I bring?",
		a: "Your laptop, charger, any hardware you need, student ID, and an unstoppable attitude. Sleeping bags optional but recommended — it's 24 hours of raw coding.",
	},
	{
		q: "Is food provided?",
		a: "Yes. Meals, snacks, and caffeine will be provided throughout the event. We keep you fueled so you keep shipping. No one codes hungry on our watch.",
	},
	{
		q: "What tech is allowed?",
		a: "Any programming language, framework, or tool is allowed. Use APIs, open-source libraries, cloud services — whatever you need. Pre-written code is not permitted; all work must be done during the hackathon.",
	},
];

export default function V2Faq() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i);

	return (
		<section className="v2-faq-section" id="v2-faq">
			<div className="v2-faq-inner">
				<div className="v2-section-heading v2-reveal">
					F.A.<span className="v2-gradient">Q.</span>
				</div>
				<div className="v2-faq-container">
					{faqs.map((item, i) => {
						const isOpen = activeIndex === i;
						return (
							<div
								key={item.q}
								className={`v2-faq-item${isOpen ? " v2-active" : ""}`}
							>
								<button
									type="button"
									className="v2-faq-question"
									onClick={() => toggle(i)}
								>
									<span>{item.q}</span>
									<span className="v2-toggle">{isOpen ? "\u2212" : "+"}</span>
								</button>
								<div className="v2-faq-answer">
									<div className="v2-faq-answer-wrap">
										<div className="v2-faq-answer-inner">{item.a}</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
