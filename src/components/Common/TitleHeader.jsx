import React from "react";

export default function TitleHeader({ title }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center justify-center gap-3">
        <span className="w-1.5 h-8 bg-Primary rounded-full"></span>
        <h2 className="font-bold text-2xl text-Title">{title}</h2>
      </div>
      <button className="flex items-center justify-center gap-1.5 text-Secondry cursor-pointer">
        مشاهده همه
        <span className="text-Primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="m14 7-4 5 4 5"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
