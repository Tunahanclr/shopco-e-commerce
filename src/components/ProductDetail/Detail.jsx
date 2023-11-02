import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../redux/productSlice';
import {AiFillStar} from "react-icons/ai"

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [dispatch, id]);
console.log(product)
 

  return (
    <div className=" mx-auto mt-24 md:mt-16">
      {loading ? (
        <div className="text-center text-2xl font-semibold">Loading...</div>
      ) : (
        <div className="flex h-full md:flex-row flex-col mx-auto max-w-[1110px]  items-center justify-center gap-8">
          <div className=" w-[300px] sm:w-[400px] md:w-[1500px]">
            <img src={product.image} alt={product.title} className="rounded-lg" />
          </div>
          <div className="flex flex-col p-2">
            <h2 className=" text-xl md:text-3xl font-semibold">{product.title}</h2>
            <p className=" text-sm md:text-lg">{product.description}</p>
            <div className='flex gap-2 items-center text-lg font-semibold'> 
            Category: <p className='flex items-center'>{product.category}</p>
                </div>
            <p className="text-xl font-semibold text-red-500">Price: ${product.price}</p>
            <label htmlFor="quantity" className="text-lg font-semibold">
              Quantity:
            </label>
         
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-16 h-10 border rounded-md px-2 text-lg"
            />
        
            <button
              className="bg-green-500 text-white font-semibold rounded-md p-4 w-[200px]  mt-4 hover:bg-green-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
