import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({ openCartHandler }) => {
  const [isBtnMoving, setIsBtnMoving] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce(
    (total, curr) => total + curr.amount,
    0
  );

  useEffect(() => {
    if (!cartCtx.items.length) return;

    setIsBtnMoving(true);

    const timeout = setTimeout(
      () => setIsBtnMoving(false),
      300
    );

    return () => clearTimeout(timeout);
  }, [cartCtx.items]);

  return (
    <button
      className={`${classes.button} ${
        isBtnMoving ? classes.bump : ""
      }`}
      onClick={openCartHandler}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>your cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
