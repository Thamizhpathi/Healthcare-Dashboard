
import { createSlice } from '@reduxjs/toolkit';

const SidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isVisible: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isVisible = !state.isVisible;
    },
    showSidebar: (state) => {
      state.isVisible = true;
    },
    hideSidebar: (state) => {
      state.isVisible = false;
    },
  },
});

export const { toggleSidebar, showSidebar, hideSidebar } = SidebarSlice.actions;
export default SidebarSlice.reducer;
