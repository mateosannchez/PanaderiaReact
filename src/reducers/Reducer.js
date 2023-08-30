import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
}

const arraySlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.value = state.value.concat(action.payload);
    },

    increment: (state, action) => {
      const product = state.value.find(item => item.id === action.payload);
      if (product) {
        product.cantidad += 1; // Incrementar la cantidad del producto existente
      }
    },
    
    decrement: (state, action) => {
      const product = state.value.find(item => item.id === action.payload);
      if (product && product.cantidad > 1) {
        product.cantidad -= 1; // Disminuir la cantidad del producto existente si es mayor a 1
      }
    },

    removeProduct: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload);
    },
  },
});

export const { addCart, increment, decrement, removeProduct } = arraySlice.actions;
export default arraySlice.reducer;