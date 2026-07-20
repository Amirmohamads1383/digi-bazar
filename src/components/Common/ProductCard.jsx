import React from "react";
import { Link } from "react-router";

export default function ProductCard({ product }) {
  return (
    <div className="relative px-2 py-3 bg-white rounded-lg">
      <img src={product.images[0]} alt="" className="w-64 mx-auto object-cover" />
      <div className="flex flex-col gap-4">
        <Link to={`/product/${product.id}`}>
          <h2 className="text-base text-Title font-semibold line-clamp-1">
            {product.title}
          </h2>
        </Link>
        <div className="flex items-center justify-between">
          <button className="bg-[#FEF6EF] text-Primary p-2 rounded-md cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                stroke="currentColor"
                strokeWidth={1.5}
              />
              <path
                d="M6 4h12a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4zm0 0a2 2 0 0 0-2-2H2m4 6h15.5"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {product.discountPercent > 0 ? (
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-3">
                <p className="text-Secondry font-normal text-sm relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-full before:h-px before:bg-Secondry">
                  {product.price.toLocaleString()}
                </p>
                <span className="p-2 text-sm font-normal text-red-500 bg-red-100 rounded-full">
                  {product.discountPercent}%
                </span>
              </div>
              <span className="font-semibold text-xl text-Title">
                {(
                  product.price -
                  (product.price / 100) * product.discountPercent
                ).toLocaleString() + " تومان"}
              </span>
            </div>
          ) : (
            <span className="font-semibold text-xl text-Title">
              {product.price.toLocaleString()} تومان
            </span>
          )}
        </div>
      </div>
      <span className="absolute left-2 top-3 flex items-center justify-center gap-1 text-Title pointer-events-none z-50">
        {product.rate}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="#F47A23 "
          className="text-Primary"
        >
          <path
            d="M10.033 3.271a2.158 2.158 0 0 1 3.934 0l1.39 2.93c.32.673.938 1.14 1.653 1.248l3.11.47c1.799.272 2.517 2.57 1.215 3.89l-2.25 2.28a2.34 2.34 0 0 0-.631 2.02l.531 3.22c.308 1.863-1.573 3.284-3.183 2.404l-2.781-1.52a2.12 2.12 0 0 0-2.042 0l-2.781 1.52c-1.61.88-3.49-.541-3.183-2.404l.531-3.22a2.34 2.34 0 0 0-.63-2.02l-2.251-2.28C1.363 10.49 2.08 8.191 3.88 7.92l3.11-.47A2.2 2.2 0 0 0 8.641 6.2z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
