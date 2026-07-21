import React, { useState } from "react";
import Modal from "../../Modal/Modal";

export default function ProductGallery({ product }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <img
          src={product.images[0]}
          alt=""
          className="w-110 h-110 object-cover border border-Secondry/25 rounded-md cursor-pointer"
          onClick={() => setIsOpen(true)}
        />

        {product.images.length > 1 && (
          <div className="flex items-center justify-between">
            {product.images.slice(0, 5).map((image, index) => (
              <img
                key={index}
                src={image}
                onClick={() => {
                  setCurrentImage(index);
                  setIsOpen(true);
                }}
                className="w-20 h-20 border-Caption/20 object-cover rounded-md cursor-pointer border-2 transition-alln"
              />
            ))}
          </div>
        )}
      </div>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className="relative flex items-center justify-center">
            <img
              src={product.images[currentImage]}
              className="max-h-[80vh] rounded-xl"
            />
            <button
              onClick={nextImage}
              className="absolute left-5 flex items-center justify-center bg-black/50 text-white w-10 h-10 rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m14 7-4 5 4 5"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={prevImage}
              className="absolute right-5 flex items-center justify-center bg-black/50 text-white w-10 h-10 rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m10 7 4 5-4 5"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
