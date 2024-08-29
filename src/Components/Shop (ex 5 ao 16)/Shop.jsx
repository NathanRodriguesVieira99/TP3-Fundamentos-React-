import React from "react";
import "./Shop.css";

import CardProps from "../CardProps (ex7)/CardProps";
import Profile from "./Profile ( ex 6)/Profile";
import Products from "./Products (ex 5)/Products";

function Shop({ onNavigate }) {
	return (
		<>
			<header>
				<nav>
					<div className="navbar">
						<a href="#" className="logo">
							Ammu Nation
						</a>
						<a href="home" onClick={() => onNavigate("home")}>
							Home{" "}
						</a>

						<a href="#">Products</a>

						<a href="#">About</a>

						<a href="#">Contact</a>
					</div>

					<a href="#">
						<Profile />
					</a>
				</nav>
			</header>
			<div>
				<CardProps
					titulo="Atenção!"
					subtitulo="🔞🔞🔞"
					conteudo="Site de vendas de armas, proibido para menores de 18"
				/>
			</div>
			<Products />
		</>
	);
}

export default Shop;
