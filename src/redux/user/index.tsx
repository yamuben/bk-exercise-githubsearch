import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "gitUsers",
  initialState: {
    users: null,
    count: null,
    page: null,
    search: null,
    selectedUser: null,
    isFetching: false,
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload?.items;
      state.count = action.payload?.total_count;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setSearch(state, action) {
      state.page = action.payload;
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
