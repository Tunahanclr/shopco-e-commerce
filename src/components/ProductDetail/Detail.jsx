import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "../../redux/productSlice";
import { addToCart } from "../../redux/cartSlice";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [dispatch, id]);


  const addBasket = () => {
    if (product && product.id) {
      const data = {
        id: product.id,
        image: product.image,
        name: product.title,
        price: product.price,
        quantity: quantity,
      };
      dispatch(addToCart(data)); // addToCard yerine addToCart kullanın
      navigate("/cart");
    } else {
      console.error("Ürün bilgileri eksik veya hatalı.");
    }
  };
  return (
    <div className="mx-auto mt-24 md:mt-16">
      {loading ? (
        <div className="text-center text-2xl font-semibold">Yükleniyor...</div>
      ) : (
        <div className="flex h-full md:flex-row flex-col mx-auto max-w-[1110px] items-center justify-center gap-8">
          <div className="w-[300px] sm:w-[400px] md:w-[500px]">
            <img src={product.image} alt={product.title} className="rounded-lg" />
          </div>
          <div className="flex flex-col p-2">
            <h2 className="text-xl md:text-3xl font-semibold">{product.title}</h2>
            <p className="text-sm md:text-lg">{product.description}</p>
            <div className="flex gap-2 items-center text-lg font-semibold">
              Kategori: <p className="flex items-center">{product.category}</p>
            </div>
            <p className="text-xl font-semibold text-red-500">
              Fiyat: ${product.price}
            </p>
            <label htmlFor="quantity" className="text-lg font-semibold">
              Miktar:
            </label>
            <div className="flex items-center text-4xl font-semibold">
              <span className="cursor-pointer" onClick={decrement}>
                -
              </span>
              <span className="mx-3">{quantity}</span>
              <span className="cursor-pointer" onClick={increment}>
                +
              </span>
            </div>
            <button
              onClick={addBasket}
              className="bg-green-500 text-white font-semibold rounded-md p-4 w-[200px] mt-4 hover:bg-green-600 transition duration-300"
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
