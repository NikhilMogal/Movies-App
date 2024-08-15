import { configureStore } from '@reduxjs/toolkit'
import nikhilSlice from './nikhilSlice';

export const store = configureStore({
  reducer: {
    home:nikhilSlice,
  },
});