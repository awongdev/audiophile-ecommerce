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
      state.quantity++;
    },
    decrement: (state) => {
      if (state.quantity > 1) {
        state.quantity--;
      }
    },
    reset: (state) => {
      state.quantity = 1;
    },
  },
});

export const { increment, decrement, reset } = itemQuantitySlice.actions;
export default itemQuantitySlice.reducer;
