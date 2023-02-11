import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getDataFromLocalStorage } from "../../utils/localStorage";
import { addJobThunk, deleteJobThunk, editJobThunk } from "./jobThunk";

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

export const addJob = createAsyncThunk("job/addJob", addJobThunk);
export const deleteJob = createAsyncThunk("job/deleteJob", deleteJobThunk);
export const editJob = createAsyncThunk("job/editJob", editJobThunk);

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
    toggleEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
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
      })
      .addCase(deleteJob.fulfilled, (state) => {
        toast.success("Job deleted successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
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
      })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state) => {
        toast.success("Job edited successfully", {
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
      .addCase(editJob.rejected, (state, { payload }) => {
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

export const { clearValues, updateValue, toggleEditJob } = jobSlice.actions;

export default jobSlice.reducer;
