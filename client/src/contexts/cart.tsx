import React, { createContext, useState, useContext, ReactNode } from "react";
import { Cart, Product } from "src/types/Product";

interface CartContextType {
  cart: Cart | null;
  setCart: React.Dispatch<React.SetStateAction<Cart | null>>;
  addtoCart: (product: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart | null>(null);
  ({ products: [] });
  //ham them
  const addtoCart = (product: Product) => {
    console.log(product);

    setCart((prevCart) => {
      if (prevCart) {
        const setProduct = prevCart.products.find(
          (item) => item.product._id === product._id
        );
        if (setProduct) {
          return prevCart;
        } else {
          return {
            ...prevCart,
            products: [...prevCart.products, { product, quantity: 1 }],
          };
        }
      }
      return prevCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addtoCart }}>
      {children}
    </CartContext.Provider>
  );
};
