import { createSlice } from "@reduxjs/toolkit";
import getSuppliers from "../services/getSuppliers";

export const getSuppliersSlice = createSlice({
  name: "getSupplierSlice",
  initialState: [],
  reducers: {
    addData: (state, action) => {
      return [...action.payload]
    },
  },
});

export const { addData } = getSuppliersSlice.actions;
export default getSuppliersSlice.reducer;