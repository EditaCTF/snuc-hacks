import { useState } from "react";

export default function Nav() {
	const [open, setOpen] = useState(false);

	const closeMenu = () => setOpen(false);

	return (
		<nav>
			<div className="logo">
				SNUC<span>'26</span>
			</div>
			<button
				type="button"
				className="menu-toggle"
				onClick={() => setOpen((o) => !o)}
				aria-label="Menu"
			>
				[ = ]
			</button>
			<ul className={open ? "open" : ""} onClick={closeMenu} onKeyDown={closeMenu}>
				<li>
					<a href="#countdown">Countdown</a>
				</li>
				<li>
					<a href="#details">Details</a>
				</li>
				<li>
					<a href="#benefits">Benefits</a>
				</li>
				<li>
					<a href="#timeline">Timeline</a>
				</li>
				<li>
					<a href="#prizes">Prizes</a>
				</li>
				<li>
					<a href="#faq">FAQ</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
}
