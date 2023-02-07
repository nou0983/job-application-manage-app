import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getDataFromLocalStorage } from "../../utils/localStorage";

const INITIAL_STATE = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

export const addJob = createAsyncThunk(
  "job/addJob",
  async (newJob, thunkAPI) => {
    try {
      const response = customFetch.post("/jobs", newJob, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(clearValues());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState: INITIAL_STATE,
  reducers: {
    clearValues: (state) => {
      return {
        ...INITIAL_STATE,
        jobLocation: getDataFromLocalStorage("user").location,
      };
    },
    updateValue: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addJob.fulfilled, (state) => {
        toast.success("Job added successfully", {
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
      .addCase(addJob.rejected, (state, { payload }) => {
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

export const { clearValues, updateValue } = jobSlice.actions;

export default jobSlice.reducer;
