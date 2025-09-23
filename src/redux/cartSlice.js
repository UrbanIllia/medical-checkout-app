import { createSlice } from "@reduxjs/toolkit";
import { shoppingCart } from "../config/shoppingCards.config";
const initialState = {
  cartItems: shoppingCart,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    initializeCart: (state) => {
      if (!state.cartItems || state.cartItems.length === 0) {
        state.cartItems = shoppingCart;
      }
    },
  },
});

export const { removeItem, clearCart, initializeCart } = cartSlice.actions;
export default cartSlice.reducer;
