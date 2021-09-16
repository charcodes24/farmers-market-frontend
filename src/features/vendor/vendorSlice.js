import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getVendors = createAsyncThunk(
    "vendors/getVendors",
    async () => {
        const response = await fetch("/vendors");
        const data = await response.json()
        return data;
});

const vendorSlice = createSlice({
  name: "vendors",
  initialState: {
    vendorList: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [getVendors.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getVendors.fulfilled]: (state, { payload }) => {
      state.vendorList = payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [getVendors.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { } = vendorSlice.actions
export default vendorSlice.reducer