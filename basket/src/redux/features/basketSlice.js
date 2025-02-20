import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    deleteCard: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addCard, deleteCard } = basketSlice.actions;

export default basketSlice.reducer;
