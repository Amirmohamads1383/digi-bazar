import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ProductCard from "../../Common/ProductCard";
import SwiperButton from "./SwiperButton";

export default function OfferSwiper() {
  const [products, setProducts] = useState([]);
  const swiperRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/product.json");
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-6 w-3/4 z-50">
      <SwiperButton swiperRef={swiperRef} />
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={3}
        spaceBetween={24}
        className="relative w-full"
        id="offer-product-swiper"
      >
        {products.slice(0, 6).map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
