import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList(state, action) {
      const newItem = action.payload;
      const existing = state.items.find((item) => item.id === newItem.id);
      if (!existing) state.items.push(action.payload);
    },
    removeFromWishList(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export default wishlistSlice.reducer;
export const { addToWishList, removeFromWishList } = wishlistSlice.actions;
export const getWishList = (state) => state.wishlist.items;
