import React from 'react';

const GoodsCard = ({ product }) => {
  return (
    <div className="goods-card">
      <img src={product.image} alt={product.name} className="goods-card__image" />
      <h3 className="goods-card__title">{product.name}</h3>
      <p className="goods-card__price">${product.price}</p>
    </div>
  );
};

export default GoodsCard;
