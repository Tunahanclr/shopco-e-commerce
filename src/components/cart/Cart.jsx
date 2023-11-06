import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/cartSlice";

export default function Cart() {
  const carts = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalAmount = carts.reduce((total, item) => total + item.price * item.quantity, 0);
  const roundedTotal = Math.round(totalAmount);
  return (
    <div className="container min-h-screen mx-auto mt-8 p-4">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
      {carts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {carts.map((item, i) => (
            <div key={i} className="bg-white p-4 shadow-md rounded-lg flex-col  sm:flex-row flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                
                <div className="w-2/5"> {/* Ürün adı ve fiyat için sabit genişlik */}
                  <h2 className="text-lg font-semibold line-clamp-2">{item.name}</h2>
                  
                  <p className="text-gray-500">${item.price}</p>
                </div>
                <div className=""> {/* Ürün miktarı için sabit genişlik */}
                  <div className="text-sm text-gray-500"> quantity:{item.quantity === 1 ? "(1)" : `(${item.quantity})`}</div>
                </div>
              </div>
              <div className="w-1/5 text-xl font-semibold text-right">${item.quantity * item.price}</div> {/* Toplam tutar için sağa hizalı */}
              <button
                className="bg-red-500 text-white px-3 py-2 rounded-lg"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center min-h-screen flex justify-center items-center">
          <p className="text-lg text-gray-500">Your cart is empty...</p>
        </div>
      )}
      {carts.length > 0 && (
        <div className="mt-6 flex items-center justify-between">
          <div className="text-xl font-semibold">Total Amount: ${totalAmount}</div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
         
        </div>
      )}
    </div>
  );
}
