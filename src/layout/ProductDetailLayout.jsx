import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { getProductDetail } from '../redux/productSlice'
import {LiaGreaterThanSolid} from "react-icons/lia"
export default function ProductDetailLayout() {
    const {id}=useParams()
    const dispatch=useDispatch()
  const { product } = useSelector((state) => state.products);
  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [dispatch, id]);
  return (
<div className="relative">
<img
      src="https://cs-everything-fashion-new1.myshopify.com/cdn/shop/files/kumo_br.png?v=1675051121"
      className=" w-full h-[200px]  sm:h-[400px]  object-cover  "
      alt=""
    />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
    <h2 className="text-black font-extrabold text-2xl sm:text-4xl">Products</h2>
        <div className='flex items-center text-xs sm:text-xl font-light gap-2 justify-center'>
        <NavLink to={'/'} className=''>
            Home
        </NavLink>
        <LiaGreaterThanSolid className='text-gray-950 '/>
        <p>{product.title}</p>
        </div>
  </div>
</div>

  )
}
