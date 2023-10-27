import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slices/basketSlice";
import { DataSlice } from "./slices/dataSlice";
export const store = configureStore({
  reducer: {
    basket: basketSlice,
    data: DataSlice.reducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
