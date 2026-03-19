import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export default function Nav() {
	const [open, setOpen] = useState(false);
	const [atTop, setAtTop] = useState(true);

	useEffect(() => {
		const updateAtTop = () => {
			setAtTop(window.scrollY <= 8);
		};

		updateAtTop();
		window.addEventListener("scroll", updateAtTop, { passive: true });

		return () => {
			window.removeEventListener("scroll", updateAtTop);
		};
	}, []);

	const closeMenu = () => setOpen(false);

	const scrollTo = (id: string) => () => {
		const el = document.getElementById(id);
		const nav = document.querySelector(".nav") as HTMLElement | null;
		if (el) {
			const navHeight = nav?.offsetHeight ?? 0;
			const top =
				el.getBoundingClientRect().top + window.scrollY - navHeight + 4;
			window.scrollTo({ top, behavior: "smooth" });
		}
		closeMenu();
	};

	return (
		<nav className={`nav${atTop ? " at-top" : ""}${open ? " menu-open" : ""}`}>
			<Link to="/" className="nav-logo">
				<img src="/cc.png" alt="SNUC Hacks '26" />
			</Link>
			<button
				type="button"
				className="menu-toggle"
				onClick={() => setOpen((o) => !o)}
				aria-label="Menu"
				aria-expanded={open}
			>
				[ = ]
			</button>
			<ul className={`nav-links${open ? " open" : ""}`}>
				<li>
					<button type="button" onClick={scrollTo("countdown")}>
						Countdown
					</button>
				</li>
				<li>
					<button type="button" onClick={scrollTo("details")}>
						Details
					</button>
				</li>
				<li>
					<button type="button" onClick={scrollTo("benefits")}>
						Benefits
					</button>
				</li>
				<li>
					<button type="button" onClick={scrollTo("timeline")}>
						Timeline
					</button>
				</li>
				<li>
					<button type="button" onClick={scrollTo("prizes")}>
						Prizes
					</button>
				</li>
				<li>
					<button type="button" onClick={scrollTo("faq")}>
						FAQ
					</button>
				</li>
				<li>
					<button type="button" onClick={scrollTo("contact")}>
						Contact
					</button>
				</li>
			</ul>
		</nav>
	);
}
