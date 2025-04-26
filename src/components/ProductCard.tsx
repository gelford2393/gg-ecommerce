import React, { memo } from "react";
import { IProduct } from "../types/product";

interface IProductCardProps {
  product: IProduct;
  onViewProductCallback?: (product: IProduct) => void;
}

const ProductCard = ({ product, onViewProductCallback }: IProductCardProps) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={product.imageUrl} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text flex-grow-1">{product.description}</p>
        <h6 className="mt-auto text-primary">${product.price.toFixed(2)}</h6>
        <button
          className="btn btn-primary mt-3"
          onClick={() => onViewProductCallback?.(product)}
        >
          View Product
        </button>
      </div>
    </div>
  );
};

export default memo(ProductCard);
