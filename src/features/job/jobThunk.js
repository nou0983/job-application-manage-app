import customFetch from "../../utils/axios";
import {
  hideLoading,
  showLoading,
  fetchAllJobs,
} from "../allJobs/allJobsSlice";
import { clearValues } from "./jobSlice";

export const addJobThunk = async (newJob, thunkAPI) => {
  try {
    const response = await customFetch.post("/jobs", newJob, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteJobThunk = async (id, thunkAPI) => {
  try {
    thunkAPI.dispatch(showLoading());
    const response = await customFetch.delete(`/jobs/${id}`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(fetchAllJobs());
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editJobThunk = async ({ id, job }, thunkAPI) => {
  try {
    const response = await customFetch.patch(`/jobs/${id}`, job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());
    thunkAPI.dispatch(fetchAllJobs());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
