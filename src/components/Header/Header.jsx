import TopHeader from "./components/TopHeader";
import BottomHeader from "./components/BottomHeader";

export default function Header() {
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
        <div className="container flex flex-col gap-6">
          <TopHeader />
          <BottomHeader menu={menu}/>
        </div>
      </header>
    </>
  );
}
