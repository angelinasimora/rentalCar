import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./car/carsSlice";
import favoritesReducer from "./car/favoritesSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: favoritesReducer,
  },
});
