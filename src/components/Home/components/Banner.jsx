import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Banner() {
  const banners = [
    "images/banner/swiper-banner-1.webp",
    "images/banner/swiper-banner-2.webp",
    "images/banner/swiper-banner-3.webp",
    "images/banner/swiper-banner-4.webp",
  ];
  return (
    <>
      <Swiper
        spaceBetween={16}
        loop
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        className="relative rounded-3xl"
        id="hero-banner-swiper"
      >
        {banners.map((src) => {
          return (
            <SwiperSlide key={src}>
              <img
                src={src}
                alt=""
                className="w-full h-120 object-cover rounded-3xl"
              />
            </SwiperSlide>
          );
        })}
        <span className="absolute left-1/2 bottom-0 -translate-x-1/2 z-50 text-Backg pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={268}
            height={32}
            viewBox="0 0 969 120"
            fill="none"
          >
            <path
              d="M849 0C881.878 6.71276e-07 908.58 26.4449 908.995 59.2246L909.005 60.7754C909.42 93.5551 936.122 120 969 120H0C32.8782 120 59.58 93.5551 59.9951 60.7754L60.0049 59.2246C60.42 26.4449 87.1218 6.71189e-07 120 0H849Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </Swiper>
    </>
  );
}
