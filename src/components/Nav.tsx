import { Link } from "@tanstack/react-router";
import { useState } from "react";

export default function Nav() {
	const [open, setOpen] = useState(false);

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
		<nav className="nav">
			<Link to="/" className="nav-logo">
				SNUC<span>'26</span>
			</Link>
			<button
				type="button"
				className="menu-toggle"
				onClick={() => setOpen((o) => !o)}
				aria-label="Menu"
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
			<div className="nav-cc">CC</div>
		</nav>
	);
}
