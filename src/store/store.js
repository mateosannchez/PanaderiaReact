import { configureStore } from '@reduxjs/toolkit';
import arraySlice from '../reducers/Reducer';

export const store = configureStore({
  reducer: {
    array: arraySlice,
  },
});

