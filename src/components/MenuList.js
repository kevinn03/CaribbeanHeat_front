import React from 'react';
import { Link } from 'react-router-dom';

const MenuList = () => {
  return (
    <div className="menu-list flex-child">
      <div className="menu-list__cat">
        <Link to="/menu/house">
          <span>House Specials</span>
        </Link>
      </div>
      <div className="menu-list__cat">
        <Link to="/menu/soup">
          <span>Soup</span>
        </Link>
      </div>
      <div className="menu-list__cat">
        <Link to="/menu/deep-fried">
          <span>Deep Fried</span>
        </Link>
      </div>
      <div className="menu-list__cat">
        <Link to="/menu/bbq-roast">
          <span>BBQ Roast</span>
        </Link>
      </div>
      <div className="menu-list__cat">
        <Link to="/menu/sweet-sour">
          <span>Sweet and Sour</span>
        </Link>
      </div>
      <div className="menu-list__cat">
        <Link to="/menu/sizzling">
          <span>Hot Sizzling</span>
        </Link>
      </div>
      <div className="menu-list__cat">
        <Link to="/menu/fried-rice">
          <span>Fried Rice</span>
        </Link>
      </div>
      <div className="menu-list__cat">
        <Link to="/menu/chow-mein">
          <span>Chow Mein</span>
        </Link>
      </div>
      <div className="menu-list__cat">
        <Link to="/menu/lo-mein">
          <span>Lo Mein</span>
        </Link>
      </div>

      <div className="menu-list__cat">
        <Link to="/menu/foo-yung">
          <span>Egg Foo Yung</span>
        </Link>
      </div>
      <div className="menu-list__cat">
        <Link to="/menu/vegetable-mixed">
          <span>Vegetable Mixed</span>
        </Link>
      </div>
      <div className="menu-list__cat">
        <Link to="/menu/beverages">
          <span>Beverages</span>
        </Link>
      </div>
    </div>
  );
};

export default MenuList;
