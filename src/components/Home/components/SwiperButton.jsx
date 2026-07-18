import React from "react";
import { useSwiper } from "swiper/react";

export default function SwiperButton({ swiperRef }) {
  const swiper = useSwiper();

  return (
    <div className="flex items-center justify-end gap-4">
      <button
        className="p-2 bg-white text-Title hover:text-Primary rounded-lg cursor-pointer"
        onClick={() => swiperRef.current?.slidePrev()}
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
      <button
        className="p-2 bg-white text-Title hover:text-Primary rounded-lg cursor-pointer"
        onClick={() => swiperRef.current?.slideNext()}
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
    </div>
  );
}
