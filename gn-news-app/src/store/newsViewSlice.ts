import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NewsViewType = "grid" | "list";
interface InitialStateInteface {
  view: NewsViewType;
}

const GRID: NewsViewType = "grid";
const LIST: NewsViewType = "list";

const initialState: InitialStateInteface = {
  view: LIST,
};

const newsViewSlice = createSlice({
  name: "newsView",
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<NewsViewType>) => {
      state.view = action.payload;
    },
  },
});

export { GRID, LIST, type NewsViewType };
export const { setView } = newsViewSlice.actions;

export default newsViewSlice.reducer;
