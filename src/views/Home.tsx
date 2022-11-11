import React, { useState } from "react";
import SearchComponent from "../components/SearchForm";
import spinner from "../assets/spinner.gif";
import styles from "./index.module.scss";
import UserProfile from "../components/UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/user";
import { getAllUsersAction } from "../redux/user/actions";

import { Pagination, Paper } from "@mui/material";
const ViewComponent = (props: any) => {
  const dispatch = useDispatch();
  const { isFetching, users, count } = useSelector((state: any) => state.user);
  const [searchText, setSearchText] = useState();
  const handlePage = (event: any, value: number) => {
    console.log(value);
    dispatch(userActions.setPage(value));
    getAllUsersAction(searchText, value)(dispatch);
  };
  return (
    <div className={styles.centerItems}>
      <SearchComponent setSearchText={setSearchText} />
      {isFetching && <img src={spinner} />}
      {users && (
        <>
          <h2> Results: {count} </h2>
          <div className={styles.resultContainer}>
            {users.map((user: any) => (
              <UserProfile data={user} />
            ))}
          </div>
          <Paper className={styles.centerItems} sx={{ minWidth: "50%" }}>
            <Pagination
              onChange={handlePage}
              count={Math.ceil(count / 30)}
              color="primary"
              sx={{ color: "white" }}
            />
          </Paper>
        </>
      )}
    </div>
  );
};
export default ViewComponent;
