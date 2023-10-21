import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: []
  },
  reducers: {
    addToBasket: (state: any, action: any) => {
      state.basket.push(action.payload);
    }
  }
});
export default basketSlice.reducer;
export const { addToBasket } = basketSlice.actions;
