import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user.slice';


export const store = configureStore({
  reducer: {
    user: userSlice
  }
});

console.log(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;