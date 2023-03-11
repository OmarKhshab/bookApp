import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices/bookSlice";
export const store = configureStore({
  reducer: {
    books: bookSlice,
  },
});

export default store;
export type Dispatcher = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>