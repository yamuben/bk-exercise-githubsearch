import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "gitUsers",
  initialState: {
    users: null,
    count: null,
    page: null,
    search: null,
    selectedUser: { profile: {}, repositories: [] },
    isFetching: false,
    isFetchingProfile: false,
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
    setIsFetchingProfile(state, action) {
      state.isFetchingProfile = action.payload;
    },
    resetState(state, action) {
      state.users = action.payload.users;
      state.count = action.payload.count;
      state.selectedUser = action.payload.selectedUser;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
