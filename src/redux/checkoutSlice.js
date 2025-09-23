import { createSlice } from "@reduxjs/toolkit";
import { checkoutOrder } from "./checkoutOp";
import { toast } from "react-toastify";
import { t } from "../helpers/helpers";
const initialState = {
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    resetCheckout: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkoutOrder.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(checkoutOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        toast.success(t("checkout_successful"));
        console.log("Checkout data sent:", action.payload);
      })
      .addCase(checkoutOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        toast.error(action.payload || t("checkout_failed"));
      });
  },
});

export const { resetCheckout } = checkoutSlice.actions;

export default checkoutSlice.reducer;
