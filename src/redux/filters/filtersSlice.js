import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.items = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;