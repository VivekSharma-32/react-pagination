import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="img-block">
        <img src={product?.thumbnail} alt={product?.title} />
      </div>
      <div>
        <h5>{product?.title}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
