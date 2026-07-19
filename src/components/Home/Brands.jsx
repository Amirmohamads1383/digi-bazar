import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Brands() {
  const brands = [
    { id: 1, img: "/images/brand/apple.webp", title: "اپل" },
    { id: 2, img: "/images/brand/lg.webp", title: "ال‌جی" },
    { id: 3, img: "/images/brand/asus.webp", title: "ایسوس" },
    { id: 4, img: "/images/brand/huawei.webp", title: "هوآوی" },
    { id: 5, img: "/images/brand/samsung.webp", title: "سامسونگ" },
    { id: 6, img: "/images/brand/sony.webp", title: "سونی" },
    { id: 7, img: "/images/brand/tsco.webp", title: "تسکو" },
    { id: 8, img: "/images/brand/nokia.webp", title: "نوکیا" },
  ];
  return (
    <section className="py-20">
      <div className="container">
        <Swiper slidesPerView={5} spaceBetween={38}>
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <img
                src={brand.img}
                alt={brand.title}
                className="w-3/4 object-cover grayscale hover:grayscale-0 transition-all"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
