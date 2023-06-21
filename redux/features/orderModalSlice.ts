import { createSlice } from '@reduxjs/toolkit';

interface OrderModalState {
  orderSuccessModal: boolean;
  showMore: boolean;
}

const initialState: OrderModalState = {
  orderSuccessModal: false,
  showMore: false,
};

export const orderModalSlice = createSlice({
  name: 'cartModal',
  initialState,
  reducers: {
    closeOrderModal: (state) => {
      state.orderSuccessModal = false;
    },
    openOrderModal: (state) => {
      state.orderSuccessModal = true;
    },
    toggleShowMore: (state) => {
      state.showMore = !state.showMore;
    },
  },
});

export const { closeOrderModal, openOrderModal, toggleShowMore } =
  orderModalSlice.actions;
export default orderModalSlice.reducer;
