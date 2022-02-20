import React from 'react';
import '../style/style.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HeaderBox = ({ cart }) => {
  return (
    <Row className="header-box justify-content-around align-items-center w-100">
      <Col md="12" lg="4">
        <Navbar.Brand>
          <Link to="/">
            <span className="header-box__title">Caribbean Heat</span>
          </Link>
        </Navbar.Brand>
      </Col>
      <Col lg="4">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav testing"
              className="header-box__nav"
            >
              <Nav className="me-auto">
                <div className="header-box__nav-link">
                  <Link to="/menu">
                    <span>Menu</span>
                  </Link>
                </div>
                <div className="header-box__nav-link">
                  <Link to="/contact">
                    <span>Contact</span>
                  </Link>
                </div>
                <div className="header-box__nav-link">
                  <Link to="/cart">
                    <div className="shopping-container">
                      <img
                        className="shopping-icon"
                        src="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png"
                        alt="cart"
                      ></img>
                      <span id="shopping-counter">{cart.length}</span>
                    </div>
                  </Link>
                </div>
                <div className="header-box__nav-link">
                  <Link to="/">
                    <span>Admin</span>
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
};

export default HeaderBox;
