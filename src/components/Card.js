import React from "react";
import "./styles.css";
import Picture from '../assets/picture.png';

const Card = ({ date, title, imageUrl, onClick, size }) => {
  const isLarge = size === 'large';
  
  return (
    <div className={`card ${isLarge ? 'card--large' : 'card--small'}`}>
      <img src={Picture} alt="Фото" className={`card__image ${isLarge ? 'card__image--large' : ''}`} />
      <div className="card-info">        
        <p>{date}</p>
        <h2>{title}</h2>        
        <button onClick={onClick}>Read Full Article</button>
      </div>
    </div>
  );
};

export default Card;