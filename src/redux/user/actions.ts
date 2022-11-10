import { userActions } from "./index";
import { loginService } from "./services";

export const loginAction = (data:any) => async (dispatch:any) => {
    dispatch(userActions.setIsFetching(true));
    try {
        const res = await loginService(data);
        if(res?.status===200){
            dispatch(userActions.setIsFetching(false));
            dispatch(userActions.login(res.data));
        }
        dispatch(userActions.setIsFetching(false));
    } catch (error) {
        console.log("Error: " + error)
    }
};
