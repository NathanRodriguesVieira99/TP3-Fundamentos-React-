import React from "react";
import Image from "./Image";

function GunsGallery({ images }) {
	return (
		<div className="product-list">
			{images.map((img, index) => (
				<Image
					key={index}
					src={img.src}
					alt={img.title}
					title={img.title}
					price={img.price}
					description={img.description}
				/>
			))}
		</div>
	);
}

export default GunsGallery;
