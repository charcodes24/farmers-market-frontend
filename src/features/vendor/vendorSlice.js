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
    isLoading: false,
    hasError: false,
  },
    reducers: {
        getVendor(state, id) {
            state.vendor = state.vendorList.filter(vendor => vendor.id === id)
      }
  },
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

export const { getVendor } = vendorSlice.actions
export default vendorSlice.reducer