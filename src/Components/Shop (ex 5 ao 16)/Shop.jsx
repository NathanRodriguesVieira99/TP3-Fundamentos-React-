import React from "react";

function Shop({ onNavigate }) {
	return (
		<div>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button onClick={() => onNavigate("home")}>Voltar para Home</button>
		</div>
	);
}

export default Shop;
