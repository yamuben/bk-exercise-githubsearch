import React, { useState } from "react";
import styles from "./index.module.scss";
import logo from "../assets/logo.png";
import { Button, Stack, Box, Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/user";

const HeaderComponent = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  return (
    <div className={styles.headerContainer}>
      <div
        className={`${styles.childContainer} ${styles.centerContainer}`}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <div
          style={{ display: "flex", height: "2.5rem", alignItems: "center" }}
        >
          <img src={logo} /> <h3> Github User Search</h3>
        </div>

        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            minWidth: "20rem",
            // background: "red",
          }}
        >
          <Tabs
            value={tab}
            onChange={handleTabChange}
            aria-label="nav tabs example"
            variant="fullWidth"
            indicatorColor="primary"
            textColor="secondary"
          >
            <Tab
              label="Home"
              onClick={() => {
                dispatch(
                  userActions.resetState({
                    users: null,
                    count: null,
                    page: null,
                    search: null,
                    selectedUser: { profile: {}, repositories: [] },
                    isFetching: false,
                    isFetchingProfile: false,
                  })
                );
                navigate("/");
              }}
            />
            <Tab
              label="History"
              onClick={() => {
                navigate("/history");
              }}
            />
          </Tabs>
        </Box>
      </div>
    </div>
  );
};

export default HeaderComponent;
