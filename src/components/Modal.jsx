import React from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import pic1 from "../assets/images/image-product-4-thumbnail.jpg";
export default function Modal({ children, isOpen, onClose, handlePrev, handleNext, active, imgArr }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-70">
      
      {children}
    </div>
  );
}
