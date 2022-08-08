import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";

import MealItem from "../MealItem/MealItem";
import Card from "../../UI/Card/Card";
import Loading from "../../UI/Loading/Loading";

const url =
  "https://react-http-d480f-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isHttpError, setIsHttpError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);

        if (!res.ok)
          throw new Error("Something Went Wrong!");

        const meals = await res.json();

        let transMeals = [];

        for (const key in meals) {
          transMeals.push({
            id: key,
            name: meals[key].name,
            description: meals[key].description,
            price: meals[key].price,
          });

          setIsLoading(false);
        }

        setMeals(transMeals);
      } catch (error) {
        setIsLoading(false);
        setIsHttpError(error.message);
      }
    })();
  }, []);

  let mealsList = meals.map((meal) => (
    <MealItem key={meal.id} {...meal} />
  ));

  if (isLoading) mealsList = <Loading />;

  if (isHttpError)
    mealsList = (
      <p
        style={{
          textAlign: "center",
          color: "red",
          fontWeight: "bold",
        }}
      >
        Something Went Wrong! '{isHttpError}'...
      </p>
    );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
