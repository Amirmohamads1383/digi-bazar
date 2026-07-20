import React from "react";
import ProductGallery from "../template/ProductGallery";
import ProductInfo from "../template/ProductInfo";

export default function ProductDetails({ product }) {
  return (
    <div className="w-3/4 flex items-start gap-6 p-6 bg-white rounded-lg">
      <ProductGallery product={product} />
      <ProductInfo product={product} />
    </div>
  );
}
