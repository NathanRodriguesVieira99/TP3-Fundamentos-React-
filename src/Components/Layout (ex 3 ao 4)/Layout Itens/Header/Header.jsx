import React from "react";
import "./Header.css";

function Header({ onNavigate }) {
	return (
		<>
			<header className="cabecalho">
				<nav>
					<ul className="lista">
						<li>
							<a
								href=".Home"
								onClick={(e) => {
									e.preventDefault();
									onNavigate("home");
								}}
							>
								Tour
							</a>
						</li>
						<li>
							<a href=".">Members</a>
						</li>
						<li>
							<a
								href=".Shop"
								onClick={(e) => {
									e.preventDefault();
									onNavigate("shop");
								}}
							>
								Shop
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
