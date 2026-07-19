import React from "react";

export default function MiddleFooter() {
  return (
    <div className="grid grid-cols-3 justify-items-start items-center p-6 pr-16 bg-white rounded-xl">
      <span className="text-Primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={60}
          height={60}
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx={12}
            cy={11}
            r={3}
            stroke="currentColor"
            strokeWidth={1.5}
          />
          <path
            d="M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111S7.03 2 12 2s9 3.98 9 8.889Z"
            stroke="currentColor"
            strokeWidth={1.5}
          />
        </svg>
      </span>
      <div className="flex flex-col items-start gap-3.5">
        <h5 className="text-lg font-semibold text-Title">آدرس انبار :</h5>
        <p className="text-sm font-medium text-Caption">
          تهران، چهارراه حافظ، کوچه لاله، خیابان جمهوری، پاساژ علاءالدین، <br />{" "}
          طبقه ششم، واحد 66
        </p>
      </div>
      <div className="flex flex-col items-start gap-3.5">
        <h5 className="text-lg font-semibold text-Title">آدرس شعبه :</h5>
        <p className="text-sm font-medium text-Caption">
          تهران، خیابان فلسطین، خیابان برادران مظفر شمالی، نرسیده به <br />{" "}
          دمشق، کوچه کیا، ساختمان، طبقه منفی 6، انبار 33
        </p>
      </div>
    </div>
  );
}
