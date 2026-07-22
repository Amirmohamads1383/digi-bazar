import React from "react";
import { RouterProvider } from "react-router";
import routes from "./routes";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  );
}
