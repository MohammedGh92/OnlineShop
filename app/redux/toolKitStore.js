import counterSlice from './slices/counterSlice';
import userSlice from './slices/userSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice
  },
})

export default store;
