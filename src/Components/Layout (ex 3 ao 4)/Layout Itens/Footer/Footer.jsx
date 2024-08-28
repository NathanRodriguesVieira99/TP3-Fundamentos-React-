import React from "react";
import Logo from "../../../Assets/Logo/g59.png";
import "./Footer.css";

function Footer() {
	return (
		<div>
			<div className="container">
				<div className="paiDaImg">
					<img src={Logo} alt="Logo GreyFiveNine" />
				</div>

				<div className="paiDasRedes">
					<a
						className="icons"
						href="https://www.linkedin.com/in/nathan-rodrigues-vieira-207747252/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands fa-linkedin" />
					</a>
					<a
						className="icons"
						href="https://www.youtube.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands fa-youtube" />
					</a>
					<a
						className="icons"
						href="https://www.instagram.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands fa-instagram" />
					</a>
				</div>

				<div className="LinksNav">
					<div className="linksFilhos">
						<ul className="listaLinks">
							<li className="Links">
								<a href=".">Home</a>
							</li>
							<li>
								<a href=".">Members</a>
							</li>
							<li>
								<a href=".">Shop</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
