import { configureStore } from "@reduxjs/toolkit";
import newsViewReducer from "./newsViewSlice";

const store = configureStore({
  reducer: newsViewReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
