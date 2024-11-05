import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  value: number
}

const initialState = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
      console.log(state.value);
    },

    decreament: (state) => {
      state.value -= 1;
      console.log(state.value);
    }
  }
});

export default counterSlice.reducer;
export const { increament, decreament } = counterSlice.actions;