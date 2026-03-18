import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Countdown from "../components/Countdown";
import Details from "../components/Details";
import Benefits from "../components/Benefits";
import Timeline from "../components/Timeline";
import Prizes from "../components/Prizes";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import SiteFooter from "../components/SiteFooter";

export const Route = createFileRoute("/")({ component: App });

const marqueeItems = [
	"25 & 26 March 2026",
	"AB3 SNU Chennai",
	"₹50,000 Prize Pool",
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

function App() {
	useEffect(() => {
		const nav = document.querySelector("nav");
		const setNavHeight = () => {
			if (nav)
				document.documentElement.style.setProperty(
					"--nav-height",
					`${nav.offsetHeight}px`,
				);
		};
		setNavHeight();
		window.addEventListener("resize", setNavHeight);

		const els = document.querySelectorAll<HTMLElement>(
			".reveal, .reveal-left, .reveal-right",
		);
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) e.target.classList.add("visible");
				});
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
		<>
			<div className="grid-overlay" />
			<div
				className="sticker"
				style={{ top: "45%", right: "1%", transform: "rotate(8deg)" }}
			>
				Build.Break.Repeat
			</div>
			<Nav />
			<Hero />
			<Marquee items={marqueeItems} />
			<Countdown />
			<Marquee items={marqueeItems2} reversed dark />
			<Details />
			<Benefits />
			<Timeline />
			<Prizes />
			<Faq />
			<Contact />
			<SiteFooter />
		</>
	);
}
