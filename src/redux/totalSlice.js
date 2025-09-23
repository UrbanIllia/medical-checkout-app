import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subTotal: 0,
  shippingFee: 40,
  total: 0,
};

const slice = createSlice({
  name: "total",
  initialState,
  reducers: {
    changeTotalValue: (state, action) => {
      state.subTotal = action.payload.subTotal;
      state.shippingFee = action.payload.shippingFee;
      state.total = action.payload.total;
    },
  },
});

export const totalReducer = slice.reducer;
export const { changeTotalValue } = slice.actions;
