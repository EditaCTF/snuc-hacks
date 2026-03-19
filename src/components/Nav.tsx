import { Link } from "@tanstack/react-router";
import { useState } from "react";

export default function Nav() {
	const [open, setOpen] = useState(false);

	const closeMenu = () => setOpen(false);

	const scrollTo = (id: string) => () => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		closeMenu();
	};

	return (
		<nav className="v2-nav">
			<Link to="/" className="v2-nav-logo">
				SNUC<span>'26</span>
			</Link>
			<button
				type="button"
				className="v2-menu-toggle"
				onClick={() => setOpen((o) => !o)}
				aria-label="Menu"
			>
				[ = ]
			</button>
			<ul className={`v2-nav-links${open ? " v2-open" : ""}`}>
				<li>
					<button type="button" onClick={scrollTo("v2-countdown")}>
						Countdown
					</button>
				</li>
				<li>
					<button type="button" onClick={scrollTo("v2-details")}>
						Details
					</button>
				</li>
				<li>
					<button type="button" onClick={scrollTo("v2-benefits")}>
						Benefits
					</button>
				</li>
				<li>
					<button type="button" onClick={scrollTo("v2-timeline")}>
						Timeline
					</button>
				</li>
				<li>
					<button type="button" onClick={scrollTo("v2-prizes")}>
						Prizes
					</button>
				</li>
				<li>
					<button type="button" onClick={scrollTo("v2-faq")}>
						FAQ
					</button>
				</li>
				<li>
					<button type="button" onClick={scrollTo("v2-contact")}>
						Contact
					</button>
				</li>
			</ul>
			<div className="v2-nav-cc">CC</div>
		</nav>
	);
}
