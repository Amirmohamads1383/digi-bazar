import React from "react";
import Timer from "../../Timer/Timer";
import OfferSwiper from "./OfferSwiper";

export default function OfferContainer() {
  return (
    <div className="relative flex items-center px-8 py-16 bg-Primary rounded-2xl overflow-hidden">
      <div className="flex flex-col items-start gap-6 w-1/4">
        <h2 className="font-bold text-3xl/relaxed text-white">
          تخفیفات
          <br /> شگفت انگیز
        </h2>
        <Timer duration={2 * 24 * 60 * 60 * 1000} />
        <button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-Primary cursor-pointer">
          مشاهده همه
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
      <OfferSwiper />
      <span className="absolute left-0 top-0 pointer-events-none opacity-15">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={160}
          height={116}
          viewBox="0 0 184 116"
          fill="none"
        >
          <circle cx={7} cy={7} r={7} fill="#d9d9d9" />
          <circle cx={41} cy={7} r={7} fill="#d9d9d9" />
          <circle cx={75} cy={7} r={7} fill="#d9d9d9" />
          <circle cx={109} cy={7} r={7} fill="#d9d9d9" />
          <circle cx={143} cy={7} r={7} fill="#d9d9d9" />
          <circle cx={177} cy={7} r={7} fill="#d9d9d9" />
          <circle cx={7} cy={41} r={7} fill="#d9d9d9" />
          <circle cx={41} cy={41} r={7} fill="#d9d9d9" />
          <circle cx={75} cy={41} r={7} fill="#d9d9d9" />
          <circle cx={109} cy={41} r={7} fill="#d9d9d9" />
          <circle cx={143} cy={41} r={7} fill="#d9d9d9" />
          <circle cx={177} cy={41} r={7} fill="#d9d9d9" />
          <circle cx={7} cy={75} r={7} fill="#d9d9d9" />
          <circle cx={41} cy={75} r={7} fill="#d9d9d9" />
          <circle cx={75} cy={75} r={7} fill="#d9d9d9" />
          <circle cx={109} cy={75} r={7} fill="#d9d9d9" />
          <circle cx={143} cy={75} r={7} fill="#d9d9d9" />
          <circle cx={177} cy={75} r={7} fill="#d9d9d9" />
          <circle cx={7} cy={109} r={7} fill="#d9d9d9" />
          <circle cx={41} cy={109} r={7} fill="#d9d9d9" />
          <circle cx={75} cy={109} r={7} fill="#d9d9d9" />
          <circle cx={109} cy={109} r={7} fill="#d9d9d9" />
          <circle cx={143} cy={109} r={7} fill="#d9d9d9" />
          <circle cx={177} cy={109} r={7} fill="#d9d9d9" />
        </svg>
      </span>
      <span className="absolute -right-12 top-0 rotate-90 pointer-events-none opacity-15">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={160}
          height={116}
          viewBox="0 0 184 116"
          fill="none"
        >
          <circle cx={7} cy={7} r={7} fill="#d9d9d9" />
          <circle cx={41} cy={7} r={7} fill="#d9d9d9" />
          <circle cx={75} cy={7} r={7} fill="#d9d9d9" />
          <circle cx={109} cy={7} r={7} fill="#d9d9d9" />
          <circle cx={143} cy={7} r={7} fill="#d9d9d9" />
          <circle cx={177} cy={7} r={7} fill="#d9d9d9" />
          <circle cx={7} cy={41} r={7} fill="#d9d9d9" />
          <circle cx={41} cy={41} r={7} fill="#d9d9d9" />
          <circle cx={75} cy={41} r={7} fill="#d9d9d9" />
          <circle cx={109} cy={41} r={7} fill="#d9d9d9" />
          <circle cx={143} cy={41} r={7} fill="#d9d9d9" />
          <circle cx={177} cy={41} r={7} fill="#d9d9d9" />
          <circle cx={7} cy={75} r={7} fill="#d9d9d9" />
          <circle cx={41} cy={75} r={7} fill="#d9d9d9" />
          <circle cx={75} cy={75} r={7} fill="#d9d9d9" />
          <circle cx={109} cy={75} r={7} fill="#d9d9d9" />
          <circle cx={143} cy={75} r={7} fill="#d9d9d9" />
          <circle cx={177} cy={75} r={7} fill="#d9d9d9" />
          <circle cx={7} cy={109} r={7} fill="#d9d9d9" />
          <circle cx={41} cy={109} r={7} fill="#d9d9d9" />
          <circle cx={75} cy={109} r={7} fill="#d9d9d9" />
          <circle cx={109} cy={109} r={7} fill="#d9d9d9" />
          <circle cx={143} cy={109} r={7} fill="#d9d9d9" />
          <circle cx={177} cy={109} r={7} fill="#d9d9d9" />
        </svg>
      </span>
    </div>
  );
}
