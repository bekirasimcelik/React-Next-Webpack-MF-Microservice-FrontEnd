import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../features/products/productsService';
import cartReducer from './slices/cartSlice';
import { useDispatch } from 'react-redux';
import productReducer from './slices/productSlice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export const useAppDispatch = () => useDispatch();