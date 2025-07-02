import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishListReducer,
  },
});

export default store;
