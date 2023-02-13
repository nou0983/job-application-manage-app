import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllJobsThunk, showStatsThunk } from "./allJobsThunk";
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
  fetchAllJobsThunk
);

export const showStats = createAsyncThunk("allJobs/showStats", showStatsThunk);

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState: INITIAL_STATE,
  reducers: {
    updateFilters: (state, { payload: { name, value } }) => {
      state.page = 1;
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
    updateCurrentPage: (state, { payload }) => {
      state.page = payload;
    },
    clearAllJobs: (state) => {
      return { ...INITIAL_STATE };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllJobs.fulfilled, (state, { payload }) => {
        state.jobs = payload.jobs;
        state.numOfPages = payload.numOfPages;
        state.totalJobs = payload.totalJobs;
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
      })
      .addCase(showStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        showStats.fulfilled,
        (state, { payload: { defaultStats, monthlyApplications } }) => {
          state.stats = defaultStats;
          state.monthlyApplications = monthlyApplications;
          state.isLoading = false;
        }
      )
      .addCase(showStats.rejected, (state, { payload }) => {
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

export const {
  updateFilters,
  clearFilters,
  showLoading,
  hideLoading,
  updateCurrentPage,
  clearAllJobs,
} = allJobsSlice.actions;

export default allJobsSlice.reducer;
