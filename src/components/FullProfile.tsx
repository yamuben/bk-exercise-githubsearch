import React from "react";
import {
  Avatar,
  Paper,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemAvatar,
  Divider,
  ListItemText,Pagination,
  Chip,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import styles from "./index.module.scss";
import data from "../assets/user.json";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import repoData from "../assets/repo.json";
import AssessmentIcon from "@mui/icons-material/Assessment";

const arr = [1,2,3];
const FullProfileComponent = (props: any) => {
  return (
    <Paper className={`${styles.fullProfileCard} ${styles.centerContainer}`}>
      <Paper elevation={0} sx={{ width: "35%" }}>
        <Avatar src={data.avatar_url} sx={{ width: 150, height: 150 }}></Avatar>

        <Typography variant="h6" gutterBottom>
          {data?.name}
        </Typography>
        {data?.login && (
          <a href={data.html_url} target="_blank">
            <Typography variant="subtitle1" gutterBottom>
              {data.login}
            </Typography>
          </a>
        )}
        {data?.email && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
          >
            <PeopleAltIcon fontSize="small" color="disabled" />

            <Typography variant="subtitle2" gutterBottom>
              {data.followers}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Followers {" ~ "}
            </Typography>
            <Typography variant="subtitle2" display="block" gutterBottom>
              {data.following}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Following
            </Typography>
          </Stack>
        )}
        {data?.email && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="left"
            spacing={1}
          >
            <MarkunreadIcon fontSize="small" color="warning" />

            <Typography variant="caption" display="block" gutterBottom>
              {data.email}
            </Typography>
          </Stack>
        )}
        {data?.twitter_username && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="left"
            spacing={1}
          >
            <TwitterIcon fontSize="small" color="primary" />

            <Typography variant="caption" display="block" gutterBottom>
              @{data.twitter_username}
            </Typography>
          </Stack>
        )}
        {data?.location && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="left"
            spacing={1}
          >
            <LocationOnIcon fontSize="small" color="error" />

            <Typography variant="caption" display="block" gutterBottom>
              {data.location}
            </Typography>
          </Stack>
        )}
        {data?.bio && (
          <Typography variant="body2" gutterBottom>
            {data?.bio}
          </Typography>
        )}
      </Paper>
      <Paper elevation={1} sx={{ width: "55%" }}>
        <Divider light variant="fullWidth">
          Repositories {data.public_repos}
        </Divider>

        <List sx={{ width: "100%" }} component="nav">
          {arr?.map((a) => (
            <ListItem>
              <ListItemText
                primary={
                  <Stack direction="column" spacing={0}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="flex-start"
                      spacing={1}
                    >
                      <Typography variant="h6" display="block" gutterBottom>
                        {repoData.name}{" "}
                      </Typography>
                      <Chip
                        size="small"
                        label={repoData.visibility}
                        variant="outlined"
                      />
                    </Stack>
                    <a href={repoData.html_url} target="_blank">
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {repoData.html_url}
                      </Typography>
                    </a>
                  </Stack>
                }
                secondary={
                  <Stack>
                    <Typography variant="caption" display="block" gutterBottom>
                      {repoData.description}
                    </Typography>

                    <Divider />
                  </Stack>
                }
              />
              <Divider />
            </ListItem>
          ))}
        </List>

        <Paper elevation={3}  className={styles.centerContainer} sx={{ minWidth: "50%" }}>
              <Pagination
                onChange={()=>{}}
                count={Math.ceil(arr.length / 5)}
                color="primary"
                sx={{ color: "white" }}
                page={5}
              />
            </Paper>
      </Paper>
    </Paper>
  );
};

export default FullProfileComponent;
