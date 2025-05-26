import { configureStore } from '@reduxjs/toolkit';
import SidebarReducer from './SidbarSlice';

export const Store = configureStore({
  reducer: {
    sidebar: SidebarReducer,
  },
});
