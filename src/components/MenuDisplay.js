import React from 'react';
import MenuCard from './MenuCard';
const MenuDisplay = ({ categoryItems }) => {
  return (
    <>
      {categoryItems.map((item) => (
        <MenuCard key={item.id} item={item}></MenuCard>
      ))}
    </>
  );
};

export default MenuDisplay;
