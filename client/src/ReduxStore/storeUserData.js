import { createSlice } from "@reduxjs/toolkit";

const UserDataName = createSlice({
  name: "SetDataName",
  initialState: { name: "Name" },
  reducers: {
    SetNames: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { SetNames } = UserDataName.actions;

export default UserDataName.reducer;
