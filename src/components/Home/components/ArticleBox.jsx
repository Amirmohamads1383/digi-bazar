import React from "react";

export default function ArticleBox({ article }) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white border border-Caption/20 rounded-lg">
      <img src={article.image} alt="" className="w-full rounded-md" />
      <h3 className="font-semibold text-lg text-Title line-clamp-1">
        {article.title}
      </h3>
      <p className="font-normal text-base text-Caption line-clamp-2">
        {article.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-normal text-Caption">{article.date}</span>
        <button className="px-5 py-2 text-Primary border border-Primary hover:bg-Primary hover:text-white transition-all rounded-full cursor-pointer">
          بیشتر بخوانید
        </button>
      </div>
    </div>
  );
}
