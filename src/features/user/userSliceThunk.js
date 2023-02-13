import { logoutUser } from "./userSlice";
import { clearValues } from "../job/jobSlice";
import { clearAllJobs } from "../allJobs/allJobsSlice";
import customFetch from "../../utils/axios";

export const clearStoreThunk = async (_, thunkAPI) => {
  try {
    thunkAPI.dispatch(clearAllJobs());
    thunkAPI.dispatch(clearValues());
    thunkAPI.dispatch(logoutUser());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};

export const registerUserThunk = async (user, thunkAPI) => {
  try {
    const response = await customFetch.post("/auth/register", user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const response = await customFetch.post("/auth/login", user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (user, thunkAPI) => {
  try {
    const response = await customFetch.patch("/auth/updateUser", user, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
