import React, { useState } from "react";

export default function TopHeader() {
    const [searchInput, setSearchInput] = useState("");
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-1.5">
          <span className="text-white w-9 h-9 bg-Primary rounded-xl flex items-center justify-center shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="m20 7-8 4-8-4"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m18.625 4.668-5-2.31a3.86 3.86 0 0 0-3.25 0l-5 2.31C3.931 5.335 3 6.823 3 8.466v7.068c0 1.643.93 3.131 2.375 3.798l5 2.31a3.86 3.86 0 0 0 3.25 0l5-2.31C20.069 18.665 21 17.177 21 15.534V8.466c0-1.643-.93-3.131-2.375-3.798M12 11v11"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h1 className="text-2xl font-bold">دیجی بازار</h1>
        </div>
        <div className="relative w-100">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            placeholder="جست و جو"
            className="w-full p-2 border-2 border-Secondry outline-0 rounded-lg"
          />
          <button className="absolute left-2 top-1/2 -translate-y-1/2 text-Secondry cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.5 18.5 22 22m-1-10.5a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-1.5 ">
        <span className="text-Primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 19v-1.646a2 2 0 0 0-1.257-1.857l-2.034-.813a2 2 0 0 0-2.532.962L15 16s-2.5-.5-4.5-2.5S8 9 8 9l.354-.177a2 2 0 0 0 .963-2.532l-.814-2.034A2 2 0 0 0 6.646 3H5a2 2 0 0 0-2 2c0 8.837 7.163 16 16 16a2 2 0 0 0 2-2Z"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-base font-medium text-Caption">021-77046390</span>
      </div>
    </div>
  );
}
