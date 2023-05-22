import { createSlice } from '@reduxjs/toolkit';

interface NavigationMenuState {
  isOpen: boolean;
}

const initialState: NavigationMenuState = {
  isOpen: false,
};

export const navigationMenuSlice = createSlice({
  name: 'navigationMenu',
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleNav, closeMenu } = navigationMenuSlice.actions;
export default navigationMenuSlice.reducer;
