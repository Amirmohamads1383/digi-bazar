import React from "react";

export default function Banners() {
  const imageBanners = [
    "/images/banner/banner-1.webp",
    "/images/banner/banner-2.webp",
  ];
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex items-center justify-between">
          {imageBanners.map((src) => {
            return <img src={src} key={src} alt="" className="w-162.5 h-67.5 rounded-2xl object-cover" />;
          })}
        </div>
      </div>
    </section>
  );
}
