import { configureStore } from '@reduxjs/toolkit';
import userSlice, { JWT_PERSISTEN_KEY } from './user.slice';
import counterSlice from './counter.slice';
import { saveState } from './storage';
import cartSlice from './cart.slice';


export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    counter: counterSlice
  }
});

store.subscribe(() => {
  saveState({jwt: store.getState().user.jwt}, JWT_PERSISTEN_KEY);
});

// store.subscribe(() => console.info(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;