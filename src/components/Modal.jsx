import React from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import pic1 from "../assets/images/image-product-4-thumbnail.jpg";
export default function Modal({ children, isOpen, onClose, handlePrev, handleNext, active, imgArr }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-70">
      <span
        role="button"
        className="absolute w-[30px] h-[30px] rounded-[50px] shadow-sm flex items-center justify-center bg-white  left-[500px] top-[270px] font-bold text-2xl text-orange-500"
        onClick={handlePrev}
      >
        <MdOutlineNavigateBefore />
      </span>
      <div className="w-[full%]">
        <img
          src={active === null ? imgArr[1] : imgArr[active]}
          className="w-[400px] rounded-[9px] h-[55vh] mb-5"
         
        />

        <div className="flex items-center justify-between w-[400px]">
          {imgArr.map((i, index) => (
            <img
              key={index}
              src={i}
              onClick={() => handleImageClick(index)}
              className={`rounded w-[70px] h-[70px] ${
                active === index ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <span
        role="button"
        className="absolute top-[70px] right-[500px] font-bold text-3xl text-orange-500"
        onClick={onClose}
      >
        &times;
      </span>
      <span
        role="button"
        className="absolute bottom-[315px] w-[30px] h-[30px] rounded-[50px] shadow-sm flex items-center justify-center bg-white font-bold text-2xl right-[500px] top-[270px] text-orange-500"
        onClick={handleNext}
      >
        <MdOutlineNavigateNext />
      </span>
      {children}
    </div>
  );
}
