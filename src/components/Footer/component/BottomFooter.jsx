import React from "react";

export default function BottomFooter() {
  return (
    <div className="flex items-center justify-between py-5 border-t border-t-[#dadada]">
      <p className="text-Caption font-medium text-xs">
        استفاده از مطالب فروشگاه اینترنتی دیجی بازار فقط برای مقاصد غیر تجاری و
        با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به دیجی بازار می باشد.
      </p>
      <div className="flex items-center gap-2.5 *:text-Caption *:cursor-pointer">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="m3.909 11.095 15.389-6.65a1 1 0 0 1 1.384 1.074l-2.104 13.276a1 1 0 0 1-1.715.53L13.53 15.77a2 2 0 0 1-.125-2.6l2.318-3.24c.14-.18-.08-.416-.27-.29l-4.846 3.253a4 4 0 0 1-2.801.637l-3.644-.527c-.998-.145-1.179-1.508-.253-1.908"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.511.335 2.945.936 4.229l-.713 4.396a1 1 0 0 0 1.152 1.146l4.355-.726A10 10 0 0 0 12 22Z"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M16 15.111v-.436c0-.542-.33-1.03-.833-1.23l-.466-.187a1.08 1.08 0 0 0-1.368.52s-1.11-.222-2-1.111c-.889-.89-1.11-2-1.11-2a1.08 1.08 0 0 0 .519-1.368l-.187-.466A1.325 1.325 0 0 0 9.325 8H8.89a.89.89 0 0 0-.89.889A7.11 7.11 0 0 0 15.111 16a.89.89 0 0 0 .889-.889"
              fill="currentColor"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.286 4c-2.104 0-3.81 1.79-3.81 4q.002.502.113.968C9.3 8.968 5.7 8.444 3 4.888c0 8.89 3.6 11.408 5.4 11.556-1.35 1.334-3.453 2.32-5.4 2.506.837.76 3.46 1.017 4.667 1.05 6.241 0 11.314-5.253 11.426-11.778C20.29 7.444 20.86 5.334 21 4.89c-.583.612-1.8.889-2.77.573C17.532 4.569 16.472 4 15.286 4Z"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
