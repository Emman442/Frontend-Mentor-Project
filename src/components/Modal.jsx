import React from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

export default function Modal({ children, isOpen, onClose, handlePrev, handleNext, active, imgArr }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-70 z-50 mobile-modal">
      
      {children}
    </div>
  );
}
