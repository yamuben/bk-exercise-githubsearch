import React, { useState } from "react";
import SearchComponent from "../components/SearchForm";
import spinner from "../assets/spinner.gif";
import styles from "./index.module.scss";
import UserProfile from "../components/UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/user";
import { getAllUsersAction } from "../redux/user/actions";
import FullProfile from "../components/FullProfile";

import { Drawer, Pagination, Paper } from "@mui/material";
const ViewComponent = (props: any) => {
  const dispatch = useDispatch();
  const { isFetching, users, count } = useSelector((state: any) => state.user);
  const [searchText, setSearchText] = useState();
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState({});
  const [drawerVisible, setDrawerVisible] = useState(false);
  const handlePage = (event: any, value: number) => {
    console.log(value);

    setSelectedPage(value);
    dispatch(userActions.setPage(value));
    getAllUsersAction(searchText, value)(dispatch);
  };
  return (
    <>
      <Drawer
        anchor={"right"}
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      >
        <FullProfile user={selectedUser} />
      </Drawer>
      <div className={styles.centerItems}>
        <SearchComponent setSearchText={setSearchText} />
        {isFetching && <img src={spinner} />}
        {users && !isFetching && (
          <>
            <h2>
              {" "}
              <span style={{ fontWeight: "150" }}>Search:</span> {searchText}{" "}
              &nbsp;&nbsp; <span style={{ fontWeight: "150" }}>Results:</span>{" "}
              {count}{" "}
            </h2>
            <div className={styles.resultContainer}>
              {users.map((user: any) => (
                <Paper elevation={6} onClick={() => setSelectedUser(user)}>
                  <UserProfile
                    data={user}
                    setDrawerVisible={setDrawerVisible}
                  />
                </Paper>
              ))}
            </div>
            <Paper
              elevation={3}
              className={styles.centerItems}
              sx={{ minWidth: "50%" }}
            >
              <Pagination
                onChange={handlePage}
                count={Math.ceil(count / 30)}
                color="primary"
                sx={{ color: "white" }}
                page={selectedPage}
              />
            </Paper>
          </>
        )}
      </div>
    </>
  );
};
export default ViewComponent;
