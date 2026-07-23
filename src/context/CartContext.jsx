import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const getFinalPrice = (product) => {
    if (product.discountPercent && product.discountPercent > 0) {
      return product.price - (product.price * product.discountPercent) / 100;
    }
    return product.price;
  };

  const getTotalPrice = (product) => {
    return getFinalPrice(product) * product.quantity;
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + getTotalPrice(item);
    }, 0);
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.warning("محصول از سبد خرید حذف شد")
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getFinalPrice,
        getTotalPrice,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
