import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import toggleReducer from "../features/toggle/toggleSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    toggle: toggleReducer,
  },
});
