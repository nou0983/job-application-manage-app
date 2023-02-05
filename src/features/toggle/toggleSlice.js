import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isSidebarOpen: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState: INITIAL_STATE,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = toggleSlice.actions;

export default toggleSlice.reducer;
