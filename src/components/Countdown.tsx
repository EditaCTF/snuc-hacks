import { useEffect, useState } from "react";

const TARGET = new Date("March 25, 2026 09:30:00").getTime();

function pad(n: number) {
	return String(n).padStart(2, "0");
}

function getTimeLeft() {
	const diff = TARGET - Date.now();
	if (diff <= 0) return { d: "00", h: "00", m: "00", s: "00" };
	return {
		d: pad(Math.floor(diff / (1000 * 60 * 60 * 24))),
		h: pad(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
		m: pad(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))),
		s: pad(Math.floor((diff % (1000 * 60)) / 1000)),
	};
}

export default function Countdown() {
	const [time, setTime] = useState(getTimeLeft);

	useEffect(() => {
		const id = setInterval(() => setTime(getTimeLeft()), 1000);
		return () => clearInterval(id);
	}, []);

	return (
		<section className="v2-countdown-section" id="v2-countdown">
			<div className="v2-countdown-inner">
				<h2 className="v2-countdown-title v2-reveal">
					Hacking Begins <span>In</span>
				</h2>
				<div className="v2-countdown-grid v2-reveal">
					<div className="v2-countdown-box">
						<span className="v2-number">{time.d}</span>
						<span className="v2-label">Days</span>
					</div>
					<div className="v2-countdown-box">
						<span className="v2-number">{time.h}</span>
						<span className="v2-label">Hours</span>
					</div>
					<div className="v2-countdown-box">
						<span className="v2-number">{time.m}</span>
						<span className="v2-label">Minutes</span>
					</div>
					<div className="v2-countdown-box">
						<span className="v2-number">{time.s}</span>
						<span className="v2-label">Seconds</span>
					</div>
				</div>
			</div>
		</section>
	);
}
