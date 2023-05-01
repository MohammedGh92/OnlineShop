import {createStore,applyMiddleware} from 'redux';
import counterSlice from './counterSlice';
import ReduxThunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    counter: counterSlice

  },
})

export default store;
