import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = ({ children, closeCartHandler }) => {
  return (
    <>
      <div className={classes.modal}>
        <div className={classes.content}>{children}</div>
      </div>
      <div
        className={classes.backdrop}
        onClick={closeCartHandler}
      />
    </>
  );
};

ReactDOM.createPortal(<Modal />, document.body);

export default Modal;
