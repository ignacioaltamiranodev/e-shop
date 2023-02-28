/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsLS = JSON.parse(localStorage.getItem('fav')) ?? [];
    setItems(itemsLS);
  }, []);

  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(items));
  }, [items]);

  const addItemToCart = (item) => {
    const { id, title } = item;

    const itemExists = items.find((item) => item.id === id);

    if (!itemExists) {
      setItems([...items, { ...item, qty: 1 }]);
      toast.success(`${title} was added to your cart.`);
      return;
    }
    toast.success(`${title} is already in your cart.`);
    return;
  };

  const removeItemFromCart = (item) => {
    const { id, title } = item;
    setItems(items.filter((item) => item.id !== id));
    toast.success(`${title} was removed from your cart.`);
  };

  const increaseItemQty = (item) => {
    const { id, qty } = item;

    setItems(
      items.map((item) => (item.id === id ? { ...item, qty: qty + 1 } : item))
    );
  };

  const decreaseItemQty = (item) => {
    const { id, qty, title } = item;

    if (qty <= 1) {
      setItems(items.filter((item) => item.id !== id));
      toast.success(`${title} was removed from your cart.`);
      return;
    }
    setItems(
      items.map((item) => (item.id === id ? { ...item, qty: qty - 1 } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items?.reduce(
    (amount, current) => amount + current.price * current.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        removeItemFromCart,
        increaseItemQty,
        decreaseItemQty,
        clearCart,
        total,
        items,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
