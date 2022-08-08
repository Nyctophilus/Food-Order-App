import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";

const Cart = ({ closeCartHandler }) => {
  const cartCtx = useContext(CartContext);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const requestOrderHandler = () => {
    setIsCheckOut(true);
  };

  const submitDataToServer = async (userData) => {
    setIsSubmitting(true);

    await fetch(
      "https://react-http-d480f-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);

    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onAdd={onAddHandler.bind(null, item)}
          onRemove={onRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  let modalActions = (
    <div className={classes.actions}>
      <button
        className={classes["button--alt"]}
        onClick={closeCartHandler}
      >
        Close
      </button>
      {cartCtx.items.length > 0 && (
        <button
          className={classes.button}
          onClick={requestOrderHandler}
        >
          Order
        </button>
      )}
    </div>
  );

  if (isCheckOut)
    modalActions = (
      <Checkout
        onCancel={closeCartHandler}
        submitDataToServer={submitDataToServer}
      />
    );

  let modalContent = (
    <>
      {" "}
      {cartItems}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>{`$${cartCtx.totalAmount.toFixed(2)}`}</div>
      </div>
      {modalActions}
    </>
  );

  if (isSubmitting)
    modalContent = <p>Sending order data...</p>;

  if (didSubmit)
    modalContent = <p>Successfully sent the order!</p>;

  return (
    <Modal {...{ closeCartHandler }}>{modalContent}</Modal>
  );
};

export default Cart;
