const contacts = [
	{ name: "Niranjhan SU", phone: "8122152806" },
	{ name: "Prajesh Raam", phone: "9489687324" },
	{ name: "Surya Narayanan", phone: "9940537699" },
	{ name: "Vijayan S", phone: "8080323242" },
];

export default function V2Contact() {
	return (
		<section className="v2-contact-section" id="v2-contact">
			<div className="v2-contact-inner">
				<h2 className="v2-contact-heading">More Doubts? Contact Us</h2>
				<div className="v2-contact-grid">
					{contacts.map((c) => (
						<a
							className="v2-contact-card"
							key={c.name}
							href={`https://wa.me/91${c.phone}`}
							target="_blank"
							rel="noreferrer"
						>
							<span className="v2-contact-name">{c.name}</span>
							<span className="v2-contact-phone">{c.phone}</span>
						</a>
					))}
				</div>
				<a
					className="v2-contact-instagram"
					href="https://www.instagram.com/snuc_cc/"
					target="_blank"
					rel="noreferrer"
				>
					@snuc_cc on Instagram
				</a>
			</div>
		</section>
	);
}
