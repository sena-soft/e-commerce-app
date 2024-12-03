import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
