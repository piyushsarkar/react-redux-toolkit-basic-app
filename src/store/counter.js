import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
    showCounter: true,
  },
  reducers: {
    increment: (state, action) => {
      state.counter += action.payload ? action.payload : 1;
    },
    decrement: (state) => {
      state.counter--;
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
