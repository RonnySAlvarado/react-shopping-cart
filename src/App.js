import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

import { ProductContext } from "./contexts/ProductContext.js";
import { CartContext } from "./contexts/CartContext.js";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={cart}>
          <Navigation />
          {/* Routes */}
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
