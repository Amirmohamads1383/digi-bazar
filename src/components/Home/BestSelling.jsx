import React, { useEffect, useState } from "react";
import TitleHeader from "../Common/TitleHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../Common/ProductCard";
import { Autoplay } from "swiper/modules";
export default function BestSelling() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/product.json");
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <section className="pb-20">
      <div className="container">
        <TitleHeader title={"محصولات پرفروش"} />
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="relative w-full"
          id="bestselling-swiper"
          modules={[Autoplay]}
        >
          {products.slice(0, 6).map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
