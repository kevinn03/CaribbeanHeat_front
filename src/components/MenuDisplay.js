import React from 'react';
import MenuCard from './MenuCard';
import { Row } from 'react-bootstrap';
const MenuDisplay = ({ categoryItems }) => {
  return (
    <Row className="menu-display__row border-box ">
      {categoryItems.map((item) => (
        <MenuCard key={item.id} item={item}></MenuCard>
      ))}
    </Row>
  );
};

export default MenuDisplay;
