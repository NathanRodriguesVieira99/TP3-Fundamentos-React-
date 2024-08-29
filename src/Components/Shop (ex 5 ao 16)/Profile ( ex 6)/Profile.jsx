import React, { useState } from "react";
import "./Profile.css";

function Profile() {
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

	const user = {
		nome: "Nathan",
		email: "xxxxx@gmail.com",
		endereco: {
			rua: "Rua XXX",
			numero: "00",
			cidade: "Rio de Janeiro",
		},
	};

	const toggleProfileMenu = (e) => {
		e.preventDefault();
		setIsProfileMenuOpen(!isProfileMenuOpen);
	};

	return (
		<div className="profile-container">
			<div className="profile-header">
				<p>Welcome: {user.nome}</p>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button onClick={toggleProfileMenu} className="profile-button">
					{isProfileMenuOpen ? "X" : "Profile"}
				</button>
			</div>
			{isProfileMenuOpen && (
				<div className="profile-dropdown">
					<p>Email: {user.email}</p>
					<p>Endereço:</p>
					<p>
						{user.endereco.rua}, {user.endereco.numero} - {user.endereco.cidade}
					</p>
				</div>
			)}
		</div>
	);
}

export default Profile;
