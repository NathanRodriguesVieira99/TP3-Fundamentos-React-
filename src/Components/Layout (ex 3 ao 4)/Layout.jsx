import React from "react";
import Header from "./Layout Itens/Header/Header";
import Content from "./Layout Itens/Content/Content";
import Footer from "./Layout Itens/Footer/Footer";
import List from "./List (ex 4 )/List";

function Layout({ onNavigate }) {
	return (
		<div>
			<Header onNavigate={onNavigate} />
			<List />
			<div className="content">
				<Content />
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
