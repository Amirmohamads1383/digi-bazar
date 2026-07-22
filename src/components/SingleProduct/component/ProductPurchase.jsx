import React, { useState } from "react";

export default function ProductPurchase({ product }) {
  const [count, setCount] = useState(1);
  const hasDiscount = product.discountPercent > 0;
  const finalPrice = hasDiscount
    ? product.price - (product.price * product.discountPercent) / 100
    : product.price;

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col gap-3 sticky top-1 p-6 w-1/4 bg-white rounded-lg">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          {hasDiscount ? (
            <>
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-Title">قیمت محصول</span>

                <span className="px-2 py-1 text-sm font-bold text-white bg-Primary rounded-md">
                  {product.discountPercent}%
                </span>
              </div>
              <div className="flex items-center justify-end gap-3">
                <span className="text-sm text-Secondry line-through">
                  {product.price.toLocaleString()}
                </span>
                <span className="text-xl font-bold text-Primary">
                  {finalPrice.toLocaleString()} تومان
                </span>
              </div>
            </>
          ) : (
            <>
              <span className="text-Caption">قیمت محصول</span>

              <span className="text-2xl font-bold text-Title">
                {product.price.toLocaleString()}
              </span>

              <span className="text-sm text-Caption">تومان</span>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-4 py-4 border-y border-y-Caption/10">
        <div className="flex items-center justify-center gap-6 p-1 bg-[#F0F0F0] rounded-lg">
          <button
            className="px-5 py-3 bg-white rounded-md cursor-pointer"
            onClick={increaseCount}
          >
            +
          </button>
          <span className="font-semibold text-lg text-Title">{count}</span>
          <button
            className="px-5 py-3 bg-white rounded-md cursor-pointer"
            onClick={decreaseCount}
          >
            -
          </button>
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-3 font-medium text-white hover:text-Primary bg-Primary hover:bg-white rounded-lg cursor-pointer transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2.587 10h18.826m-3.378-4H5.965c-2.511 0-4.39 2.326-3.882 4.808l1.635 8A3.97 3.97 0 0 0 7.6 22h8.8a3.97 3.97 0 0 0 3.882-3.192l1.635-8C22.424 8.326 20.546 6 18.035 6M9 2 6 6m9-4 3 4m-9 8v4m6-4v4"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          افزودن به سبد خرید
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-3 font-medium text-Title border border-Caption/15 rounded-lg cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.765 4.702 12 5.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0s-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22s-5.538-2.27-7.651 0Z"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinejoin="round"
            />
          </svg>
          افزودن به علاقه مندی ها
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-semibold text-center text-Title">
          اشتراک گذاری :
        </span>
        <div className="flex items-center justify-center gap-3 *:text-Caption *:cursor-pointer">
          <span className="p-2 bg-[#F3F2F3] rounded-full">
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
          <span className="p-2 bg-[#F3F2F3] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x={2}
                y={2}
                width={20}
                height={20}
                rx={4}
                stroke="currentColor"
                strokeWidth={1.5}
              />
              <circle cx={18} cy={6} r={1} fill="currentColor" />
              <circle
                cx={12}
                cy={12}
                r={5}
                stroke="currentColor"
                strokeWidth={1.5}
              />
            </svg>
          </span>
          <span className="p-2 bg-[#F3F2F3] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 48 48"
              fill="currentColor"
            >
              <path
                d="m0 48 3.374-12.326A23.73 23.73 0 0 1 .2 23.782C.206 10.67 10.876 0 23.986 0c6.362.002 12.334 2.48 16.826 6.976a23.65 23.65 0 0 1 6.96 16.828c-.006 13.114-10.676 23.784-23.786 23.784a23.8 23.8 0 0 1-11.376-2.896zm13.194-7.614c3.352 1.99 6.552 3.182 10.784 3.184 10.896 0 19.772-8.868 19.778-19.77.004-10.924-8.83-19.78-19.762-19.784-10.904 0-19.774 8.868-19.778 19.768-.002 4.45 1.302 7.782 3.492 11.268L5.71 42.348zm22.774-10.928c-.148-.248-.544-.396-1.14-.694-.594-.298-3.516-1.736-4.062-1.934-.544-.198-.94-.298-1.338.298-.396.594-1.536 1.934-1.882 2.33s-.694.446-1.288.148-2.51-.924-4.78-2.95c-1.766-1.576-2.96-3.522-3.306-4.118-.346-.594-.036-.916.26-1.212.268-.266.594-.694.892-1.042.302-.344.4-.592.6-.99.198-.396.1-.744-.05-1.042-.15-.296-1.338-3.222-1.832-4.412-.484-1.158-.974-1.002-1.338-1.02l-1.14-.02c-.396 0-1.04.148-1.584.744s-2.08 2.032-2.08 4.958 2.13 5.752 2.426 6.148c.298.396 4.19 6.4 10.152 8.974 1.418.612 2.526.978 3.388 1.252 1.424.452 2.72.388 3.744.236 1.142-.17 3.516-1.438 4.012-2.826.496-1.39.496-2.58.346-2.828"
                fill="#currentColor"
              />
            </svg>
          </span>
          <span className="p-2 bg-[#F3F2F3] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.121 9.879 9.878 14.12M10.334 7 12 5.333A4.714 4.714 0 1 1 18.667 12L17 13.667M13.667 17 12 18.667A4.714 4.714 0 1 1 5.333 12L7 10.333"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
