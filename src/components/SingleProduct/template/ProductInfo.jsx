import React, { useState } from "react";

export default function ProductInfo({ product }) {
  const [active, setActive] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2.5">
        <span className="w-16 h-8 flex items-center justify-center text-sm text-Primary border border-Primary rounded-md">
          پرفروش
        </span>
        <span className="w-16 h-8 flex items-center justify-center text-sm text-green-700 border border-green-700 rounded-md">
          جدید
        </span>
      </div>
      <h1 className="font-bold text-2xl text-Title">{product.title}</h1>
      <div className="flex flex-col gap-2">
        {product.specs.slice(0, 3).map((spec) => (
          <div className="flex items-center gap-2 text-sm text-Caption">
            <span className="font-semibold">{spec.title} :</span>
            <span>{spec.value}</span>
          </div>
        ))}
        <span
          className={`text-sm font-semibold ${product.stock ? "text-green-600" : "text-red-600"}`}
        >
          {product.stock ? "موجود در انبار" : "ناموجود در انبار"}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-Caption"> رنگ :</span>
        <div className="flex items-center gap-2.5">
          {product.colors.map((color) => (
            <div
              className={`p-0.5 border ${active ? "border-Primary" : "border-Caption/20"} rounded-full`}
            >
              <span
                className={`block w-6 h-6 rounded-full cursor-pointer`}
                style={{ background: color.hexa }}
              ></span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-Caption"> گارانتی :</span>
        <div className="flex items-center gap-2.5">
          {product.warranties.map((warranty) => (
            <div className="text-sm px-2 py-3 border border-Primary rounded-md">{warranty}</div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <span className="text-Caption">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="m20 7-8 4-8-4"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m18.625 4.668-5-2.31a3.86 3.86 0 0 0-3.25 0l-5 2.31C3.931 5.335 3 6.823 3 8.466v7.068c0 1.643.93 3.131 2.375 3.798l5 2.31a3.86 3.86 0 0 0 3.25 0l5-2.31C20.069 18.665 21 17.177 21 15.534V8.466c0-1.643-.93-3.131-2.375-3.798"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m8 4 9 5v10.5M12 11v11"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-sm text-Caption">ارسال سریع</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-Caption">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 16v4.523a1 1 0 0 1-1.371.928L12.37 20.15a1 1 0 0 0-.742 0l-3.258 1.3A1 1 0 0 1 7 20.523V16"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
              <path
                d="M10.592 2.518a2.17 2.17 0 0 1 2.816 0l.715.61c.348.296.78.475 1.235.512l.937.074a2.17 2.17 0 0 1 1.99 1.991l.075.937c.037.455.216.887.512 1.235l.61.715a2.17 2.17 0 0 1 0 2.816l-.61.715a2.17 2.17 0 0 0-.512 1.235l-.074.937a2.17 2.17 0 0 1-1.991 1.99l-.937.075a2.17 2.17 0 0 0-1.235.512l-.715.61a2.17 2.17 0 0 1-2.816 0l-.715-.61a2.17 2.17 0 0 0-1.235-.512l-.937-.074a2.17 2.17 0 0 1-1.99-1.991l-.075-.937a2.17 2.17 0 0 0-.512-1.235l-.61-.715a2.17 2.17 0 0 1 0-2.816l.61-.715a2.17 2.17 0 0 0 .512-1.235l.074-.937a2.17 2.17 0 0 1 1.991-1.99l.937-.075a2.17 2.17 0 0 0 1.235-.512z"
                stroke="currentColor"
                strokeWidth={1.5}
              />
            </svg>
          </span>
          <span className="text-sm text-Caption">ضمانت اصالت کالا</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-Caption">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 13v2a3 3 0 1 1-6 0v-2a3 3 0 1 1 6 0m0 0v-2a9 9 0 1 0-18 0v2m0 0v2a3 3 0 1 0 6 0v-2a3 3 0 1 0-6 0m18 1v2a6 6 0 0 1-6 6h-3"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-sm text-Caption">پشتیبانی 24 ساعته</span>
        </div>
      </div>
    </div>
  );
}
