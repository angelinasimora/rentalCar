import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../api/axios";

export const fetchCars = createAsyncThunk(
    "cars/fetchCars",
    async (params, { rejectWithValue }) => {
    try {
        const {
        page = 1,
        limit = 12,
        brand,
        price,
        mileageFrom,
        mileageTo,
    } = params;

    const response = await axios.get(`${axiosInstance}/cars`, {
        params: {
            page,
            limit,
            brand,
            price,
            mileageFrom,
            mileageTo,
        },
        });
        
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const carsSlice = createSlice({
    name: "cars",
    initialState: {
    items: [],
    loading: false,
    error: null,
    page: 1,
    hasMore: true,
    filters: {
        brand: "",
        price: "",
        mileageFrom: "",
        mileageTo: "",
    },
    },
    reducers: {
    resetCars(state) {
    state.items = [];
    state.page = 1;
    state.hasMore = true;
    state.error = null;
    },
    setFilters(state, action) {
        state.filters = action.payload;
    },
    incrementPage(state) {
        state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
        })
        .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.length === 0) {
            state.hasMore = false;
        } else {
            state.items = [...state.items, ...action.payload];
        }
        })
        .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        });
    },
});

export const { resetCars, setFilters, incrementPage } = carsSlice.actions;

export default carsSlice.reducer;
