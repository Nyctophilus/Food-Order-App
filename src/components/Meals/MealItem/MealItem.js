import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>
          {description}
        </div>
        <div className={classes.price}>{`$${price.toFixed(
          2
        )}`}</div>
      </div>

      <div>
        <MealItemForm
          id={id}
          onAddToCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;
