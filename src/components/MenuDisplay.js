import React from 'react';
import MenuCard from './MenuCard';
const MenuDisplay = ({ categoryItems }) => {
  return (
    <div className="flex-child2 flex-container flex-wrap h-100">
      {categoryItems.map((item) => (
        <MenuCard key={item.id} item={item}></MenuCard>
      ))}
    </div>
  );
};

export default MenuDisplay;
