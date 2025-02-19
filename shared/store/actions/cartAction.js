import { createAsyncThunk } from "@reduxjs/toolkit";
export const addToCart = createAsyncThunk("cart/addToCart", async (product) => {
  return product;
});
export const loadCart = createAsyncThunk("cart/loadCart", async () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart;
});
export const saveCart = createAsyncThunk("cart/saveCart", async (_, { getState }) => {
  const cart = getState().cart.items;
  localStorage.setItem("cart", JSON.stringify(cart));
  return cart;
});
export const removeItem = createAsyncThunk("cart/removeItem", async (id) => {
  return id;
});
export const increaseQuantity = createAsyncThunk("cart/increaseQuantity", async (id) => {
  return id;
});
export const decreaseQuantity = createAsyncThunk("cart/decreaseQuantity", async (id) => {
  return id;
});