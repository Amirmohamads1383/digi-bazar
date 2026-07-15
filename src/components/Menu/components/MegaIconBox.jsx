import React from "react";

export default function MegaIconBox() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-1 border border-Secondry rounded-lg">
          <img src="" alt="" />
        </div>
        <div className="flex flex-col gap-2.5 items-start">
          <h4 className="font-semibold text-base text-Title"></h4>
          <span className="font-normal text-sm text-Caption"></span>
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
