import { userActions } from "./index";
import { getUsersService } from "./services";

export const getAllUsersAction = (usernameSearch:any,page?:number) => async (dispatch:any) => {
    dispatch(userActions.setIsFetching(true));
    try {
        const res = await getUsersService(usernameSearch,page);
        if(res?.status===200){
            dispatch(userActions.setUsers(res.data));
        }
        dispatch(userActions.setIsFetching(false));
    } catch (error) {
        console.log("Error: " + error)
        dispatch(userActions.setUsers({}));
        dispatch(userActions.setIsFetching(false));
    }
};
