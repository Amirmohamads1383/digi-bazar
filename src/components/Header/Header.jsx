import TopHeader from "./components/TopHeader";
import BottomHeader from "./components/BottomHeader";
import MegaMenu from "../Menu/MegaMenu";
import { useState } from "react";

export default function Header() {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const menu = [
    {
      title: "صفحه اصلی",
      path: "/",
    },
    {
      title: " سبد های گوشی",
      path: "/price-list",
    },
    {
      title: " قیمت عمده",
      path: "/price-list",
    },
    {
      title: " درخواست پنل همکار",
      path: "/price-list",
    },
  ];
  return (
    <>
      <header className="py-7 bg-white shadow-lg">
        <div className="container flex flex-col gap-6 relative">
          <TopHeader />
          <BottomHeader
            menu={menu}
            isMegaOpen={isMegaOpen}
            setIsMegaOpen={setIsMegaOpen}
          />
          {isMegaOpen == true ? <MegaMenu isMegaOpen={isMegaOpen} /> : ""}
        </div>
      </header>
    </>
  );
}
