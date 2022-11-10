import { userActions } from "./index";
import { getUsersService } from "./services";

export const getAllUsersAction = (data:any) => async (dispatch:any) => {
    dispatch(userActions.setIsFetching(true));
    try {
        const res = await getUsersService(data);
        if(res?.status===200){
            dispatch(userActions.setUsers(res.data));
        }
        dispatch(userActions.setIsFetching(false));
    } catch (error) {
        console.log("Error: " + error)
    }
};
