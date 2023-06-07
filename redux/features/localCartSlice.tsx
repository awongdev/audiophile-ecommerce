import { createSlice } from '@reduxjs/toolkit';

interface ItemT {
  id: number;
  name: string;
  price: number;
  slug: string;
  img: string;
  quantity: number;
}

interface LocalCartState {
  localCart: ItemT[];
}

const initialState: LocalCartState = {
  localCart: JSON.parse(localStorage.getItem('cart') || '[]'),
};

export const localCartSlice = createSlice({
  name: 'localCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const [item, quantity] = action.payload;

      const filteredItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        slug: item.slug,
        img: `/assets/cart/image-${item.slug}.jpg`,
        quantity: quantity,
      };

      const existingItemIndex = state.localCart.findIndex(
        (cartItem: ItemT) => cartItem.id === filteredItem.id,
      );

      if (existingItemIndex !== -1) {
        state.localCart[existingItemIndex].quantity += quantity;
      } else {
        state.localCart.push(filteredItem);
      }

      localStorage.setItem('cart', JSON.stringify(state.localCart));
    },

    removeAll: (state) => {
      state.localCart = [];
      localStorage.removeItem('cart');
    },

    increment: (state, action) => {
      const item = state.localCart.find(
        (cartItem: ItemT) => cartItem.id === action.payload.id,
      );
      if (item) {
        item.quantity++;
        localStorage.setItem('cart', JSON.stringify(state.localCart));
      }
    },
    decrement: (state, action) => {
      const itemIndex = state.localCart.findIndex(
        (cartItem: ItemT) => cartItem.id === action.payload.id,
      );
      const item = state.localCart[itemIndex];

      if (item.quantity > 0) {
        item.quantity--;
        if (item.quantity === 0) {
          state.localCart.splice(itemIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(state.localCart));
      }
    },
  },
});

export const { addToCart, removeAll, increment, decrement } =
  localCartSlice.actions;
export default localCartSlice.reducer;
