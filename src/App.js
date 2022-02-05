import React, { useEffect, useState } from 'react';
import './style/style.css';
import menuServices from './services/menuAPI';
import HeaderBox from './components/HeaderBox';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Contact from './components/Contact';
function App() {
  const [menu, setMenu] = useState([]);
  useEffect(async () => {
    const result = await menuServices.getItems();
    setMenu(result);
  }, []);
  return (
    <div className="app h-100 w-100">
      <Router>
        <HeaderBox></HeaderBox>

        <Switch>
          <Route path="/menu/house">
            <Menu menu={menu} />
          </Route>
          <Route path="/menu/soup">
            <Menu menu={menu} />
          </Route>
          <Route path="/menu/deepfried">
            <Menu menu={menu} />
          </Route>
          <Route path="/menu/bbqroast">
            <Menu menu={menu} />
          </Route>
          <Route path="/menu/sweetsour">
            <Menu menu={menu} />
          </Route>
          <Route path="/menu/sizzling">
            <Menu menu={menu} />
          </Route>
          <Route path="/menu/friedrice">
            <Menu menu={menu} />
          </Route>
          <Route path="/menu/chowmein">
            <Menu menu={menu} />
          </Route>
          <Route path="/menu/lomein">
            <Menu menu={menu} />
          </Route>
          <Route path="/menu/fooyung">
            <Menu menu={menu} />
          </Route>
          <Route path="/menu/vegetable-mixed">
            <Menu menu={menu} />
          </Route>
          <Route path="/menu/bevarages">
            <Menu menu={menu} />
          </Route>
          <Route path="/menu">
            <Menu menu={menu} />
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
