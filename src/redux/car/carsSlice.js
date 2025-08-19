import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk, fetchOneCar } from "./operations";

const initialState = {
  cars: [],
  totalCars: 0,
  selectedCar: null,
  page: 1,
  totalPages: 1,
  isLoading: false,
  error: null,
};


const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchCarsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
          })
          .addCase(fetchCarsThunk.fulfilled, (state, action) => {
            if (action.payload.page === 1) {
              state.cars = action.payload.cars;
            } else {
              state.cars.push(...action.payload.cars);

            }
            state.totalCars = action.payload.totalCars;
            state.page = action.payload.page;
            state.totalPages = action.payload.totalPages;
            state.isLoading = false;
          })
          
      .addCase(fetchCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  
      .addCase(fetchOneCar.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOneCar.fulfilled, (state, action) => {
        state.selectedCar = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOneCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }),
});

export default carsSlice.reducer;
