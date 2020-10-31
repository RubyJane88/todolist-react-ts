import React from "react";
import ButtonAppBar from "./shared/appbar-todo";
import { Card, CardContent, Container } from "@material-ui/core";
import CheckboxTodo from "./shared/checkbox-todo";
import DialogSelect from "./shared/addtooltip-todo";
import ListCounter from "./shared/list-counter";
import DialogBox from "./shared/dialogbox-todo";
import CheckboxList from "./shared/checkbox-todo";
import ListOptionsTodo from "./shared/list-options-todo";

const TodoList = () => {
  return (
    <>
      <div>
        <ButtonAppBar />
      </div>

      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridColumn: "1/3",
          alignContent: "start",
          alignItems: "center",
          borderRadius: "10px",
          gridRow: "1/3",
          marginTop: "50px",
        }}
      >
        <CardContent>
          <h1> TODO </h1>
          <p> This is a complex todo list of component</p>
        </CardContent>
      </Container>

      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, auto)",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "15px",
            paddingRight: "15px",
            marginRight: "20px",
          }}
        >
          <h2>Lists</h2>
          <h2>
            <DialogBox />
          </h2>
        </CardContent>

        <Card
          style={{
            backgroundColor: "skyblue",
            display: "flex",
            flexDirection: "row",
            marginLeft: "20px",
            paddingLeft: "10px",
          }}
        >
          <h2>Shopping</h2>
        </Card>

        <CardContent>
          <h2>
            <ListOptionsTodo />
          </h2>
        </CardContent>
      </Container>

      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <Card
          style={{
            backgroundColor: "pink",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingLeft: "15px",
            paddingRight: "15px",
            marginRight: "20px",
          }}
        >
          <h3>Shopping </h3>
          <h3>
            <ListCounter />
          </h3>
        </Card>

        <Container>
          <CardContent
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "20px",
              paddingLeft: "10px",
            }}
          >
            <h2>
              <CheckboxList />
            </h2>
          </CardContent>
        </Container>
      </Container>
    </>
  );
};

export default TodoList;
