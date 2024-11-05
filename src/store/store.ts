import { configureStore } from '@reduxjs/toolkit';
import userSlice, { JWT_PERSISTEN_KEY } from './user.slice';
import cartSlice, { CART_PERSISTENT_STATE } from './cart.slice';
import counterSlice from './counter.slice';
import { saveState } from './storage';


export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    counter: counterSlice
  }
});

store.subscribe(() => {
  saveState({ jwt: store.getState().user.jwt }, JWT_PERSISTEN_KEY);
  saveState(store.getState().cart, CART_PERSISTENT_STATE);
});

console.log(store.dispatch);
console.log(store.getState);
console.log(store.subscribe);
console.log(store.replaceReducer);
// store.subscribe(() => console.info(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;