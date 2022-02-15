import React from 'react';
import './style/style.css';

import HeaderBox from './components/HeaderBox';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Contact from './components/Contact';
function App() {
  return (
    <div className="app h-100 w-100">
      <Router>
        <HeaderBox></HeaderBox>

        <Switch>
          <Route key="menu-house" path="/menu/house">
            <Menu category={'House Specials'} />
          </Route>
          <Route key="menu-soup" path="/menu/soup">
            <Menu category={'Soup'} />
          </Route>
          <Route key="menu-deep" path="/menu/deep-fried">
            <Menu category={'Deep Fried'} />
          </Route>
          <Route key="menu-bbq" path="/menu/bbq-roast">
            <Menu category={'BBQ Roast'} />
          </Route>
          <Route key="menu-sweetsour" path="/menu/sweet-sour">
            <Menu category={'Sweet & Sour'} />
          </Route>
          <Route key="menu-hotsiz" path="/menu/sizzling">
            <Menu category={'Hot Sizzling Dishes'} />
          </Route>
          <Route key="menu-friedrice" path="/menu/fried-rice">
            <Menu category={'Fried Rice'} />
          </Route>
          <Route key="menu-chowmein" path="/menu/chow-mein">
            <Menu category={'Chow Mein'} />
          </Route>
          <Route key="menu-lomein" path="/menu/lo-mein">
            <Menu category={'Lo Mein'} />
          </Route>
          <Route key="menu-fooyung" path="/menu/foo-yung">
            <Menu category={'Egg Fu Yung'} />
          </Route>
          <Route key="menu-mixedveg" path="/menu/vegetable-mixed">
            <Menu category={'Vegetable Mixed'} />
          </Route>
          <Route key="menu-beverages" path="/menu/beverages">
            <Menu category={'Beverages'} />
          </Route>
          <Route key="menu" path="/menu">
            <Menu category={'all'} />
          </Route>
          <Route path="/contact">
            <Contact />
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
