import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./operations";

const initialState = {
  brands: [],
};

const slice = createSlice({
  name: "brands",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default slice.reducer;