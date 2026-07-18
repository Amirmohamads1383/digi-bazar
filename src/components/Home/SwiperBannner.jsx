import React from "react";
import Banner from "./components/Banner";

export default function SwiperBannner() {
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
