import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct, UserCartProps } from '../views/Cart/types';

export interface CartState {
  data: UserCartProps;
  loading: boolean;
}

const initialState: CartState = {
  data: {
    id: 0,
    userId: 0,
    date: '',
    products: []
  },
  loading: false,
};

const usersSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<UserCartProps>) {
      state.data = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setNewProductCart(state, action: PayloadAction<CartProduct>) {
      // actualizamos la lista de productos en carrito
      const cart = {...state.data};
      
      cart.products = [
        ...cart.products,
        action.payload
      ]
      
      state.data = cart;
    },

 
  }
});

export const { 
    setCart, 
    setLoading,
    setNewProductCart,
} = usersSlice.actions;

export default usersSlice.reducer;
