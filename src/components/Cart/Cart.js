import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";

const Cart = ({
  closeCartHandler,
  requestOrderHandler,
}) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Sushi",
          description: "Finest fish and veggies",
          price: 22.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal {...{ closeCartHandler }}>
      {cartItems}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>36.42</div>
      </div>

      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={closeCartHandler}
        >
          Close
        </button>
        <button
          className={classes.button}
          onClick={requestOrderHandler}
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
