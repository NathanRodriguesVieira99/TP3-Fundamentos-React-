import React from "react";

const CardpPropsImg = ({ imagem, descricao, link }) => {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<img
				src={imagem}
				alt={descricao}
				style={{ display:'flex', Width: "100px", height: "100px", borderRadius: "8px",marginTop:'15px' }}
			/>
		</a>
	);
};

export default CardpPropsImg;
