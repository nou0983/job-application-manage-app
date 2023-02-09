import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const INITIAL_STATE = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

export const fetchAllJobs = createAsyncThunk(
  "allJobs/fetchAllJobs",
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get("/jobs", {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState: INITIAL_STATE,
  reducers: {
    updateFilters: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllJobs.fulfilled, (state, { payload }) => {
        state.jobs = payload.jobs;
        state.isLoading = false;
      })
      .addCase(fetchAllJobs.rejected, (state, { payload }) => {
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

export const { updateFilters, clearFilters, showLoading, hideLoading } =
  allJobsSlice.actions;

export default allJobsSlice.reducer;
