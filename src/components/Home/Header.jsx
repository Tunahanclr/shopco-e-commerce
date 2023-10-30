import React, { useState } from "react";
import { AiOutlineSearch,AiOutlineClose } from "react-icons/ai";
import {SlBasket} from "react-icons/sl"
import {FaBars} from "react-icons/fa"
import {BiUserCircle} from "react-icons/bi"
import { NavLink } from "react-router-dom";
export default function Header() {
    const [nav,setNav]=useState(false)

    const openNav=()=>{
        setNav(!nav)
    }
  return (
    <div className="">
   <div className="flex items-center  h-[81px] px-4 justify-between max-w-[1500px] mx-auto">
        <div className="text-[#505050]" >
            <ul className=" hidden md:flex gap-6 md:gap-[60px] text-[14px] ">
                <li>
                    <a href="" className="">
                        Home
                    </a>
                </li>
                <li>
                    <a href="" className="">
                        Products
                    </a>
                </li>
                <li>
                    <a href="" className="">
                    Categories

                    </a>
                </li>
                <li>
                    <a href="" className="">
                        SALE
                    </a>
                </li>
            </ul>
            <div className="md:hidden flex gap-2 items-center">
        <FaBars className="cursor-pointer" onClick={openNav} />
        {nav && <div className="fixed bg-black/30 w-full top-0 z-50 h-screen" onClick={openNav}></div>}
        <div 
            className="bg-white z-50 absolute top-0 left-0 w-72 h-[100vh]" 
            style={{
                transform: nav ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 200ms'
            }}
        >
            <div className="flex cursor-pointer justify-end p-4">
                <AiOutlineClose size={20} onClick={openNav} />
            </div>
            <ul className="flex flex-col items-center gap-4 font-semibold text-xl mt-24 ">
                <li>
                    <a href="" className="">
                        Home
                    </a>
                </li>
                <li>
                    <a href="" className="">
                        Products
                    </a>
                </li>
                <li>
                    <a href="" className="">
                    Categories

                    </a>
                </li>
                <li>
                    <a href="" className="">
                        SALE
                    </a>
                </li>
            </ul>
        </div>
        <NavLink to={'/'}>
            <h1 className="text-black font-bold text-xl sm:text-2xl text-center">SHOP.CO</h1>
        </NavLink>
    </div>
        </div>
        <div className="md:flex hidden">
        <NavLink to={'/'}>
            <h1 className="text-black font-bold text-xl sm:text-2xl text-center">SHOP.CO</h1>
        </NavLink>
        </div>
        <div className="flex items-center">
            <input type="text" className="  w-[132px] sm:w-[250px] relative shadow-lg pl-2 bg-[#f0f0f0] rounded-full h-[35px]" placeholder="search" />
            <AiOutlineSearch className="relative right-6"/>
           <div className="flex cursor-pointer  gap-2 items-center">
           <SlBasket size={20}/>
            <BiUserCircle size={20}/>
           </div>
        </div>
   </div>
    </div>
  );
}