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
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const { setPaymentMethod } = paymentMethodSlice.actions;
export default paymentMethodSlice.reducer;
