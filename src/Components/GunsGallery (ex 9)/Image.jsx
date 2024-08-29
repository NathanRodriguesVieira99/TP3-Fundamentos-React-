import React from "react";
import "./image.css";

const Image = ({ src, alt, title, price, description }) => {
	return (
		<div className="cardGuns">
			<h2 className="titleProduto">{title}</h2>
			<img
				src={src}
				alt={alt}
				className="gunImg"
				style={{ width: "190px", height: "auto" }}
			/>
			<p className="price">Price: {price}</p>
			<p className="desc">{description}</p>
		</div>
	);
};

export default Image;
