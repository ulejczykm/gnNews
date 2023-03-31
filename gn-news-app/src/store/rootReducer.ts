import { combineReducers } from "@reduxjs/toolkit";
import articlesNumberSlice from "./slices/articlesNumberSlice";
import newsViewSlice from "./slices/newsViewSlice";

const rootReducer = combineReducers({
  articlesNumber: articlesNumberSlice,
  newsView: newsViewSlice,
});

export default rootReducer;
