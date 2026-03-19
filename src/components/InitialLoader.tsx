import { useEffect, useState } from "react";

const LOGO_REVEAL_MS = 200;
const LOAD_DELAY_MS = 400;
const FADE_DURATION_MS = 350;

export default function InitialLoader() {
	const [isVisible, setIsVisible] = useState(true);
	const [isLogoVisible, setIsLogoVisible] = useState(false);
	const [hasLoaded, setHasLoaded] = useState(
		typeof document !== "undefined" && document.readyState === "complete",
	);
	const [isFading, setIsFading] = useState(false);

	useEffect(() => {
		const logoTimer = window.setTimeout(() => {
			setIsLogoVisible(true);
		}, LOGO_REVEAL_MS);

		const onLoad = () => setHasLoaded(true);
		if (!hasLoaded) {
			window.addEventListener("load", onLoad, { once: true });
		}

		return () => {
			window.clearTimeout(logoTimer);
			window.removeEventListener("load", onLoad);
		};
	}, [hasLoaded]);

	useEffect(() => {
		if (!hasLoaded || !isLogoVisible) return;

		let fadeTimer: number | undefined;
		let hideTimer: number | undefined;

		fadeTimer = window.setTimeout(() => {
			setIsFading(true);
		}, LOAD_DELAY_MS);

		hideTimer = window.setTimeout(() => {
			setIsVisible(false);
		}, LOAD_DELAY_MS + FADE_DURATION_MS);

		return () => {
			if (fadeTimer) window.clearTimeout(fadeTimer);
			if (hideTimer) window.clearTimeout(hideTimer);
		};
	}, [hasLoaded, isLogoVisible]);

	if (!isVisible) return null;

	return (
		<div className={`initial-loader${isFading ? " is-fading" : ""}`}>
			<img
				src="/cc.svg"
				alt="Loading"
				className={`initial-loader-logo${isLogoVisible ? " is-visible" : ""}`}
			/>
		</div>
	);
}