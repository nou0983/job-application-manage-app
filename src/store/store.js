import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import toggleReducer from "../features/toggle/toggleSlice";
import jobReducer from "../features/job/jobSlice";
import allJobsReducer from "../features/allJobs/allJobsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    toggle: toggleReducer,
    job: jobReducer,
    allJobs: allJobsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
