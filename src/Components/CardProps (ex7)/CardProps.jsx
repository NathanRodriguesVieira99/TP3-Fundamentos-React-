

import React from 'react';
import './CardProps.css'; 
const Card = ({ titulo, subtitulo, conteudo }) => {
  return (
    <div className="card">
      <h1 className="card-title">{titulo}</h1>
      <h2 className="card-subtitle">{subtitulo}</h2>
      <p className="card-content">{conteudo}</p>
    </div>
  );
};

export default Card;
