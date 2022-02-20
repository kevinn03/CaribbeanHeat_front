import React, { useState, useEffect } from 'react';
import './style/style.css';

import HeaderBox from './components/HeaderBox';
// import menuApi from './services/menuAPI';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Contact from './components/Contact';
import Cart from './components/Cart';
function App() {
  const [cart, setCart] = useState([]);

  useEffect(async () => {
    const saved = localStorage.getItem('cart');
    const initialValue = JSON.parse(saved);
    initialValue ? setCart(initialValue) : setCart([]);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addMenuItem = (item, quantity) => {
    // check if item is already in cart
    const findItem = cart.find((ele) => ele.title === item.title);

    if (findItem) {
      const tempCart = cart.filter((ele) => ele.title !== findItem.title);

      let tempQuantity = Number(findItem.quantity);
      tempQuantity += Number(quantity);
      findItem.quantity = tempQuantity;
      tempCart.push(findItem);
      setCart(tempCart);
    } else {
      setCart(cart.concat({ ...item, quantity: quantity }));
    }
  };
  const updateCartItem = (item, quantity) => {
    const tempArr = cart.map((ele) => {
      if (ele.title === item.title) {
        ele.quantity = quantity;
      }
      return ele;
    });

    setCart(tempArr);
  };

  const removeCartItem = (item) => {
    const tempCart = cart.filter((ele) => ele.title !== item.title);
    setCart(tempCart);
  };

  const orderItem = () => {
    setCart([]);
  };

  return (
    <div className="app h-100 w-100">
      <Router>
        <HeaderBox cart={cart}></HeaderBox>

        <Switch>
          <Route key="menu-house" path="/menu/house">
            <Menu addItem={addMenuItem} category={'House Specials'} />
          </Route>
          <Route key="menu-soup" path="/menu/soup">
            <Menu addItem={addMenuItem} category={'Soup'} />
          </Route>
          <Route key="menu-deep" path="/menu/deep-fried">
            <Menu addItem={addMenuItem} category={'Deep Fried'} />
          </Route>
          <Route key="menu-bbq" path="/menu/bbq-roast">
            <Menu addItem={addMenuItem} category={'BBQ Roast'} />
          </Route>
          <Route key="menu-sweetsour" path="/menu/sweet-sour">
            <Menu addItem={addMenuItem} category={'Sweet & Sour'} />
          </Route>
          <Route key="menu-hotsiz" path="/menu/sizzling">
            <Menu addItem={addMenuItem} category={'Hot Sizzling Dishes'} />
          </Route>
          <Route key="menu-friedrice" path="/menu/fried-rice">
            <Menu addItem={addMenuItem} category={'Fried Rice'} />
          </Route>
          <Route key="menu-chowmein" path="/menu/chow-mein">
            <Menu addItem={addMenuItem} category={'Chow Mein'} />
          </Route>
          <Route key="menu-lomein" path="/menu/lo-mein">
            <Menu addItem={addMenuItem} category={'Lo Mein'} />
          </Route>
          <Route key="menu-fooyung" path="/menu/foo-yung">
            <Menu addItem={addMenuItem} category={'Egg Fu Yung'} />
          </Route>
          <Route key="menu-mixedveg" path="/menu/vegetable-mixed">
            <Menu addItem={addMenuItem} category={'Vegetable Mixed'} />
          </Route>
          <Route key="menu-beverages" path="/menu/beverages">
            <Menu addItem={addMenuItem} category={'Beverages'} />
          </Route>
          <Route key="menu" path="/menu">
            <Menu addItem={addMenuItem} category={'all'} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/cart">
            <Cart
              updateCartItem={updateCartItem}
              removeCartItem={removeCartItem}
              cart={cart}
              orderItem={orderItem}
            />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
