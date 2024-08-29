import React from "react";
import "./Products.css";

import Ak47 from "../../Assets/Itens Shop/Guns/ak47.png";

function Products() {
	const produto = {
		nome: "AK47",
		preço: "R$20.000,00",
		descricao: "New Model",
		imagem: Ak47,
	};

	// console.log(produto);

	return (
		<div className="cardGuns">
			<h1 className="titleProduto">{produto.nome}</h1>
			<img
				className="gunImg"
				src={produto.imagem}
				alt={produto.nome}
				style={{ width: "190px", height: "auto" }}
			/>
			<p className="price"> Price: {produto.preço}</p>
			<p className="desc">{produto.descricao}</p>
		</div>
	);
}

export default Products;
