// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getTransactions = createAsyncThunk(
  "sales/getTransactions",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/getTransactions`);
      return response.data;
    } catch (error) {
      throw Error(error.message || "Failed to fetch transactions");
    }
  }
);

export const getBrowserStats = createAsyncThunk(
  "sales/BrowserStats",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/getBrowserStats`);
      return response.data;
    } catch (error) {
      throw Error(error.message || "Failed to fetch browserStats");
    }
  }
);

export const getSales = createAsyncThunk("sales/getSales", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/getSales`);
    return response.data;
  } catch (error) {
    throw Error(error.message || "Failed to fetch browserStats");
  }
});

export const salesGrowthSlice = createSlice({
  name: "salesGrowth",
  initialState: {
    transactions: [],
    browserStats: [],
    sales: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload.body;
    });
    builder.addCase(getBrowserStats.fulfilled, (state, action) => {
      state.browserStats = action.payload.body;
    });
    builder.addCase(getSales.fulfilled, (state, action) => {
      state.sales = action.payload.body;
    });
  },
});

export default salesGrowthSlice.reducer;
