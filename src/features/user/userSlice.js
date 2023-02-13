import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDataToLocalStorage,
  removeDataFromLocalStorage,
  getDataFromLocalStorage,
} from "../../utils/localStorage";
import {
  clearStoreThunk,
  registerUserThunk,
  loginUserThunk,
  updateUserThunk,
} from "./userSliceThunk";
import { toast } from "react-toastify";

const INITIAL_STATE = {
  isLoading: false,
  user: getDataFromLocalStorage("user"),
};

export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  registerUserThunk
);

export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);

export const updateUser = createAsyncThunk("user/updateUser", updateUserThunk);

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      removeDataFromLocalStorage("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        toast.success(`Welcome ${payload.user.name}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        state.user = payload.user;
        addDataToLocalStorage("user", payload.user);
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        toast.error(payload, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        state.isLoading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        toast.success(`Welcome back ${payload.user.name}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        state.user = payload.user;
        addDataToLocalStorage("user", payload.user);
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        toast.error(payload, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        state.isLoading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        toast.success("Updated successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        state.user = payload.user;
        addDataToLocalStorage("user", payload.user);
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        toast.error(payload, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        state.isLoading = false;
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
