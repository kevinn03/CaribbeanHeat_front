import React from 'react';
import '../style/style.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HeaderBox = () => {
  return (
    <Row className="header-box justify-content-around align-items-center w-100">
      <Col md="4">
        <Navbar.Brand>
          <Link to="/">
            <span className="header-box__title">Caribbean Heat</span>
          </Link>
        </Navbar.Brand>
      </Col>
      <Col md="4">
        <Navbar className="header-box__nav" collapseOnSelect expand="sm">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav testing">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/menu">
                    <span>Menu</span>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contact">
                    <span>Contact</span>
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <span>Cart</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
};

export default HeaderBox;
