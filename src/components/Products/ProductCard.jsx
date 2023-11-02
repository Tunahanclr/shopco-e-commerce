import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-60 h-40 cursor-pointer"
          src={product.image}
          alt={product.title}
        />
        <div className="flex flex-col items-center">
          <h3 className="mt-2 text-xl font-semibold text-center">
            {product.title}
          </h3>
          <p className="mt-1 text-gray-600">{product.price} USD</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
