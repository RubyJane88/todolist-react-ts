import React from "react";
import ButtonAppBar from "./shared/appbar-todo";
import { CardContent, Container } from "@material-ui/core";
import CheckboxTodo from "./shared/checkbox-todo";

const TodoList = () => {
  return (
    <div>
      <div>
        <ButtonAppBar />
      </div>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "20vh",
          width: "75%",
        }}
      >
        <h1> TODO </h1>
        <p> Your Goto Todo List</p>
      </CardContent>

      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          flexBasis: "firstItem 20%, secondItem 40%",
          justifyContent: "space-evenly",
          height: "20vh",
          width: "60%",
        }}
      >
        <CardContent style={{ display: "flex", flexDirection: "column" }}>
          <h2>Lists</h2>

          <div>Shopping </div>
        </CardContent>

        <CardContent style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <h2> Shopping</h2>
          </div>
          <div>
            <CheckboxTodo />
            <CheckboxTodo />
            <CheckboxTodo />
            <CheckboxTodo />
            <CheckboxTodo />
          </div>
        </CardContent>
      </Container>
    </div>
  );
};

export default TodoList;
