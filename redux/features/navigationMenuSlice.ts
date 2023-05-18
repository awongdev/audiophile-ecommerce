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
    setNavToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    setCloseMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setNavToggle, setCloseMenu } = navigationMenuSlice.actions;
export default navigationMenuSlice.reducer;
