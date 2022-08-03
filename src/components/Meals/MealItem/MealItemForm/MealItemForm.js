import React, { useRef, useState } from "react";
import Input from "../../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id, onAddToCart }) => {
  const [validAmount, setValidAmount] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setValidAmount(false);
      return;
    }

    onAddToCart(enteredAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
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
      <button type="submit">+ add</button>

      {!validAmount && (
        <p>Please, enter a valid amount (1-5).</p>
      )}
    </form>
  );
};

export default MealItemForm;
