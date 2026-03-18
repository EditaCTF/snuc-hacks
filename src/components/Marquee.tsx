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
		<div className={`marquee-wrap${dark ? " dark" : ""}`}>
			<div className={`marquee-track${reversed ? " reversed" : ""}`}>
				{doubled.map((item, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: marquee items are duplicated strings, index is the only stable key
					<span key={i}>{item}</span>
				))}
			</div>
		</div>
	);
}
