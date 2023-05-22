import { createSlice } from '@reduxjs/toolkit';

interface PaymentMethodState {
  paymentMethod: 'emoney' | 'cash' | undefined;
}

const initialState: PaymentMethodState = {
  paymentMethod: undefined,
};

export const paymentMethodSlice = createSlice({
  name: 'paymentMethod',
  initialState,
  reducers: {
    changePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const { changePaymentMethod } = paymentMethodSlice.actions;
export default paymentMethodSlice.reducer;
