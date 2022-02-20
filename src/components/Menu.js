import React, { useState, useEffect } from 'react';
import menuServices from '../services/menuAPI';
import MenuList from './MenuList';
import MenuDisplay from './MenuDisplay';
import { Container, Col, Row } from 'react-bootstrap';
const Menu = ({ category }) => {
  window.scrollTo(0, 0);
  const [menu, setMenu] = useState([]);

  useEffect(async () => {
    const result = await menuServices.getItems();
    if (category === 'all') {
      setMenu(result);
    } else {
      setMenu(result.filter((item) => item.category === category));
    }
  }, []);

  return (
    <Container fluid className="box-border h-100 w-100">
      <Row className="menu-box w-100 h-100">
        <Col xs="3" sm="3" md="3" lg="2">
          <MenuList></MenuList>
        </Col>
        <Col className=" w-100 border-box menu-display">
          <MenuDisplay categoryItems={menu}></MenuDisplay>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
