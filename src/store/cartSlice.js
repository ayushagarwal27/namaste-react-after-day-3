import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, { payload }) => {
      state.items.push(payload);
    },
    clearCart: state => {
      state.items = [];
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
