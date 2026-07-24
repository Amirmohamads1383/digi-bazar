import React from "react";
import MegaBox from "./components/MegaBox";

export default function MegaMenu() {
  const megaMenuDatas = [
    {
      id: 1,
      title: "دسته های محبوب",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.033 3.271a2.158 2.158 0 0 1 3.934 0l1.39 2.93c.32.673.938 1.14 1.653 1.248l3.11.47c1.799.272 2.517 2.57 1.215 3.89l-2.25 2.28a2.34 2.34 0 0 0-.631 2.02l.531 3.22c.308 1.863-1.573 3.284-3.183 2.404l-2.781-1.52a2.12 2.12 0 0 0-2.042 0l-2.781 1.52c-1.61.88-3.49-.541-3.183-2.404l.531-3.22a2.34 2.34 0 0 0-.63-2.02l-2.251-2.28C1.363 10.49 2.08 8.191 3.88 7.92l3.11-.47A2.2 2.2 0 0 0 8.641 6.2z"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinejoin="round"
            />
          </svg>
        </>
      ),
      items: [
        {
          id: 1,
          title: "گوشی های پرچمدار",
          description: "بهترین عملکرد و امکانات",
          image: "/images/mega-menu/flagship.webp",
        },
        {
          id: 2,
          title: "گوشی های میان رده",
          description: "کیفیت بالا با قیمت مناسب",
          image: "/images/mega-menu/midrange.webp",
        },
        {
          id: 3,
          title: "گوشی های اقتصادی",
          description: "انتخابی هوشمندانه ",
          image: "/images/mega-menu/economic.webp",
        },
        {
          id: 4,
          title: "گوشی های گیمینگ",
          description: "مناسب بازی و کارهای سنگین",
          image: "/images/mega-menu/gaming.webp",
        },
      ],
    },

    {
      id: 2,
      title: "لوازم جانبی موبایل",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x={14}
              y={7}
              width={8}
              height={13}
              rx={2}
              stroke="currentColor"
              strokeWidth={1.5}
            />
            <path
              d="M20 4H6a2 2 0 0 0-2 2v11h7m0 0H3.5a1.5 1.5 0 0 0 0 3H11"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
            />
          </svg>
        </>
      ),
      items: [
        {
          id: 1,
          title: "کابل و شارژر",
          image: "/images/mega-menu/charger.webp",
        },
        {
          id: 2,
          title: "پاوربانک",
          image: "/images/mega-menu/powerbank.webp",
        },
        {
          id: 3,
          title: "هندزفری و هدفون",
          image: "/images/mega-menu/headphone.webp",
        },
        {
          id: 4,
          title: "قاب و کاور",
          image: "/images/mega-menu/case.webp",
        },
      ],
    },

    {
      id: 3,
      title: "موبایل",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x={5}
              y={2}
              width={14}
              height={20}
              rx={3}
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinejoin="round"
            />
            <path
              d="M11 19h2"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
            />
          </svg>
        </>
      ),
      items: [
        {
          id: 1,
          title: "گوشی سامسونگ",
          image: "/images/mega-menu/samsung.webp",
        },
        {
          id: 2,
          title: "گوشی شیائومی",
          image: "/images/mega-menu/xiaomi.webp",
        },
        {
          id: 3,
          title: "گوشی اپل",
          image: "/images/mega-menu/apple.webp",
        },
        {
          id: 4,
          title: "گوشی هواوی",
          image: "/images/mega-menu/huawei.webp",
        },
      ],
    },
  ];

  return (
    <div className="bg-white py-5 px-3 shadow-xl rounded-xl">
      <div className="grid grid-cols-4 gap-3">
        {megaMenuDatas.map((megaMenuData) => (
          <MegaBox
            title={megaMenuData.title}
            icon={megaMenuData.icon}
            data={megaMenuData.items}
          />
        ))}
        <div className="flex flex-col gap-4">
          <img
            src="/images/banner/mega-banner-1.webp"
            className="w-full h-37.5 object-cover rounded-lg"
          />
          <img
            src="/images/banner/mega-banner-2.webp"
            className="w-full h-37.5 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
