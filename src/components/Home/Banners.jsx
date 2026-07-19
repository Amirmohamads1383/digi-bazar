import React from "react";

export default function Banners({ img1, img2 }) {
  const imageBanners = [
    "/images/banner/banner-1.webp",
    "/images/banner/banner-2.webp",
  ];
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
              <img
                src={img1}
                alt=""
                className="w-162.5 h-67.5 rounded-2xl object-cover"
              />
              <img
                src={img2}
                alt=""
                className="w-162.5 h-67.5 rounded-2xl object-cover"
              />
        </div>
      </div>
    </section>
  );
}
