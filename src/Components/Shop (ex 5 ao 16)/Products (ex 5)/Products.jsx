import React from "react";
import "./Products.css";

import Ak47 from "../../Assets/Itens Shop/Guns/ak47.png";
import Glock from "../../Assets/Itens Shop/Guns/glock.png";

function Products() {
	const produtos = [
		{
			nome: "AK47",
			preço: "R$20.000,00",
			descricao: "New Model",
			imagem: Ak47,
		},
		{
			nome: "Glock",
			preço: "R$5.000,00",
			descricao: "New Model",
			imagem: Glock,
		},
	];

	// console.log(produto);

	return (
		<>
			<div className="product-list">
				{produtos.map((produto, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index} className="cardGuns">
						<h1 className="titleProduto">{produto.nome}</h1>
						<img
							className="gunImg"
							src={produto.imagem}
							alt={produto.nome}
							style={{ width: "190px", height: "auto" }}
						/>
						<p className="price">Price: {produto.preço}</p>
						<p className="desc">{produto.descricao}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default Products;
