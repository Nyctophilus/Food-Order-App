import React from "react";
import Input from "../../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id }) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ add</button>
    </form>
  );
};

export default MealItemForm;
