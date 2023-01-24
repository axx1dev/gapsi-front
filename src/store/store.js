import { configureStore } from '@reduxjs/toolkit'
import getSuppliersSlice from '../reducers/getSuppliersSlice';

export const store = configureStore({
  reducer: {
    getSuppliersReducer: getSuppliersSlice
  }
})