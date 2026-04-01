import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export default function Nav() {
	const [open, setOpen] = useState(false);
	const [atTop, setAtTop] = useState(true);
	const navigate = useNavigate();
	const location = useLocation();

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

	const doScroll = (id: string) => {
		const el = document.getElementById(id);
		const nav = document.querySelector(".nav") as HTMLElement | null;
		if (el) {
			const navHeight = nav?.offsetHeight ?? 0;
			const top =
				el.getBoundingClientRect().top + window.scrollY - navHeight + 4;
			window.scrollTo({ top, behavior: "smooth" });
		}
	};

	const scrollTo = (id: string) => () => {
		closeMenu();
		if (location.pathname !== "/") {
			navigate({ to: "/" }).then(() => {
				setTimeout(() => doScroll(id), 120);
			});
		} else {
			doScroll(id);
		}
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
				<li>
					<Link to="/rules">Rulebook</Link>
				</li>
				<li>
					<Link to="/certificate">Certificates</Link>
				</li>
			</ul>
		</nav>
	);
}
