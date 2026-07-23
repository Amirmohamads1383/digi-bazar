import { useCart } from "../../../context/CartContext";

export default function MiniCart() {
  const { cartItems, getFinalPrice, getCartTotal, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="w-96 bg-white rounded-lg shadow-xl p-5 text-center">
        سبد خرید خالی است
      </div>
    );
  }

  const totalPrice = getCartTotal();

  return (
    <div className="w-96 bg-white rounded-lg shadow-xl p-4 max-h-105 overflow-y-auto">
      <div className="flex items-center justify-between pb-3 border-b border-Caption/20">
        <h4 className="font-semibold text-xl text-Title">سبد خرید شما</h4>
        <button className="flex items-center gap-1.5 text-sm font-normal text-Primary cursor-pointer">
          مشاهده سبد خرید
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
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
      <div className=" flex flex-col">
        {cartItems.map((item) => {
          const finalPrice = getFinalPrice(item);
          const hasDiscount = item.discountPercent && item.discountPercent > 0;

          return (
            <div
              className="mini-cart-products flex items-center justify-between gap-2 py-3 border-b border-b-Caption/20"
              key={item.id}
            >
              <div className="flex items-center gap-2">
                <img
                  src={item.images?.[0] || "/placeholder-image.jpg"}
                  alt={item.title}
                  className="w-18 h-18 object-cover rounded"
                />
                <div className="flex flex-col gap-2.5 flex-1 min-w-0">
                  <h4 className="font-medium text-Title line-clamp-1 text-sm">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    {hasDiscount ? (
                      <>
                        <span className="text-sm font-semibold text-Title">
                          {finalPrice.toLocaleString()} تومان
                        </span>
                      </>
                    ) : (
                      <span className="text-sm font-semibold text-Title">
                        {finalPrice.toLocaleString()} تومان
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-Caption">تعداد: {item.quantity}</p>
                </div>
              </div>
              <button
                className="p-1 text-Title bg-Secondry/20 rounded-md cursor-pointer"
                onClick={() => removeFromCart(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 8v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V8m-5 3v6m-4-6v6m6-12-1.406-2.11A2 2 0 0 0 12.93 2h-1.86a2 2 0 0 0-1.664.89L8 5m8 0H8m8 0h5M8 5H3"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 mt-4 pt-3 border-t border-Caption/20">
        <div className="flex items-center justify-between">
          <span className="font-medium text-Title">مجموع کل</span>
          <span className="font-semibold text-Title text-lg">
            {totalPrice.toLocaleString()} تومان
          </span>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <button className="font-semibold text-base py-2.5 cursor-pointer text-white bg-Primary rounded-lg">
            تسویه حساب
          </button>
          <button className="flex items-center justify-center gap-2 py-2.5 font-semibold text-base cursor-pointer text-Primary border border-Primary rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 6a4 4 0 0 0-8 0"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.562 9.504A4 4 0 0 1 8.532 6h6.937a4 4 0 0 1 3.97 3.504l1 8A4 4 0 0 1 16.468 22H7.531a4 4 0 0 1-3.969-4.496z"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
              <path
                d="M9 16c2.356 1.34 3.648 1.326 6 0"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            ادامه خرید
          </button>
        </div>
      </div>
    </div>
  );
}
