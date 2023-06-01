import { configureStore } from '@reduxjs/toolkit';
import navigationMenuReducer from './features/navigationMenuSlice';
import paymentMethodReducer from './features/paymentMethodSlice';
import itemQuantityReducer from './features/itemQuantitySlice';
import cartModalReducer from './features/cartModalSlice';

export const store = configureStore({
  reducer: {
    navigationMenu: navigationMenuReducer,
    paymentMethod: paymentMethodReducer,
    itemQuantity: itemQuantityReducer,
    cartModal: cartModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
