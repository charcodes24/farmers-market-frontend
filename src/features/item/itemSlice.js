import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getItems = createAsyncThunk(
    "item/getItems",
    async (id) => {
      const response = await fetch(`/vendors/${id}/items`)
      const data = await response.json()
      return data
    }
)

export const addItem = createAsyncThunk("item/addItem", async (form) => {
  const response = await fetch("/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
        name: form.name,
        image_url: form.image_url,
        price: form.price,
        vendor_id: form.vendor_id,
    }),
  });
  const data = await response.json();
  return data;
});

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
    item: {},
    vendor: {},
    errors: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [getItems.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getItems.fulfilled]: (state, { payload }) => {
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
    [addItem.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [addItem.fulfilled]: (state, { payload }) => {
      if (payload.errors) {
        state.errors = payload.errors;
        state.hasError = true;
      } else {
        state.items.push(payload)
        state.isLoading = false;
        state.hasError = false;
      }
    },
    [addItem.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default itemSlice.reducer