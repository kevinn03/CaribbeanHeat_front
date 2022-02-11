import React, { useState } from 'react';

import MenuList from './MenuList';
import MenuDisplay from './MenuDisplay';
const Menu = ({ menu }) => {
  const [filterMenu, setFilterMenu] = useState(menu);

  const menuItems = (menuArr, category) => {
    setFilterMenu(menuArr.filter((item) => item.category === category));
  };

  return (
    <div className="flex-container menu-box">
      <MenuList menu={menu} getMenuItems={menuItems}></MenuList>
      <div className="flex-child2 flex-container flex-wrap h-100">
        <MenuDisplay categoryItems={filterMenu}></MenuDisplay>
      </div>
    </div>
  );
};

export default Menu;
