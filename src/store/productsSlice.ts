import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '../views/Products/types';

export interface ProductsState {
  data: Products[];
  products: Products[];
  selectedProduct: Products | null;
  loading: boolean;
}

const initialState: ProductsState = {
  data: [],
  products: [],
  loading: false,
  selectedProduct: null
};

const usersSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<Products[]>) {
      state.data = action.payload;
      state.products = action.payload;
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    updateProductsList(state, action: PayloadAction<string>) {
      // al agregar un producto en el carrito lo eliminamos de la lista que se muestra al usuario
      const updatedList = state.products.filter(prod => prod.id !== action.payload)
      console.log(updatedList, action.payload);
      
      state.products = updatedList;
    }
  
  }
});

export const { 
    setData, 
    setLoading,
    updateProductsList
} = usersSlice.actions;

export default usersSlice.reducer;
