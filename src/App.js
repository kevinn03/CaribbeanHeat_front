import React from 'react';
import './style/style.css';
import HeaderBox from './components/HeaderBox';
// import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
function App() {
  return (
    <div className="app container-lg">
      <Router>
        <HeaderBox></HeaderBox>

        <Switch>
          <Route path="/menu">
            <Menu />
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
