import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative h-full flex w-[200px] justify-center items-center border border-[#e4e4e4] mb-4 object-cover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-[80px] md:w-[120px] flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center">
          <img className="cursor-pointer" src={product.image} alt="" />

          <div
            className={`absolute top-0 left-0 right-0 bottom-0 bg-white opacity-0 flex flex-col justify-center items-center transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              className="border hover:bg-black hover:text-white transition-all border-gray-400 p-2 m-2"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              Product Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
