import React from 'react';
import '../style/style.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HeaderBox = () => {
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
                  <Link to="/">
                    <span>Cart</span>
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
