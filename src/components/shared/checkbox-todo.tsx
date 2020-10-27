import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const CheckboxTodo = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <FormControlLabel
        control={<Checkbox name="checkedC" />}
        label="Add Item"
      />
    </div>
  );
};

export default CheckboxTodo;

// const GreenCheckbox = withStyles({
//     root: {
//         color: green[400],
//         '&$checked': {
//             color: green[600],
//         },
//     },
//     checked: {},
// })((props: CheckboxProps) => <Checkbox color="default" {...props} />);
