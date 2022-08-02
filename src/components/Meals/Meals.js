import React from "react";
import AvailableMeals from "./AvailabeMeals/AvailableMeals";
import MealsSummary from "./MealsSummary/MealsSummary";

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
