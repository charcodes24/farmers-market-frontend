import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getItems = createAsyncThunk(
    "item/getItems",
    async (id) => {
      const response = await fetch(`/vendors/${id}/items`)
      const data = await response.json()
      return data
    }
)

const itemSlice = createSlice({
    name: "item",
    initialState: {
        items: [],
        item: {},
        vendor: {},
        errors: [],
        isLoading: false,
        hasError: false
    },
  reducers: {
    },
    extraReducers: {
    [getItems.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
      [getItems.fulfilled]: (state, { payload }) => {
      debugger
      if (payload[0]) {
        state.items = payload;
        state.vendor = payload[0].vendor;
        state.isLoading = false;
        state.hasError = false;
      } else {
        state.items = payload;
        state.isLoading = false;
        state.hasError = false;
      }
    },
    [getItems.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    }
})

export default itemSlice.reducer