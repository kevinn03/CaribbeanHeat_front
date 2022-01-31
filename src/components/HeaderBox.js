import React from 'react';
import '../style/style.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HeaderBox = () => {
  return (
    <Row className="headerBox justify-content-around align-items-center">
      <Col md="4">
        <Navbar.Brand>
          <Link to="/">
            <span id="headerTitle">Caribbean Heat</span>
          </Link>
        </Navbar.Brand>
      </Col>
      <Col md="4">
        <Navbar className="testy" collapseOnSelect expand="sm">
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
                  <span>Reserve</span>
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
