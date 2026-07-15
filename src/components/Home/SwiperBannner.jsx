import React from "react";
import Banner from "./components/Banner";

export default function SwiperBannner() {
  const banners = [
    "images/banner/swiper-banner-1.webp",
    "images/banner/swiper-banner-2.webp",
    "images/banner/swiper-banner-3.webp",
    "images/banner/swiper-banner-4.webp",
  ];
  return (
    <section className="swiper-banner">
      <div className="container">
        <div className="flex gap-10">
          <Banner />
        </div>
      </div>
    </section>
  );
}
