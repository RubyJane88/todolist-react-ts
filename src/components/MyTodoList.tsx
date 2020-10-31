import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Container } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import DialogBox from "./shared/dialogbox-todo";
import ListOptionsTodo from "./shared/list-options-todo";
import { getMyListTodo } from "./axios/mylist-axios";

const MyTodoList = () => {
  const classes = useStyles();

  const [tracker, setTracker] = useState("0");

  const [myList, setMyList] = useState([]);

  const [myGroupList, setMyGroupList] = useState([
    {
      id: "u7ruyjf",
      name: "Shopping",
      numberOfActiveLists: 5,
    },
    {
      id: "euthdh",
      name: "Travelling",
      numberOfActiveLists: 2,
    },
  ]);

  useEffect(() => {
    getMyListTodo().then();
  }, []);

  return (
    <Container>
      <AppBar position="static" color={"transparent"} elevation={0}>
        <Toolbar style={{ paddingLeft: "0", marginLeft: "0" }}>
          <Typography variant="h6" className={classes.title}>
            Clean Architecture
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Counter</Button>
          <Button color="inherit">Fetch Data</Button>
          <Button color="inherit">Todo</Button>
          <Button color="inherit">API</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <div>
        <h1>Todo</h1>
        <p>This is a complex todo list component</p>
      </div>

      <div className={classes.fullWidth}>
        <div className={classes.quarterWidth}>
          <div className={classes.listContainer}>
            <div>
              <h1>Lists</h1>
            </div>
            <div>
              <h1>
                <DialogBox />
              </h1>
            </div>
          </div>
          <div>
            {myGroupList.map((l) => (
              <div
                onClick={() => {
                  setTracker(l.id);
                }}
                style={{
                  cursor: "pointer",
                  color: `${tracker == l.id ? "#FFF" : "#222"}`,
                  backgroundColor: `${tracker == l.id ? "dodgerblue" : "#FFF"}`,
                }}
                className={classes.switchTracker}
              >
                <div>
                  <h3>{l.name}</h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className={classes.numberBox}>
                    {l.numberOfActiveLists}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: "67%" }}>
          <div className={classes.threeFourthWidth}>
            <h1>Shopping</h1>
            <h1>
              <ListOptionsTodo />
            </h1>
          </div>

          <List style={{ width: "100%", backgroundColor: "pink" }}>
            {myList.map((m) => (
              <div
                key={m.id}
                style={{ width: "100%" }}
                className={classes.threeFourthWidth}
              >
                <ListItem>
                  <ListItemIcon>
                    <Checkbox edge="start" checked={m.check} tabIndex={-1} />
                  </ListItemIcon>

                  <ListItemText primary={`${m.title}  ${m.id}`} />
                </ListItem>

                <div>
                  <h1>
                    <ListOptionsTodo />
                  </h1>
                </div>
              </div>
            ))}
          </List>
        </div>
      </div>
    </Container>
  );
};

export default MyTodoList;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    fullWidth: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
    },
    threeFourthWidth: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    quarterWidth: {
      width: "33%",
      marginRight: "4rem",
      backgroundColor: "#FFF",
    },

    listContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#FFF",
    },
    switchTracker: {
      padding: "0 1rem",
      borderRadius: "0.2rem",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    numberBox: {
      backgroundColor: "#FFF",
      borderRadius: "0.2rem",
      color: "#222",
      padding: "0.1rem 0.3rem",
    },
  })
);
