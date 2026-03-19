interface MarqueeProps {
	items: string[];
	reversed?: boolean;
	dark?: boolean;
}

export default function Marquee({
	items,
	reversed = false,
	dark = false,
}: MarqueeProps) {
	const doubled = [...items, ...items];

	return (
		<div className={`v2-marquee-wrap${dark ? " v2-dark" : ""}`}>
			<div className={`v2-marquee-track${reversed ? " v2-reversed" : ""}`}>
				{doubled.map((item, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: marquee items are duplicated strings, index is the only stable key
					<span key={i}>{item}</span>
				))}
			</div>
		</div>
	);
}
