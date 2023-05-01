import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState = {
  count:0,
  isLoading: false,
  isSuccess: false,
  errorMessage: ''
}

export const getAPI = createAsyncThunk('getAPI', async () => {
  console.log('getAPI');
    const { data } = await axios.get(`https://facebook.github.io/react-native/movies.json`);
    return data;
})


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incByAmount: (state,action) => {
      state.count += action.payload
    }
  },
  extraReducers: {
  [getAPI.pending]: (state) => {
    state.isLoading = true;
  },
  [getAPI.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.count = payload;
  },
  [getAPI.rejected]: (state, { payload }) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.errorMessage = payload
  }
}
})
export const { increment, decrement, incByAmount } = counterSlice.actions
export default counterSlice.reducer
