import React from "react";
import SwiperBannner from "../../components/Home/SwiperBannner";
import Category from "../../components/Home/Category";
import Offers from "../../components/Home/Offers";
import Suggestion from "../../components/Home/Suggestion";
import BestSelling from "../../components/Home/BestSelling";
import Banners from "../../components/Home/Banners";
import Article from "../../components/Home/Article";
import Brands from "../../components/Home/Brands";

export default function Home() {
  return (
    <>
      <SwiperBannner />
      <Category />
      <Offers />
      <Suggestion />
      <BestSelling />
      <Banners />
      <Article />
      <Brands />
    </>
  );
}
