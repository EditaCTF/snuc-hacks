import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import V2Benefits from "../components/v2/V2Benefits";
import V2Contact from "../components/v2/V2Contact";
import V2Countdown from "../components/v2/V2Countdown";
import V2Details from "../components/v2/V2Details";
import V2Faq from "../components/v2/V2Faq";
import V2Footer from "../components/v2/V2Footer";
import V2Hero from "../components/v2/V2Hero";
import V2Marquee from "../components/v2/V2Marquee";
import V2Nav from "../components/v2/V2Nav";
import V2Prizes from "../components/v2/V2Prizes";
import V2Timeline from "../components/v2/V2Timeline";
import v2Css from "../v2.css?url";

export const Route = createFileRoute("/v2")({
	head: () => ({
		links: [{ rel: "stylesheet", href: v2Css }],
	}),
	component: V2Page,
});

const marqueeItems = [
	"25 & 26 March 2026",
	"AB3 SNU Chennai",
	"50,000 Prize Pool",
	"3 - 4 Team Members",
	"24+ Hours of Hacking",
	"SNU & SSN Students",
	"Register Now",
	"Bring Your Ideas to Life",
];

const marqueeItems2 = [
	"IDEATE // DESIGN // BUILD // DEPLOY // WIN //",
	"IDEATE // DESIGN // BUILD // DEPLOY // WIN //",
	"IDEATE // DESIGN // BUILD // DEPLOY // WIN //",
	"IDEATE // DESIGN // BUILD // DEPLOY // WIN //",
];

function V2Page() {
	useEffect(() => {
		const nav = document.querySelector(".v2-nav");
		const setNavHeight = () => {
			if (nav)
				document.documentElement.style.setProperty(
					"--nav-height",
					`${(nav as HTMLElement).offsetHeight}px`,
				);
		};
		setNavHeight();
		window.addEventListener("resize", setNavHeight);

		const els = document.querySelectorAll<HTMLElement>(".v2-reveal");
		const obs = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) e.target.classList.add("v2-visible");
				}
			},
			{ threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
		);
		for (const el of els) obs.observe(el);
		return () => {
			obs.disconnect();
			window.removeEventListener("resize", setNavHeight);
		};
	}, []);

	return (
		<div className="v2-page">
			<V2Nav />
			<V2Hero />
			<V2Marquee items={marqueeItems} />
			<V2Countdown />
			<V2Marquee items={marqueeItems2} reversed dark />
			<V2Details />
			<V2Benefits />
			<V2Timeline />
			<V2Prizes />
			<V2Faq />
			<V2Contact />
			<V2Footer />
		</div>
	);
}
