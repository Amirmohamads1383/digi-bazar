import React, { useState } from "react";
import { Link } from "react-router";
import MiniCart from "./MiniCart";
import { useCart } from "../../../context/CartContext";
import MegaMenu from "../../Menu/MegaMenu";

export default function BottomHeader({ menu, setIsMegaOpen, isMegaOpen }) {
  const { cartItems } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div
          className="relative"
          onMouseEnter={() => setIsMegaOpen(true)}
          onMouseLeave={() => setIsMegaOpen(false)}
        >
          <h4 className="flex items-center gap-1.5 text-black font-semibold border-l border-l-Caption pl-5 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm12 0a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zM2 16a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm12 0a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
            </svg>
            دسته بندی ها
          </h4>
          <div
            className={`absolute right-0 top-full w-300 mt-3 transition-all duration-300 z-100 border border-Caption/10 rounded-lg after:absolute after:w-full after:h-10 after:-top-6 ${
              isMegaOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <MegaMenu />
          </div>
        </div>
        <div className="flex items-center gap-6">
          {menu.map((item) => (
            <Link key={item.path} to={item.path}>
              <span className="font-normal text-Caption hover:text-black transition-all">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div
          className="relative"
          onMouseEnter={() => setShowCart(true)}
          onMouseLeave={() => setShowCart(false)}
        >
          <button className="text-Title relative">
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
            <span className="absolute -top-3 -right-3.5 w-5 h-5 flex items-center justify-center text-xs bg-Primary text-white rounded-full">
              {cartItems.length}
            </span>
          </button>
          <div
            className={`absolute left-0 top-full mt-3 transition-all duration-300 z-100 border border-Caption/10 rounded-lg after:absolute after:w-full after:h-10 after:-top-6 ${
              showCart ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <MiniCart />
          </div>
        </div>
        <button className="px-6 py-2.5 font-medium bg-Primary text-white hover:bg-white hover:text-Primary rounded-full cursor-pointer transition-all">
          ورود / ثبت نام
        </button>
      </div>
    </div>
  );
}
