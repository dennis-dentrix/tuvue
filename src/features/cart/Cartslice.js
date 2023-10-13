import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // PAYLOAD IN THIS CASE IS A NEWITEM THAT IS CREATED ON SUBMIT
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.itemId !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getCart = (state) => {
  return state.cart.cart;
};

export const getTotalCartQuantity = (state) => state.cart.cart.length;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.itemId === id);
export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
