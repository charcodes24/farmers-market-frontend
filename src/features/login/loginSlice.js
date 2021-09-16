import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (form) => {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    });
    const data = await response.json();
    console.log("USER LOGIN SLICE", data);
    return data;
  }
);

export const userLogout = createAsyncThunk(
    "login, userLogout",
    async () => {
        const response = await fetch(`/logout`, {
            method: "DELETE",
  });
  console.log(response);
});



const loginSlice = createSlice({
  name: "login",
  initialState: {},
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      if (payload.errors) {
        state.errors = payload.errors;
        state.customerLoggedIn = false;
        state.vendorLoggedIn = false;
        state.hasError = true;
        state.isLoading = false;
      } else if (payload.is_vendor === true) {
        state.vendor = payload;
        console.log("PAYLOAD", payload);
        state.vendorLoggedIn = true;
        state.customerLoggedIn = false;
        state.hasError = false;
        state.isLoading = false;
        state.errors = [];
      } else {
        state.customer = payload;
        state.vendorLoggedIn = false;
        state.customerLoggedIn = true;
        state.hasError = false;
        state.isLoading = false;
        state.errors = [];
      }
    },
    [userLogin.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [userLogout.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [userLogout.fulfilled]: (state) => {
      state.customer = {};
      state.vendor = {};
      state.customerLoggedIn = false;
      state.vendorLoggedIn = false;
      state.isLoading = false;
      state.hasError = false;
    },
    [userLogout.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { } = loginSlice.actions
export default loginSlice.reducer