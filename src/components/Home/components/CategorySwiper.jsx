import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryBox from "./CategoryBox";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function CategorySwiper() {
  const [category, setCategory] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/category.json");
      const data = await res.json();
      setCategory(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center gap-6 w-full">
        <button 
          className="p-2 bg-white text-Title hover:text-Primary rounded-lg cursor-pointer"
          onClick={() => swiperRef.current?.slidePrev()} // 👈 کنترل قبلی
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
        
        <Swiper
          slidesPerView={5}
          spaceBetween={24}
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="relative w-full"
          id="cat-swiper"
        >
          {category.map((cat) => (
            <SwiperSlide key={cat.id}>
              <CategoryBox title={cat.name.fa} img={cat.image} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <button 
          className="p-3 bg-white text-Title hover:text-Primary rounded-lg cursor-pointer"
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
    </>
  );
}