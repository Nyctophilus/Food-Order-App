import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  const requestOrderHandler = () => {
    console.log(`ordering!...`);
  };

  return (
    <>
      <Header {...{ openCartHandler }} />

      <main>
        <Meals />

        {showCart && (
          <Cart
            {...{ closeCartHandler, requestOrderHandler }}
          />
        )}
      </main>
    </>
  );
};

export default App;
