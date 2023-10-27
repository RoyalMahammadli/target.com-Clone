import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    }
  }
});

export const { setProducts } = DataSlice.actions;
