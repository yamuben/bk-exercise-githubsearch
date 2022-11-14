import { userActions } from "./index";
import { getUsersService } from "./services";
import axios from "axios";

export const getAllUsersAction =
  (usernameSearch: any, page?: number) => async (dispatch: any) => {
    dispatch(userActions.setIsFetching(true));
    try {
      const res = await getUsersService(usernameSearch, page);
      if (res?.status === 200) {
        dispatch(userActions.setUsers(res.data));
      }
      dispatch(userActions.setIsFetching(false));
    } catch (error) {
      console.log("Error: " + error);
      dispatch(userActions.setUsers({}));
      dispatch(userActions.setIsFetching(false));
    }
  };

export const getUserProfile =
  (profileUrl: any, reposUrl: any, page?: any) => async (dispatch: any) => {
    dispatch(userActions.setIsFetchingProfile(true));
    try {
      const profile = await axios.get(profileUrl);
      const repositories = await axios.get(
        `${reposUrl}?per_page=5&page=${page || 1}`
      );
      dispatch(
        userActions.setSelectedUser({
          profile: profile.data,
          repositories: repositories.data,
        })
      );
      dispatch(userActions.setIsFetchingProfile(false));
    } catch (err) {
      console.log("Error: " + err);
    }
  };
