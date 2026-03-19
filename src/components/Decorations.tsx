// SVG mesh/wireframe decorations inspired by the SNUC Hacks poster aesthetic
// Flowing parametric shapes with multiple layered strokes

export function MeshBlob1({ className = "" }: { className?: string }) {
	// Generate a flowing, star-like mesh shape with multiple offset paths
	const layers = 18;
	const paths: string[] = [];
	for (let i = 0; i < layers; i++) {
		const t = i / layers;
		const r = 80 + t * 40;
		const points: string[] = [];
		const lobes = 5;
		for (let a = 0; a <= 360; a += 2) {
			const rad = (a * Math.PI) / 180;
			const wobble = Math.sin(rad * lobes + t * 2) * (20 + t * 15);
			const x = 150 + Math.cos(rad) * (r + wobble);
			const y = 150 + Math.sin(rad) * (r + wobble);
			points.push(`${a === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
		}
		paths.push(`${points.join(" ")}Z`);
	}

	return (
		<svg
			className={`v2-mesh-decoration ${className}`}
			width="300"
			height="300"
			viewBox="0 0 300 300"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			{paths.map((d) => (
				<path
					key={d.slice(0, 30)}
					d={d}
					stroke="rgba(255,255,255,0.35)"
					strokeWidth="0.6"
					fill="none"
				/>
			))}
		</svg>
	);
}

export function MeshBlob2({ className = "" }: { className?: string }) {
	const layers = 16;
	const paths: string[] = [];
	for (let i = 0; i < layers; i++) {
		const t = i / layers;
		const r = 60 + t * 50;
		const points: string[] = [];
		const lobes = 4;
		for (let a = 0; a <= 360; a += 2) {
			const rad = (a * Math.PI) / 180;
			const wobble =
				Math.sin(rad * lobes + t * 3) * (25 + t * 12) +
				Math.cos(rad * 3 - t) * 8;
			const x = 150 + Math.cos(rad) * (r + wobble);
			const y = 150 + Math.sin(rad) * (r + wobble);
			points.push(`${a === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
		}
		paths.push(`${points.join(" ")}Z`);
	}

	return (
		<svg
			className={`v2-mesh-decoration ${className}`}
			width="300"
			height="300"
			viewBox="0 0 300 300"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			{paths.map((d) => (
				<path
					key={d.slice(0, 30)}
					d={d}
					stroke="rgba(255,255,255,0.3)"
					strokeWidth="0.6"
					fill="none"
				/>
			))}
		</svg>
	);
}

export function FlowingWaves({ className = "" }: { className?: string }) {
	const lines = 12;
	const paths: string[] = [];
	for (let i = 0; i < lines; i++) {
		const y = 30 + i * 8;
		const amp = 15 + i * 2;
		paths.push(
			`M0,${y} C125,${y - amp} 250,${y + amp} 375,${y - amp / 2} S500,${y + amp / 3} 600,${y}`,
		);
	}

	return (
		<svg
			className={`v2-mesh-decoration ${className}`}
			width="600"
			height="200"
			viewBox="0 0 600 200"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			{paths.map((d) => (
				<path
					key={d.slice(0, 30)}
					d={d}
					stroke="rgba(255,255,255,0.25)"
					strokeWidth="0.7"
					fill="none"
				/>
			))}
		</svg>
	);
}

export function MeshBlob3({ className = "" }: { className?: string }) {
	const layers = 14;
	const paths: string[] = [];
	for (let i = 0; i < layers; i++) {
		const t = i / layers;
		const r = 50 + t * 55;
		const points: string[] = [];
		const lobes = 6;
		for (let a = 0; a <= 360; a += 3) {
			const rad = (a * Math.PI) / 180;
			const wobble =
				Math.sin(rad * lobes + t * 1.5) * (18 + t * 20) +
				Math.cos(rad * 2 + t * 4) * 6;
			const x = 160 + Math.cos(rad) * (r + wobble);
			const y = 160 + Math.sin(rad) * (r + wobble);
			points.push(`${a === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
		}
		paths.push(`${points.join(" ")}Z`);
	}

	return (
		<svg
			className={`v2-mesh-decoration ${className}`}
			width="320"
			height="320"
			viewBox="0 0 320 320"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			{paths.map((d) => (
				<path
					key={d.slice(0, 30)}
					d={d}
					stroke="rgba(255,255,255,0.28)"
					strokeWidth="0.5"
					fill="none"
				/>
			))}
		</svg>
	);
}
