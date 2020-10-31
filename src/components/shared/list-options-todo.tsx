import React from "react";
import { Button } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const ListOptionsTodo = () => {
  return (
    <div>
      <Button onClick={() => alert("List Options here")}>
        <MoreHorizIcon />
      </Button>
    </div>
  );
};

export default ListOptionsTodo;
