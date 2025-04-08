import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Ensure price is a valid number
    if (typeof product.price !== 'number' || isNaN(product.price)) {
      console.error('Invalid price format:', product.price);
      return;
    }
    
    setCartItems(prevItems => {
      // Check if item exists in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        const newQuantity = (existingItem.quantity || 0) + (product.quantity || 1);
        
        if (newQuantity <= 0) {
          return prevItems.filter(item => item.id !== product.id);
        }
        
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: newQuantity }
            : item
        );
      }
      // Add new item with quantity 1 if not specified
      return [...prevItems, { ...product, quantity: product.quantity || 1 }];
    });
  };

  // Calculate total quantity of items in the cart
  const cartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <CartContext.Provider 
      value={{ cartItems, addToCart, removeFromCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
