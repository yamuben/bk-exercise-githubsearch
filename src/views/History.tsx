import React, { useState, useEffect } from "react";
import {
  Card,
  Paper,
  List,
  ListItem,
  IconButton,
  ListItemText,
  Divider,
} from "@mui/material";
import styles from "./index.module.scss";
import store from "store";
import DeleteIcon from "@mui/icons-material/Delete";
import {useNavigate} from "react-router-dom"
const HistoryView = () => {
  const [history, setHitory] = useState(store.get("history") || []);
  const navigate = useNavigate();
  useEffect(() => {
    store.set("history", history);
  }, [history]);
  const handleRemoveItem = (e: any) => {
    // const done = e.target.getAttribute("name");
    setHitory(history.filter((item: any) => item.done !== e));
  };

  return (
    <>
      <Card
        className={styles.centerItems}
        sx={{ minHeight: "5vh", minWidth: "80%" }}
      >
        <h1> Search History</h1>
      </Card>
      <Card className={`${styles.historyContainer} ${styles.centerItems}`}>
        {history.map((hist: any, index: any) => (
          <Paper sx={{ minWidth: "50%" }}>
            {" "}
            <List dense={true}>
              <>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleRemoveItem(hist.done)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                  sx={{cursor:"pointer"}}
                    primary={hist?.searchText}
                    secondary={new Date(hist?.done).toString()}
                    onClick={() =>navigate(`/search/${hist?.searchText}`)}
                  />
                </ListItem>
                <Divider />
              </>
            </List>
          </Paper>
        ))}
      </Card>
    </>
  );
};
export default HistoryView;
