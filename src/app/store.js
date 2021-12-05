import { configureStore } from '@reduxjs/toolkit';
import user from './userSlice'
import tokens from '../pages/home/component/tokenSlice'
export const store = configureStore({
  reducer: {
    user,
    tokens
  },
});
