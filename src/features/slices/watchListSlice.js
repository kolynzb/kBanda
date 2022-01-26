import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const watchlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      state.value += action.payload;
    },
    removeWatchlist: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWatchlist, removeWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
