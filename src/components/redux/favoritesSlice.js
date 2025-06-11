import { createSlice } from "@reduxjs/toolkit";

const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: savedFavorites,
  },
  reducers: {
    addToFavorites(state, action) {
      const car = action.payload;
      const exists = state.items.find((item) => item.id === car.id);
      if (!exists) {
        state.items.push(car);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },
    removeFromFavorites(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
