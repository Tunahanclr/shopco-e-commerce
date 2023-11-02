import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import { getProducts } from "../../redux/productSlice";
import { NavLink } from "react-router-dom";

export default function Products() {
  const dispatch = useDispatch(); // useDispatch fonksiyonunu çağırın
  const { products, loading } = useSelector((state) => state.products); // State ismi "products"
  useEffect(() => {
    dispatch(getProducts()); // Fonksiyon çağrısı "getProducts"
  }, [dispatch]);
  return (
    <div className="h-full">
      <h2 className="text-black font-bold mt-12 sm:mt-20 text-center text-2xl ">
        Our Trending Products
      </h2>
      {loading ? (
        "Loading..."
      ) : (
        <div className="grid-cols-2 mt-10 sm:grid-cols-4 items-center space-x-1 place-content-center sm:space-x-3 md:space-x-8  grid max-w-[1100px] mx-auto">
          {products.slice(0, 4).map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      )}
      <div className=" hidden  grid-cols-4 space-x-3 md:space-x-8 items-center place-content-center mt-12 sm:grid max-w-[1100px] mx-auto">
        {products.slice(4, 8).map((product, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </div>
      <div className="flex justify-center mt-2 items-center">
        <NavLink to={'/products'} className=" mt-2 flex justify-between items-center gap-2 cursor-pointer bg-white text-center text-[16px] border border-black hover:text-white h-[46px] hover:bg-black transition-all px-[25px] ">
          Explore More
          <AiOutlineArrowRight/>
        </NavLink>
      </div>
    </div>
  );
}
