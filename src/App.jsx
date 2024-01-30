import { useState } from "react";
import Header from "./components/Header";
import pic1 from "./assets/images/image-product-1-thumbnail.jpg";
import pic2 from "./assets/images/image-product-2-thumbnail.jpg";
import pic3 from "./assets/images/image-product-3-thumbnail.jpg";
import pic4 from "./assets/images/image-product-4-thumbnail.jpg";
import { PiShoppingCartLight } from "react-icons/pi";
import Modal from "./components/Modal";

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
    setActive((prev) => (prev === 0 ? imgArr.length - 1 : prev - 1));
  };
  return (
    <>
      {zoomed ? (
        <Modal
          isOpen={zoomed}
          onClose={handleZoomed}
          handlePrev={handleImagePrev}
          handleNext={handleImageNext}
          active={active}
          imgArr={imgArr}
          
        ></Modal>
      ) : (
        ""
      )}

      <div className="w-[80%] my-0 mx-auto">
        <Header cartQuantity={cartQuantity} />
        <div className="w-[80%] flex gap-[30px] my-auto mx-auto mt-[70px]">
          {/* Picture divs */}
          <div className="w-[45%]">
            <img
              src={active === null ? imgArr[1] : imgArr[active]}
              className="w-[320px] rounded-[9px] h-[55vh] mb-5"
              onClick={handleZoomed}
            />

            <div className="flex items-center justify-between w-[320px]">
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
          <div className="w-[45%] flex items-center justify-center">
            <div>
              <p className="font-bold my-2 text-orange-500 ">SNEAKER COMPANY</p>
              <p className="font-bold text-[40px] mb-5">
                Fall Limited Edition Sneakers
              </p>
              <p className="text-[16px] tracking-tight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                aut nihil placeat explicabo molestiae natus odio quo harum.
                Officiis illum, mollitia est repellendus quos debitis facere
                quaerat deleniti non sequi.
              </p>
              <div className="my-1 flex gap-[20px] items-center">
                <span className="font-bold text-[25px] ">$125.00</span>
                <span className="bg-orange-100 w-[40px] h-[30px] text-center flex items-center justify-center rounded text-orange-600  font-bold">
                  50%
                </span>
              </div>
              <p className="line-through my-2 text-light-gray text-[20px] font-bold">
                250.00
              </p>
              <div className="flex gap-[10px]">
                <div className="flex light-gray justify-center items-center ">
                  <span
                  role="button"
                    onClick={handleAdd}
                    className="text-orange rounded-tl-lg  rounded-bl-lg text-[25px]  font-bold border-[1px] w-[40px] h-[45px] flex items-center justify-center"
                  >
                    +
                  </span>
                  <span className="border-[1px] flex items-center justify-center  w-[40px] h-[45px]">
                    {quantity}
                  </span>
                  <span
                  role="button"
                    className="text-orange rounded-tr-lg  rounded-br-lg  font-bold text-[25px] border-[1px]  flex items-center justify-center w-[40px] h-[45px]"
                    onClick={handleSubtract}
                  >
                    -
                  </span>
                </div>
                <button
                  onClick={handleCartQuantity}
                  className="shadow-custom-color  bg-orange-500 w-[200px] flex h-[45px] rounded-md gap-[20px] text-white font-semibold items-center justify-center"
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
