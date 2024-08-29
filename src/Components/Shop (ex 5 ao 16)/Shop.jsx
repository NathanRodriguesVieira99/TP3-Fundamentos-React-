import React from "react";
import "./Shop.css";

import Profile from "./Profile/Profile";
import Products from "./Products/Products";

function Shop({ onNavigate }) {
	return (
		<>
			<header>
				<nav>
					<div className="navbar">
						<a href="." className="logo">
							Ammu Nation
						</a>
						<a href=".home" onClick={() => onNavigate("home")}>
							Home{" "}
						</a>
						<a href=".produtos">Products</a>
						<a href=".sobre">About</a>
						<a href=".contato">Contact</a>
					</div>
					<a href=".perfil">
						<Profile />
					</a>
				</nav>
			</header>

			<Products />
		</>
	);
}

export default Shop;
