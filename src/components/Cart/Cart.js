import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = ({
  closeCartHandler,
  requestOrderHandler,
}) => {
  const cartCtx = useContext(CartContext);

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
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

  return (
    <Modal {...{ closeCartHandler }}>
      {cartItems}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>{`$${cartCtx.totalAmount.toFixed(2)}`}</div>
      </div>

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
    </Modal>
  );
};

export default Cart;
