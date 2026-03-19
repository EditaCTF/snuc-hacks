const contacts = [
	{ name: "Niranjhan SU", phone: "8122152806" },
	{ name: "Prajesh Raam", phone: "9489687324" },
	{ name: "Surya Narayanan", phone: "9940537699" },
	{ name: "Vijayan S", phone: "8080323242" },
];

const formatPhone = (phone: string) => {
	return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
};

export default function Contact() {
	return (
		<section className="contact-section" id="contact">
			<div className="contact-inner">
				<h2 className="contact-heading">More Doubts? Contact Us</h2>
				<div className="contact-grid">
					{contacts.map((c) => (
						<a
							className="contact-card"
							key={c.name}
							href={`https://wa.me/91${c.phone}`}
							target="_blank"
							rel="noreferrer"
						>
							<span className="contact-name">{c.name}</span>
							<span className="contact-phone">{formatPhone(c.phone)}</span>
						</a>
					))}
				</div>
				<a
					className="contact-instagram"
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
