import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: []
  },
  reducers: {
    addToBasket: (state: any, action) => {
      // state.basket.push(action.payload);
      state.basket = [...state.basket, action.payload];
    },
    removeFromBasket: (state: any, action) => {
      state.basket = state.basket.filter(
        (item: any) => item.id != action.payload
      );
    }
  }
});
export default basketSlice.reducer;
export const { addToBasket, removeFromBasket } = basketSlice.actions;
