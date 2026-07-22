import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../Common/ProductCard";

export default function ProductSlider({ title, products }) {
  return (
    <div className="flex flex-col gap-3 px-3 py-4 bg-white rounded-lg">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center justify-center gap-3">
          <h2 className="font-bold text-lg text-Title">{title}</h2>
        </div>
        <button className="flex items-center justify-center gap-1.5 text-sm text-Secondry cursor-pointer">
          مشاهده همه
          <span className="text-Primary">
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
          </span>
        </button>
      </div>
      <Swiper spaceBetween={16} slidesPerView={4} className="w-full">
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
