import { configureStore } from '@reduxjs/toolkit';
import navigationMenuReducer from './features/navigationMenuSlice';
import paymentMethodReducer from './features/paymentMethodSlice';
import itemQuantityReducer from './features/itemQuantitySlice';
import cartModalReducer from './features/cartModalSlice';
import localCartReducer from './features/localCartSlice';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { WebStorage } from 'redux-persist/lib/types';

const createNoopStorage = (): WebStorage => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage('local');
};

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, localCartReducer);

export const store = configureStore({
  reducer: {
    navigationMenu: navigationMenuReducer,
    paymentMethod: paymentMethodReducer,
    itemQuantity: itemQuantityReducer,
    cartModal: cartModalReducer,
    cart: persistedReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
