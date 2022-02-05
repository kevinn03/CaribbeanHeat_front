import React from 'react';
import { Link } from 'react-router-dom';
const MenuList = ({ menu, getMenuItems }) => {
  return (
    <div className="menu-list flex-child">
      <div>
        <Link
          onClick={() => {
            getMenuItems(menu, 'House Specials');
          }}
          to="/menu/house"
        >
          <span>House Specials</span>
        </Link>
      </div>
      <div>
        <Link
          onClick={() => {
            getMenuItems(menu, 'Soup');
          }}
          to="/menu/soup"
        >
          <span>Soup</span>
        </Link>
      </div>
      <div>
        <Link
          onClick={() => {
            getMenuItems(menu, 'Deep Fried');
          }}
          to="/menu/deep-fried"
        >
          <span>Deep Fried</span>
        </Link>
      </div>
      <div>
        <Link
          onClick={() => {
            getMenuItems(menu, 'BBQ Roast');
          }}
          to="/menu/bbq-roast"
        >
          <span>BBQ Roast</span>
        </Link>
      </div>
      <div>
        <Link
          onClick={() => {
            getMenuItems(menu, 'Sweet & Sour');
          }}
          to="/menu/sweet-sour"
        >
          <span>Sweet and Sour</span>
        </Link>
      </div>
      <div>
        <Link
          onClick={() => {
            getMenuItems(menu, 'Hot Sizzling Dishes');
          }}
          to="/menu/sizzling"
        >
          <span>Hot Sizzling</span>
        </Link>
      </div>
      <div>
        <Link
          onClick={() => {
            getMenuItems(menu, 'Fried Rice');
          }}
          to="/menu/fried-rice"
        >
          <span>Fried Rice</span>
        </Link>
      </div>
      <div>
        <Link
          onClick={() => {
            getMenuItems(menu, 'Chow Mein');
          }}
          to="/menu/chow-mein"
        >
          <span>Chow Mein</span>
        </Link>
      </div>
      <div>
        <Link
          onClick={() => {
            getMenuItems(menu, 'Lo Mein');
          }}
          to="/menu/lo-mein"
        >
          <span>Lo Mein</span>
        </Link>
      </div>

      <div>
        <Link
          onClick={() => {
            getMenuItems(menu, 'Egg Fu Yung');
          }}
          to="/menu/foo-yung"
        >
          <span>Egg Foo Yung</span>
        </Link>
      </div>
      <div>
        <Link
          onClick={() => {
            getMenuItems(menu, 'Vegetable Mixed');
          }}
          to="/menu/vegetable-mixed"
        >
          <span>Vegetable Mixed</span>
        </Link>
      </div>
      <div>
        <Link
          onClick={() => {
            getMenuItems(menu, 'Beverages');
          }}
          to="/menu/beverages"
        >
          <span>Beverages</span>
        </Link>
      </div>
    </div>
  );
};

export default MenuList;
