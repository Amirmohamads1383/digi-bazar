import React, { useEffect, useState } from "react";
import ArticleBox from "./components/ArticleBox";
import TitleHeader from "../Common/TitleHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Article() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/article.json");
      const data = await res.json();

      setArticles(data);
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="container">
        <TitleHeader title={"جدیدترین مقالات"} />
        <Swiper
          spaceBetween={36}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {articles.slice(0, 6).map((article) => (
            <SwiperSlide key={article.id}>
              <ArticleBox key={article.id} article={article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
