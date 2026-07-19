import React from "react";

export default function TopFooter() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
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
          <h5 className="text-2xl font-bold">دیجی بازار</h5>
        </div>
        <div className="flex items-center gap-4 *:text-Caption">
          <span className="flex items-center gap-1.5">
            <svg
              className="text-Primary"
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
            021-77046390
          </span>
          <span>هر روز 19 تا 19:30</span>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-items-end">
        <p className="font-medium text-sm/relaxed text-Title">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد
        </p>
        <div className="flex flex-col items-start gap-4">
          <h4 className="font-semibold text-base text-Title">راهنمای خرید</h4>
          <ul className="flex flex-col items-start gap-3 *:text-sm *:text-Caption">
            <li>رویه ارسال سفارش</li>
            <li>رویه های بازگرداندن کالا</li>
            <li>قوانین و مقررات فروشگاه</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h4 className="font-semibold text-base text-Title">
            محصولات پربازدید
          </h4>
          <ul className="flex flex-col items-start gap-3 *:text-sm *:text-Caption">
            <li>گوشی و موبایل</li>
            <li>رویه های بازگرداندن کالا</li>
            <li>قوانین و مقررات فروشگاه</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h4 className="font-semibold text-base text-Title">
            نماد های الکترونیک
          </h4>
          <div className="flex items-center gap-4">
            <img
              src="/images/namad/namad-1.png"
              alt=""
              className="w-20 object-cover"
            />
            <img
              src="/images/namad/namad-2.png"
              alt=""
              className="w-20 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
