import { createSlice } from "@reduxjs/toolkit";
import { addToCart, loadCart, saveCart } from "../actions/cartAction";

const initialState = {
  items: ["1", "2"],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalQuantity -= action.payload.quantity;
      state.totalPrice -= action.payload.price * action.payload.quantity;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
        localStorage.setItem("cart", JSON.stringify(state.items));
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.removeItem("cart");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
      localStorage.setItem("cart", JSON.stringify(state.items));
    });

    builder.addCase(loadCart.fulfilled, (state, action) => {
      state.items = action.payload;
      state.totalQuantity = action.payload.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalPrice = action.payload.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    });
    builder.addCase(saveCart.fulfilled, (state) => {
      localStorage.setItem("cart", JSON.stringify(state.items));
    });
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
