import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../actions/productAction";


const productSlice = createSlice({
    name: "products",
    initialState: {
      products: [],
      isloading: false,
      error: null,
    },
    reducers: {
      addProduct: (state, action) => {
        state.products.push(action.payload);
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.isloading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.isloading = false;
          state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.isloading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default productSlice.reducer;
  
  export const { addProduct } = productSlice.actions;