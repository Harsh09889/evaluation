import { useState } from "react";
import { useEffect } from "react";

function Pagination({ current, onChange, total }) {
	const [buttons, setButtons] = useState(null);
	useEffect(() => {
		let btns = [];

		for (let i = 1; i <= total; i++) {
			btns.push(
				<button
					key={i}
					style={{
						borderColor: current === i ? "red" : "",
						padding: "1rem",
						margin: "0 0.5rem",
					}}
					onClick={(e) => onChange(i)}>
					{i}
				</button>
			);
		}
		setButtons(btns);
	});

	return (
		<div
			data-testid='page-container'
			style={{ textAlign: "center", padding: "3rem" }}>
			{buttons}
		</div>
	);
}

export default Pagination;
