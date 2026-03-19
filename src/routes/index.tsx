import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import Countdown from "../components/Countdown";
import Details from "../components/Details";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Nav from "../components/Nav";
import Prizes from "../components/Prizes";
import Timeline from "../components/Timeline";

export const Route = createFileRoute("/")({
  head: () => ({}),
  component: App,
});

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
      <Footer />
    </div>
  );
}
