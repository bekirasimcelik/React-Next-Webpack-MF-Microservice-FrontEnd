import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../services/verb";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getRequest("/products");
      console.log(response)
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || "API Hatası");
    }
  }
);
