import React from "react";
import SwiperBannner from "../../components/Home/SwiperBannner";
import Category from "../../components/Home/Category";
import Offers from "../../components/Home/Offers";

export default function Home() {
  return (
    <>
      <SwiperBannner />
      <Category />
      <Offers />
    </>
  );
}
