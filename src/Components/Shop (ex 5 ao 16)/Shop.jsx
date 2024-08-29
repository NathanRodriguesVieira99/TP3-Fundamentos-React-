import React from "react";
import "./Shop.css";

import CardProps from "../CardProps (ex7)/CardProps";
import Profile from "./Profile ( ex 6)/Profile";
import Products from "./Products (ex 5)/Products";
import CardPropsImg from "../CardPropsImg (ex 8)/CardPropsImg";
import GunsGallery from "../GunsGallery (ex 9)/GunsGallery";

// fotos do ex 9
import Crossbow from "../Assets/Itens Shop/Guns/crossbow.png";
import Fal from "../Assets/Itens Shop/Guns/fal.png";
import Tec9 from "../Assets/Itens Shop/Guns/tec9.png";

function Shop({ onNavigate }) {
	const images = [
		{
			src: Crossbow,
			title: "Crossbow",
			price: " R$5.000,00 ",
			description: "New Model",
		},
		{
			src: Fal,
			title: "Fal",
			price: "R$15.000,00",
			description: "Sold Out",
		},
		{
			src: Tec9,
			title: "Tec-9",
			price: " R$2.000,00",
			description: "Sold Out",
		},
	];

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
			<div style={{ display: "flex" }}>
				<CardProps
					titulo="Atenção!"
					subtitulo="🔞🔞🔞"
					conteudo="Site de vendas de armas, proibido para menores de 18"
				/>
				<CardPropsImg
					imagem="https://lodge-cdn.ammunitiontogo.com/lodge/wp-content/uploads/BSS6016-web.jpg"
					descricao="tambem temos munição"
					link="https://www.linkedin.com/in/nathan-rodrigues-vieira-207747252/"
				/>
			</div>
			<div className="ItensShopGuns" style={{ display: "flex" }}>
				<Products />
				<GunsGallery images={images} />
			</div>
		</>
	);
}

export default Shop;
