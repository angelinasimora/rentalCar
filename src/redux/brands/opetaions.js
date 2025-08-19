import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";

export const fetchBrands = createAsyncThunk(
  "brands/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/brands");

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);