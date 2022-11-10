import { createSlice } from "@reduxjs/toolkit";
import { truncate } from "fs/promises";

const userSlice = createSlice({
  name: "gitUsers",
  initialState: {
    users: null,
    count: null,
    selectedUser: null,
    isFetching: false,
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload?.items;
      state.count = action.payload?.total_count;
    },
    setSelectedUser(state, action) {
      state.selectedUser = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
