import { useCart } from "../../../context/CartContext";

export default function MiniCart() {
  const { cartItems, getFinalPrice, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="w-96 bg-white rounded-lg shadow-xl p-5 text-center">
        سبد خرید خالی است
      </div>
    );
  }

  const totalPrice = getCartTotal();

  return (
    <div className="w-96 bg-white rounded-lg shadow-xl p-4 max-h-96 overflow-y-auto">
      {cartItems.map((item) => {
        const finalPrice = getFinalPrice(item);
        const hasDiscount = item.discountPercent && item.discountPercent > 0;

        return (
          <div
            key={item.id}
            className="flex gap-3 py-3 border-b last:border-b-0"
          >
            <img
              src={item.images?.[0] || "/placeholder-image.jpg"}
              alt={item.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-Title line-clamp-1 text-sm">
                {item.title}
              </h4>
              <p className="text-sm text-Caption">تعداد: {item.quantity}</p>
              <div className="flex items-center gap-2">
                {hasDiscount ? (
                  <>
                    <span className="text-xs text-Secondry line-through">
                      {item.price.toLocaleString()}
                    </span>
                    <span className="text-sm font-semibold text-Primary">
                      {finalPrice.toLocaleString()} تومان
                    </span>
                  </>
                ) : (
                  <span className="text-sm font-semibold text-Primary">
                    {finalPrice.toLocaleString()} تومان
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}

      <div className="mt-4 pt-3 border-t border-Caption/20">
        <div className="flex items-center justify-between">
          <span className="font-medium text-Title">مجموع:</span>
          <span className="font-bold text-Primary text-lg">
            {totalPrice.toLocaleString()} تومان
          </span>
        </div>
      </div>
    </div>
  );
}
