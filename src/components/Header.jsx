import React from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import Avatar from "../assets/images/image-avatar.png";
import { IoMenu } from "react-icons/io5";

export default function Header({ cartQuantity }) {
  return (
    <header className="w-full border-b-2  h-[80px] flex items-center justify-between">
      <div className="flex gap-[40px] items-center">
        <div className="flex justify-center items-center gap-[20px] pl-[20px]">
            <IoMenu className="hidden"/>

          <h1 className=" header-text font-bold text-[38px]">Sneakers</h1>
        </div>
        <nav className="">
          <ul className="flex gap-[15px]">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="cart-account flex gap-[30px] items-center">
        <div className="cart-div">
          <PiShoppingCartLight className="text-[25px] relative" />
          <span className="cart absolute background-orange text-[10px] right-[200px] text-white font-bold flex justify-center items-center top-[26px]  w-[25px] h-[12.5px] rounded-[12.5px] ">
            {cartQuantity}
          </span>
        </div>
        <img
          src={Avatar}
          className="border-avatar w-[40px] h-[40px] border-2 rounded-full"
        />
      </div>
    </header>
  );
}
