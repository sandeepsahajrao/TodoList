import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice = createSlice({
  name: "toggleSlice",
  initialState: false,
  reducers: {
    toggleButton: (state,action) => {
        return action.payload === true;
    },
  },
});

export const { toggleButton } = ToggleSlice.actions;

export default ToggleSlice.reducer;
