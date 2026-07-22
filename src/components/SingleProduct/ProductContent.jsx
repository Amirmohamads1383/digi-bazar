import { useEffect, useState } from "react";
import ProductTabs from "./component/ProductTabs";
import ProductSlider from "./template/ProductSlider";

export default function ProductContent({product}) {
  const [products, setProducts] = useState([]);

  const relatedProducts = products
    .filter((product) => product.discountPercent > 0)
    .slice(0, 7);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/product.json");
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <section className="single-product-content">
      <div className="container flex flex-col lg:flex-row gap-6">
        <ProductTabs product={product}/>
        <aside className="w-1/2 flex flex-col gap-4 shrink-0">
          <ProductSlider title="محصولات مرتبط" products={relatedProducts} />
          <ProductSlider title="اخیراً مشاهده شده" products={products} />
        </aside>
      </div>
    </section>
  );
}
