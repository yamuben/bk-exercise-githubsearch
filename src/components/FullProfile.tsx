import React from "react";
import { Avatar, Paper, Typography } from "@mui/material";
import styles from "./index.module.scss";
import data from "../assets/user.json";

const FullProfileComponent = (props: any) => {
  return (
    <Paper className={`${styles.fullProfileCard} ${styles.centerContainer}`}>
      <Paper elevation={0} sx={{ width: "80%" }}>
        <Avatar src={data.avatar_url} sx={{ width: 150, height: 150 }}></Avatar>

        <Typography variant="h6" gutterBottom>
          {data?.name}
        </Typography>
        {data?.login && (
          <Typography variant="subtitle1" gutterBottom>
            {data.login}
          </Typography>
        )}
        <Typography variant="body2" gutterBottom>
          {data?.bio}
        </Typography>
      </Paper>
    </Paper>
  );
};

export default FullProfileComponent;
