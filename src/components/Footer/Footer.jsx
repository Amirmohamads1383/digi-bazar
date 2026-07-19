import React from "react";
import TopFooter from "./component/TopFooter";
import MiddleFooter from "./component/MiddleFooter";
import BottomFooter from "./component/BottomFooter";

export default function Footer() {
  return (
    <footer className="bg-[#E7E7E7] relative pt-6">
      <div className="container flex flex-col gap-8">
        <TopFooter />
        <MiddleFooter />
        <BottomFooter />
        <button className="absolute -top-6 flex items-center gap-1.5 px-5 py-2 right-1/2 translate-x-1/2 bg-white border border-Primary text-Primary rounded-full z-50 cursor-pointer">
          برگشت به بالا
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="m17 14-5-4-5 4"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}
