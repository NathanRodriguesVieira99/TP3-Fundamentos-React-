import React from "react";
import "./Header.css";

import Content from "../Content/Content";
import Footer from "../Footer/Footer";

function Header() {
	return (
		<>
			<header className="cabecalho">
				<nav>
					<ul className="lista">
						<a href=".cabecalho">
							<li>Home</li>
						</a>
						<a href=".members">
							<li>Members</li>
						</a>
						<a href=".shop">
							<li>Shop</li>
						</a>
					</ul>
				</nav>
			</header>
			<div className="content">
				<Content />
			</div>
			<div className="footer">
				<Footer />
			</div>
		</>
	);
}

export default Header;
