import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Breadcrumb from "../../components/Common/Breadcrumb";
import ProductHero from "../../components/SingleProduct/ProductHero";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data/product.json");

        if (!res.ok) {
          throw new Error("خطا در دریافت داده");
        }

        const data = await res.json();
        const mainProduct = data.find(
          (product) => product.id === parseInt(id) || product.id === id,
        );

        if (!mainProduct) {
          throw new Error("محصول یافت نشد");
        }

        setProduct(mainProduct);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <h1>در حال بارگذاری...</h1>;
  if (error) return <h1>خطا: {error}</h1>;
  if (!product) return <h1>محصولی یافت نشد</h1>;

  return (
    <>
    <Breadcrumb />
    <ProductHero product={product}/>
    </>
  );
}
