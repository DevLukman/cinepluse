import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./wishlistSlice";

export const store = (preloadedState) =>
  configureStore({
    reducer: {
      wishlist: wishListReducer,
    },
    preloadedState,
  });
