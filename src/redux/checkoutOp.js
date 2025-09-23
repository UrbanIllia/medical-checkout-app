// frontend/src/redux/checkoutOp.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Добавляем axios
import { t } from "../helpers/helpers";

export const checkoutOrder = createAsyncThunk(
  "checkout/checkoutOrder",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const { cart } = getState();
      const dataToSend = {
        ...formData,
        orders: cart.cartItems,
      };

      console.log("Data to send:", JSON.stringify(dataToSend, null, 2));

      const response = await axios.post(
        "https://checkout-back-f0mz.onrender.com/order",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": "en",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error in checkoutOrder:", error.message);
      return rejectWithValue(
        error.response?.data?.message || t("server_error")
      );
    }
  }
);
