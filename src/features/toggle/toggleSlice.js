import { createSlice } from "@reduxjs/toolkit";
import {
  getDataFromLocalStorage,
  addDataToLocalStorage,
} from "../../utils/localStorage";

const INITIAL_STATE = {
  isSidebarOpen: getDataFromLocalStorage("toggle"),
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState: INITIAL_STATE,
  reducers: {
    toggleSidebar: (state) => {
      addDataToLocalStorage("toggle", !state.isSidebarOpen);
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state) => {
      addDataToLocalStorage("toggle", false);
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = toggleSlice.actions;

export default toggleSlice.reducer;
