import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

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
      console.log(state);
    },

    decreament: (state) => {
      state.value -= 1;
      console.log(state);
    }
  }
});

export default counterSlice.reducer;
export const { increament, decreament } = counterSlice.actions;