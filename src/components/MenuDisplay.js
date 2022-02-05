import React from 'react';

const MenuDisplay = ({ categoryItems }) => {
  console.log('menudisplay');
  console.log(categoryItems);
  return (
    <>
      {categoryItems.map((item) => (
        <div key={item.id} className="flex-child4 item-card">
          <div>
            <img src={item.image}></img>
          </div>
          <div>{item.title}</div>
        </div>
      ))}
    </>
  );
};

export default MenuDisplay;
