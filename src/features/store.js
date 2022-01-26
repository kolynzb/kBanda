import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import watchlistReducer from "./slices/watchListSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    watchlist: watchlistReducer,
  },
});
