import React from "react";
import mealsHeaderImg from "../../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = () => (
  <>
    <header className={classes.header}>
      <h1>FoodOrder App</h1>
      <HeaderCartButton />
    </header>

    <div className={classes.mainImage}>
      <img src={mealsHeaderImg} alt="meals header" />
    </div>
  </>
);

export default Header;
