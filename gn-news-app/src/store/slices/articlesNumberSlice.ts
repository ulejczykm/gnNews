import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateInteface {
  articlesNumber: number;
}

const initialState: InitialStateInteface = {
  articlesNumber: 0,
};

const articlesNumberSlice = createSlice({
  name: "articlesNumber",
  initialState,
  reducers: {
    setArticlesNumber: (state, action: PayloadAction<number>) => {
      state.articlesNumber = action.payload;
    },
  },
});

export const { setArticlesNumber } = articlesNumberSlice.actions;

export default articlesNumberSlice.reducer;
