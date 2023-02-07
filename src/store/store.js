import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import toggleReducer from "../features/toggle/toggleSlice";
import jobReducer from "../features/job/jobSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    toggle: toggleReducer,
    job: jobReducer,
  },
});
