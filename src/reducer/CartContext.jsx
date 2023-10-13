import { createContext, useReducer, useState } from "react";
import { cartData } from "../../data/cart";

export const CartContext = createContext();

const initialState = {
  cartItems: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addItem":
      return {
        ...state,
        cartItems: action.payload,
      };
  }
}

export function PostProvider({ children }) {
  const [{ cartItems }, dispatch] = useReducer(reducer, initialState);

  const { id, name, source, weight, price, image } = cartData;

  async function handleAddToCart() {
    dispatch({ type: "addItem" });
    const newItem = {
      id,
      name,
      source,
      weight,
      price,
      image,
    };
  }

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
