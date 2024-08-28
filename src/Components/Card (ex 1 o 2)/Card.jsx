import React from "react";
import "./Card.css";
import Wetto from "../assets/imagesCard/wetto.webp";
import Duckboy from "../assets/imagesCard/Duckboy.jpeg";
import Germ from "../Assets/ImagesCard/germ.jpg";
import Ramirez from "../Assets/ImagesCard/ramirez.jpg";
import NightLovell from "../Assets/ImagesCard/nightlovell.jpeg";
import Shakewell from "../Assets/ImagesCard/shakewell.jpeg";

function Card() {
	return (
		<>
			<div className="Odin">
				<div className="card">
					<img
						src={Wetto}
						alt="El Wetto"
						className="boys"
						style={{ width: "150px", height: "150px" }}
					/>
					<h1 className="name">El Wetto</h1>
					<p className="desc">
						Member of the
						<a
							className="linkSpotify"
							href="https://open.spotify.com/intl-pt/artist/1VPmR4DJC1PlOtd0IADAO0"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							$uicideBoy$
						</a>
					</p>
				</div>

				<div className="card">
					<img
						src={Duckboy}
						alt="Duckboy"
						className="boys"
						style={{ width: "150px", height: "150px" }}
					/>
					<h1 className="name">Duckboy</h1>
					<p className="desc">
						Member of the
						<a
							className="linkSpotify"
							href="https://open.spotify.com/intl-pt/artist/1VPmR4DJC1PlOtd0IADAO0"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							$uicideBoy$
						</a>
					</p>
				</div>

				<div className="card">
					<img
						src={Germ}
						alt="Germ"
						className="boys"
						style={{ width: "150px", height: "150px" }}
					/>
					<h1 className="name">Germ</h1>
					<p className="desc">
						Member of
						<a
							className="linkSpotify"
							href="https://open.spotify.com/intl-pt/artist/1VPmR4DJC1PlOtd0IADAO0"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							Greyfivenine
						</a>
					</p>
				</div>
				<div className="card">
					<img
						src={Ramirez}
						alt="Germ"
						className="boys"
						style={{ width: "150px", height: "150px" }}
					/>
					<h1 className="name">Ramirez</h1>
					<p className="desc">
						Member of
						<a
							className="linkSpotify"
							href="https://open.spotify.com/intl-pt/artist/1VPmR4DJC1PlOtd0IADAO0"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							Greyfivenine
						</a>
					</p>
				</div>
				<div className="card">
					<img
						src={Shakewell}
						alt="Germ"
						className="boys"
						style={{ width: "150px", height: "150px" }}
					/>
					<h1 className="name">Shakewell</h1>
					<p className="desc">
						Member of
						<a
							className="linkSpotify"
							href="https://open.spotify.com/intl-pt/artist/1VPmR4DJC1PlOtd0IADAO0"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							Greyfivenine
						</a>
					</p>
				</div>
				<div className="card">
					<img
						src={NightLovell}
						alt="Germ"
						className="boys"
						style={{ width: "150px", height: "150px" }}
					/>
					<h1 className="name">NightLovell</h1>
					<p className="desc">
						Member of
						<a
							className="linkSpotify"
							href="https://open.spotify.com/intl-pt/artist/1VPmR4DJC1PlOtd0IADAO0"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							Greyfivenine
						</a>
					</p>
				</div>
			</div>
		</>
	);
}

export default Card;
