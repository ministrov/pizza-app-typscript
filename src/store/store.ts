import { configureStore } from '@reduxjs/toolkit';
import userSlice, { JWT_PERSISTEN_KEY } from './user.slice';
import counterSlice from './counter.slice';
import { saveState } from './storage';


export const store = configureStore({
  reducer: {
    user: userSlice,
    counter: counterSlice
  }
});

store.subscribe(() => {
  saveState({jwt: store.getState().user.jwt}, JWT_PERSISTEN_KEY);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;