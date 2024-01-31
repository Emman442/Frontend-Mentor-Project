import React, {useState} from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import Avatar from "../assets/images/image-avatar.png";
import { IoMenu } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";



export default function Header({ cartQuantity, imgArr, active }) {
  const [cartActive, setCartActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const handleCartClick = () =>{
    setCartActive(!cartActive)
  }
  return (
    <>
      {cartActive ? (
        <div className="fixed border-[1px] shadow-lg bg-white w-[350px] h-[230px] top-[60px] right-[30px] justify-center z-50 mobile-modal-2 rounded-lg">
          <div>
            <div className="text-xl font-semibold  h-[70px] border-b-2 flex items-center w-full">
              <p className="mx-4 h1">Cart</p>
            </div>

            <div className="flex gap-[13px] h-[100px] items-center justify-center">
              <img
                src={active === null ? imgArr[1] : imgArr[active]}
                alt=""
                className="rounded w-[70px] h-[70px]"
              />
              <div className="cart-modal-text">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {cartQuantity}{" "}
                  <span className="font-bold">$375.00</span>
                </p>
              </div>
              <RiDeleteBin5Line className="text-[23px]" />
            </div>
            <button className="background-orange flex w-[90%] mx-auto mb-3 text-white h-[60px] rounded-lg items-center justify-center">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <header className="w-full  border-b-2  h-[80px] flex items-center justify-between">
        <div className="flex gap-[40px] items-center">
          <div className="flex justify-center items-center gap-[20px] pl-[20px]">
            <IoMenu
              className="hidden"
              onClick={() => setMobileMenuActive(!mobileMenuActive)}
            />

            <h1 className=" header-text font-bold text-[38px]">Sneakers</h1>
          </div>
          <nav
            className={`${
              mobileMenuActive
                ? " font-bold fixed inset-0 block w-[65%] h-[100%] z-50"
                : ""
            }`}
          >
            <span
              className="nav-cancel absolute text-2xl pl-[40px] hidden text-[#252525] opacity-70 left-0"
              onClick={() => {
                setMobileMenuActive(!mobileMenuActive);
              }}
            >
              &times;
            </span>
            <ul
              className={`flex ${
                mobileMenuActive
                  ? "flex-col z-500 gap-3 bg-white h-[100%] pt-[70px] pl-[40px]"
                  : "gap-[50px]"
              }`}
            >
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div
          className="cart-account flex gap-[30px] items-center"
          onClick={handleCartClick}
        >
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
    </>
  );
}
