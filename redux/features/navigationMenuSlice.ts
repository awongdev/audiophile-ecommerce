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
    setToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setToggle } = navigationMenuSlice.actions;
export default navigationMenuSlice.reducer;
