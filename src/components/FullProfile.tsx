import React, { useEffect,useState } from "react";
import {
  Avatar,
  Paper,
  Typography,
  Stack,
  List,
  ListItem,
  Skeleton,
  Divider,
  ListItemText,
  Pagination,
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
import { getUserProfile } from "../redux/user/actions";
import { useSelector, useDispatch } from "react-redux";
const arr = [1, 2, 3];
const loading = false;
const FullProfileComponent = (props: any) => {
  const { profile, repositories } = useSelector(
    (state: any) => state.user?.selectedUser
  );
  const { isFetchingProfile } = useSelector((state: any) => state.user);
  const [selectedPage, setSelectedPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    getUserProfile(props.user.url, props.user.repos_url,selectedPage)(dispatch);
  }, [selectedPage]);
  return (
    <>
      <Paper className={`${styles.fullProfileCard} ${styles.centerContainer}`}>
        {isFetchingProfile && (
          <Stack direction="row" spacing={1}>
            <Stack spacing={1}>
              <Skeleton variant="circular" width={100} height={100} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="rounded" width={250} height={60} />
              <Skeleton variant="rounded" width={250} height={60} />
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="rounded" width={400} height={60} />
              <Skeleton variant="rounded" width={400} height={60} />
              <Skeleton variant="rounded" width={400} height={60} />
              <Skeleton variant="rounded" width={400} height={60} />
            </Stack>
          </Stack>
        )}
        {!isFetchingProfile && (
          <Paper elevation={0} sx={{ width: "35%" }}>
            <Avatar
              src={profile.avatar_url}
              sx={{ width: 150, height: 150 }}
            ></Avatar>

            <Typography variant="h6" gutterBottom>
              {profile?.name}
            </Typography>
            {profile?.login && (
              <a href={profile.html_url} target="_blank">
                <Typography variant="subtitle1" gutterBottom>
                  {profile.login}
                </Typography>
              </a>
            )}
            {profile?.followers && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
              >
                <PeopleAltIcon fontSize="small" color="disabled" />

                <Typography variant="subtitle2" gutterBottom>
                  {profile.followers}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Followers {" ~ "}
                </Typography>
                <Typography variant="subtitle2" display="block" gutterBottom>
                  {profile.following}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Following
                </Typography>
              </Stack>
            )}
            {profile?.email && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="left"
                spacing={1}
              >
                <MarkunreadIcon fontSize="small" color="warning" />

                <Typography variant="caption" display="block" gutterBottom>
                  {profile.email}
                </Typography>
              </Stack>
            )}
            {profile?.twitter_username && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="left"
                spacing={1}
              >
                <TwitterIcon fontSize="small" color="primary" />

                <Typography variant="caption" display="block" gutterBottom>
                  @{profile.twitter_username}
                </Typography>
              </Stack>
            )}
            {profile?.location && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="left"
                spacing={1}
              >
                <LocationOnIcon fontSize="small" color="error" />

                <Typography variant="caption" display="block" gutterBottom>
                  {profile.location}
                </Typography>
              </Stack>
            )}
            {profile?.bio && (
              <Typography variant="body2" gutterBottom>
                {profile?.bio}
              </Typography>
            )}
          </Paper>
        )}
        {!isFetchingProfile && (
          <Paper elevation={1} sx={{ width: "55%" }}>
            <Divider light variant="fullWidth">
              Repositories {profile.public_repos}
            </Divider>

            <List sx={{ width: "100%" }} component="nav">
              {repositories?.map((repository: any,id:any) => (
                <ListItem key={id}>
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
                            {repository.name}{" "}
                          </Typography>
                          <Chip
                            size="small"
                            label={repository.visibility}
                            variant="outlined"
                          />
                        </Stack>
                        <a href={repository.html_url} target="_blank">
                          <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                          >
                            {repository.html_url}
                          </Typography>
                        </a>
                      </Stack>
                    }
                    secondary={
                      <Stack>
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          {repository.description}
                        </Typography>

                        <Divider />
                      </Stack>
                    }
                  />
                  <Divider />
                </ListItem>
              ))}
            </List>

            <Paper
              elevation={3}
              className={styles.centerContainer}
              sx={{ minWidth: "50%" ,padding:"1rem"}}
            >
              <Pagination
                onChange={(event: any, value: number) => {setSelectedPage(value)}}
                count={Math.ceil(profile.public_repos / 5)}
                color="primary"
                sx={{ color: "white" }}
                page={selectedPage}
              />
            </Paper>
          </Paper>
        )}
      </Paper>
    </>
  );
};

export default FullProfileComponent;
