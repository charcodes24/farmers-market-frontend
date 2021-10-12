import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getVendors = createAsyncThunk(
    "vendors/getVendors",
    async () => {
        const response = await fetch("/vendors");
        const data = await response.json()
        return data;
  });

export const showVendor = createAsyncThunk(
  "vendors/showVendor",
  async (id) => {
    const response = await fetch(`/vendors/${id}`)
    const data = await response.json()
    return data 
  }
  )

const vendorSlice = createSlice({
  name: "vendors",
  initialState: {
    vendorList: [],
    vendor: {},
    errors: [],
    isLoading: true,
    isLoadingVendor: true,
    hasError: false,
  },
  reducers: {
    clearVendor(state) {
      state.vendor = {};
    }
  },
  extraReducers: {
    [getVendors.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getVendors.fulfilled]: (state, { payload }) => {
      state.vendorList = payload;
      state.hasError = false;
    },
    [getVendors.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [showVendor.pending]: (state) => {
      state.isLoading = true;
      state.isLoadingVendor = true;
      state.hasError = false;
    },
    [showVendor.fulfilled]: (state, { payload }) => {
      state.vendor = payload;
      state.isLoading = false;
      state.isLoadingVendor = false;
      state.hasError = false;
    },
    [showVendor.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { clearVendor } = vendorSlice.actions
export default vendorSlice.reducer