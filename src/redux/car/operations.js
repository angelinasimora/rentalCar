import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../api/axios";
export const fetchCarsThunk = createAsyncThunk(
  "cars/fetchAll",
  async ({ filters = {}, page = 1 }) => {
    const params = new URLSearchParams();

    if (filters.brand) params.append("brand", filters.brand);
    if (filters.price) params.append("rentalPrice", filters.price);
    if (filters.mileageFrom) params.append("mileage_gte", filters.mileageFrom);
    if (filters.mileageTo) params.append("mileage_lte", filters.mileageTo);

    params.append("page", page);

    const response = await axiosInstance.get(`/cars?${params.toString()}`);
    return { ...response.data, page };
  }
);


export const fetchOneCar = createAsyncThunk(
  "cars/fetchOne",
  async (carId) => {
    const response = await axiosInstance.get(`/cars/${carId}`);
    return response.data;
  }
);
