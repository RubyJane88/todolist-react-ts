import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

const ListCounter = () => {
  const [number, setNumber] = useState("0");

  useEffect(() => {}, []);

  return (
    <div>
      <Button
        onClick={() => {
          setNumber(number);
        }}
      >
        8
      </Button>
    </div>
  );
};

export default ListCounter;
