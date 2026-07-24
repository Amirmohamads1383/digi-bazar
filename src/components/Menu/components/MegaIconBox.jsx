import React from "react";

export default function MegaIconBox({ item }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <div className="p-1 border border-Secondry rounded-lg">
          <img src={item.image} className="h-15 object-cover" alt="" />
        </div>
        <div className="flex flex-col gap-2.5 items-start">
          <h4 className="font-semibold text-base text-Title">{item.title}</h4>
          {item.description && (
            <span className="text-xs text-Caption">{item.description}</span>
          )}
        </div>
      </div>
      <button className="text-Caption">
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
      </button>
    </div>
  );
}
