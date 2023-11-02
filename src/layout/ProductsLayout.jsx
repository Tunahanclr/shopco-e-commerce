import React from 'react'
import { NavLink } from 'react-router-dom'
import { LiaGreaterThanSolid } from 'react-icons/lia'
export default function ProductsLayout() {
  return (
    <div className="relative">
    <img
      src="https://cs-everything-fashion-new1.myshopify.com/cdn/shop/files/kumo_br.png?v=1675051121"
      className=" w-full h-[200px]  sm:h-[400px]  object-cover  "
      alt=""
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
      <h2 className="text-black font-extrabold text-2xl sm:text-4xl">Products</h2>
          <div className='flex mt-1 items-center text-xs sm:text-xl font-light gap-2 justify-center'>
          <NavLink to={'/'} className=''>
              Home 
          </NavLink>
          <LiaGreaterThanSolid className='text-gray-950 '/>
          <p>Shop</p>
          </div>
    </div>
  </div>  )
}
