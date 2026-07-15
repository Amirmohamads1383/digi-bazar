import React from "react";
import MegaBox from "./components/MegaBox";

export default function MegaMenu() {
  const banners = [
    "images/banner/mega-banner-1.webp",
    "images/banner/mega-banner-2.webp",
  ];
  const megaMenuData = [
    {
      id: 1,
      title: "دسته های محبوب",
      items: [
        {
          id: 1,
          title: "گوشی های پرچمدار",
          description: "بهترین عملکرد و جدیدترین امکانات",
          image: "/images/category/flagship.webp",
        },
        {
          id: 2,
          title: "گوشی های میان رده",
          description: "کیفیت بالا با قیمت مناسب",
          image: "/images/category/midrange.webp",
        },
        {
          id: 3,
          title: "گوشی های اقتصادی",
          description: "انتخابی هوشمندانه و مقرون به صرفه",
          image: "/images/category/economic.webp",
        },
        {
          id: 4,
          title: "گوشی های گیمینگ",
          description: "مناسب بازی و کارهای سنگین",
          image: "/images/category/gaming.webp",
        },
      ],
    },

    {
      id: 2,
      title: "لوازم جانبی موبایل",
      items: [
        {
          id: 1,
          title: "کابل و شارژر",
          image: "/images/accessory/charger.webp",
        },
        {
          id: 2,
          title: "شارژر دیواری",
          image: "/images/accessory/adapter.webp",
        },
        {
          id: 3,
          title: "پاوربانک",
          image: "/images/accessory/powerbank.webp",
        },
        {
          id: 4,
          title: "هندزفری و هدفون",
          image: "/images/accessory/headphone.webp",
        },
        {
          id: 5,
          title: "پایه نگهدارنده",
          image: "/images/accessory/holder.webp",
        },
        {
          id: 6,
          title: "قاب و کاور",
          image: "/images/accessory/case.webp",
        },
        {
          id: 7,
          title: "محافظ صفحه نمایش",
          image: "/images/accessory/glass.webp",
        },
      ],
    },

    {
      id: 3,
      title: "موبایل",
      items: [
        {
          id: 1,
          title: "گوشی سامسونگ",
          image: "/images/brand/samsung.webp",
        },
        {
          id: 2,
          title: "گوشی شیائومی",
          image: "/images/brand/xiaomi.webp",
        },
        {
          id: 3,
          title: "گوشی اپل",
          image: "/images/brand/apple.webp",
        },
        {
          id: 4,
          title: "گوشی هواوی",
          image: "/images/brand/huawei.webp",
        },
        {
          id: 5,
          title: "گوشی نوکیا",
          image: "/images/brand/nokia.webp",
        },
        {
          id: 6,
          title: "گوشی آنر",
          image: "/images/brand/honor.webp",
        },
        {
          id: 7,
          title: "گوشی موتورولا",
          image: "/images/brand/motorola.webp",
        },
      ],
    },
  ];
  return (
    <div className="absolute top-22 bg-white shadow-xl rounded-xl">
      <div className="flex justify-between">
        <MegaBox title={"دست های محبوب"} icon={""} data={""} />
        <MegaBox title={"دست های محبوب"} icon={""} data={""} />
        <MegaBox title={"دست های محبوب"} icon={""} data={""} />
        <div className="flex flex-col gap-4">
          {banners.map((src) => (
            <img src={src} className="w-full object-cover" />
          ))}
        </div>
      </div>
    </div>
  );
}
