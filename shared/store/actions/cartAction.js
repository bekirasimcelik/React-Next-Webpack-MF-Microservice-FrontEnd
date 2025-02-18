import { createAsyncThunk } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (product, { rejectWithValue }) => {
    try {
      return product;
    } catch (error) {
      return rejectWithValue(error.response?.data || "API Hatası");
    }
  }
);

export const loadCart = createAsyncThunk("cart/loadCart", async () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart;
});

export const saveCart = createAsyncThunk("cart/saveCart", async (_, { getState }) => {
  const cart = getState().cart.items;
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("aksiyon içi")
  return cart;
});
