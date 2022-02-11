import React, { useState, useEffect } from 'react';
import menuServices from '../services/menuAPI';
import MenuList from './MenuList';
import MenuDisplay from './MenuDisplay';
const Menu = ({ category }) => {
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
    <div className="flex-container menu-box">
      <MenuList></MenuList>

      <div className="flex-child2 flex-container flex-wrap h-100">
        <MenuDisplay categoryItems={menu}></MenuDisplay>
      </div>
    </div>
  );
};

export default Menu;
