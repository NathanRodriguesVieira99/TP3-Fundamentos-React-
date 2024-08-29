import React from "react";
import "./Shop.css";

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

			<Products />
		</>
	);
}

export default Shop;
