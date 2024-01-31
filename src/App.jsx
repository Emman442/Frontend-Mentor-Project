import { useState } from "react";
import Header from "./components/Header";
import pic1 from "./assets/images/image-product-1-thumbnail.jpg";
import pic2 from "./assets/images/image-product-2-thumbnail.jpg";
import pic3 from "./assets/images/image-product-3-thumbnail.jpg";
import pic4 from "./assets/images/image-product-4-thumbnail.jpg";
import { PiShoppingCartLight } from "react-icons/pi";
import Modal from "./components/Modal";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";


function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [active, setActive] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleSubtract = () => {
    if (quantity < 1) {
      setQuantity(quantity);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleCartQuantity = () => {
    setCartQuantity(quantity);
  };

  const imgArr = [pic1, pic2, pic3, pic4];

  const handleImageClick = (index) => {
    setActive(index);
  };

  const handleZoomed = () => {
    setZoomed(!zoomed);
  };
  const handleImagePrev = () => {
    setActive((prev) => (prev === imgArr.length - 1 ? 0 : prev + 1));
  };
  const handleImageNext = () => {
    setActive((prev) => (prev < 1 ? imgArr.length - 1 : prev - 1));
  };
  return (
    <>
      {zoomed ? (
        <Modal isOpen={zoomed}>
          <span
            role="button"
            className="absolute w-[30px] h-[30px] rounded-[50px] shadow-sm flex items-center justify-center bg-white  left-[500px] top-[270px] font-bold text-2xl text-orange"
            onClick={handleImagePrev}
          >
            <MdOutlineNavigateBefore />
          </span>
          <div className="w-[full%]">
            <img
              src={active === null ? imgArr[1] : imgArr[active]}
              className="central-image w-[400px] rounded-[9px] h-[55vh] mb-5"
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
            className="absolute top-[70px] right-[500px] font-bold text-3xl text=orange"
            onClick={handleZoomed}
          >
            &times;
          </span>
          <span
            role="button"
            className="absolute bottom-[315px] w-[30px] h-[30px] rounded-[50px] shadow-sm flex items-center justify-center bg-white font-bold text-2xl right-[500px] top-[270px] text-orange-500"
            onClick={handleImageNext}
          >
            <MdOutlineNavigateNext />
          </span>
        </Modal>
      ) : (
        ""
      )}

      <div className="general-w w-[80%] my-0 mx-auto">
        <Header cartQuantity={cartQuantity} />
        <div className="w-[80%] flex gap-[30px] my-[5%] mx-auto body-width">
          {/* Picture divs */}

          <div className="width w-[45%] relative">
            <span
              role="button"
              className="nav-btn nav-btn-1 hidden"
              onClick={handleImagePrev}
            >
              <MdOutlineNavigateBefore/>
            </span>
            <img
              src={active === null ? imgArr[1] : imgArr[active]}
              className="central-image w-[320px] rounded-[9px] h-[52vh] mb-5"
              onClick={handleZoomed}
            />
            <span
              role="button"
              className="nav-btn nav-btn-2 hidden "
              onClick={handleImageNext}
            >
              <MdOutlineNavigateNext/>
            </span>

            <div className="looped flex items-center justify-between w-[320px]">
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

          {/*text div */}
          <div className="text w-[45%] flex items-center justify-center">
            <div>
              <p className="font-bold my-1 text-orange bold-text">
                SNEAKER COMPANY
              </p>
              <p className="font-bold text-[40px] mb-3">
                Fall Limited Edition Sneakers
              </p>
              <p className="text-[16px] tracking-tight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                aut nihil placeat explicabo molestiae natus odio quo harum.
                Officiis illum, mollitia est repellendus quos debitis facere
                quaerat deleniti non sequi.
              </p>
              <div className="my-8 flex gap-[20px] justify-between">
                <div className="flex gap-[10px] justify-center items-center">
                  <span className="font-bold text-[25px] ">$125.00</span>
                  <span className="bg-orange-100 w-[40px] h-[30px] text-center flex items-center justify-center rounded text-orange  font-bold">
                    50%
                  </span>
                </div>
                <p className="line-through my-2 text-light-gray text-[20px] font-bold">
                  250.00
                </p>
              </div>

              <div className="buttons flex gap-[10px]">
                <div className="state-buttons flex light-gray justify-center items-center  ">
                  <span
                    role="button"
                    onClick={handleAdd}
                    className="btn text-orange rounded-tl-lg shadow-sm border-[0.2px] rounded-bl-lg text-[25px]  font-bold w-[40px] h-[45px] flex items-center justify-center"
                  >
                    +
                  </span>
                  <span className="btn flex items-center border-[0.2px] justify-center  w-[40px] h-[45px]">
                    {quantity}
                  </span>
                  <span
                    role="button"
                    className="btn text-orange rounded-tr-lg shadow-sm border-[0.2px]  rounded-br-lg  font-bold text-[25px]  flex items-center justify-center w-[40px] h-[45px]"
                    onClick={handleSubtract}
                  >
                    -
                  </span>
                </div>
                <button
                  onClick={handleCartQuantity}
                  className="shopping-cart-btn shadow-custom-color background-orange w-[200px] flex h-[45px] rounded-md gap-[20px] text-white font-semibold items-center justify-center"
                >
                  <PiShoppingCartLight className="text-[20px] font-bold" /> Add
                  to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
