import React from 'react';

function Shop({ onNavigate }) {
  return (
    <div>
      <h1>Shop Page</h1>
      <p>Bem-vindo à página de loja!</p>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button onClick={() => onNavigate('home')}>Voltar para Home</button>
    </div>
  );
}

export default Shop;
