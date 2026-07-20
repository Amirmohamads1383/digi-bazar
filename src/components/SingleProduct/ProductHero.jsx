import React from "react";
import ProductPurchase from "./component/ProductPurchase";
import ProductDetails from "./component/ProductDetails";

export default function ProductHero({product}) {
  return (
    <section className="py-6">
      <div className="container flex items-start gap-7">
        <ProductDetails product={product}/>
        <ProductPurchase product={product}/>
      </div>
    </section>
  );
}
