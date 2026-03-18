export default function SiteFooter() {
	return (
		<footer>
			<div className="footer-grid" style={{ justifyContent: "space-between" }}>
				<div className="footer-col">
					<h4>SNUC Hacks'26</h4>
					<p>Organized by the SNUC Coding Club</p>
					<p>Shiv Nadar University Chennai</p>
				</div>
				<div className="footer-col" style={{ textAlign: "right" }}>
					<h4>Contact</h4>
					<p>
						<a href="https://www.instagram.com/snuc_cc/">@snuccodingclub</a>
					</p>
				</div>
			</div>
			<div className="footer-bottom">
				&copy; 2026 SNU Chennai {"//"} MADE BY SNUC Coding Club
			</div>
		</footer>
	);
}
