import React from 'react';
import './style/style.css';
import HeaderBox from './components/HeaderBox';
// import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Contact from './components/Contact';
function App() {
  return (
    <div className="app h-100 w-100">
      <Router>
        <HeaderBox></HeaderBox>

        <Switch>
          <Route path="/menu">
            <Menu />
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
