import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fungsi-fungsi ini dapat Anda modifikasi untuk memenuhi kebutuhan Anda
  const addToCart = (product) => {
    // Cek jika produk sudah ada dalam cart
    const existingProduct = cart.find(item => item.product.id === product.id);

    if (existingProduct) {
      // Jika produk sudah ada, tambahkan 1 ke kuantitas
      setCart(cart.map(item => 
        item.product.id === product.id
          ? {...item, quantity: item.quantity + 1}
          : item
      ));
    } else {
      // Jika produk belum ada dalam cart, tambahkan produk dengan quantity 1
      setCart(prevCart => [...prevCart, { product, quantity: 1 }]);
    }
  };
  
  const removeFromCart = (productId) => {
    setCart((oldCart) => oldCart.filter((item) => item.product.id !== productId));
  };

  const changeQuantity = (productId, newQuantity) => {
    setCart((oldCart) =>
      oldCart.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, changeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
