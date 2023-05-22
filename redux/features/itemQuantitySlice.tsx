import { createSlice } from '@reduxjs/toolkit';

interface ItemQuantityState {
  quantity: number;
}

const initialState: ItemQuantityState = {
  quantity: 1,
};

export const itemQuantitySlice = createSlice({
  name: 'itemQuantity',
  initialState,
  reducers: {
    increment: (state) => {
      if (state.quantity < 10) {
        state.quantity++;
      }
    },
    decrement: (state) => {
      if (state.quantity > 1) {
        state.quantity--;
      }
    },
  },
});

export const { increment, decrement } = itemQuantitySlice.actions;
export default itemQuantitySlice.reducer;
