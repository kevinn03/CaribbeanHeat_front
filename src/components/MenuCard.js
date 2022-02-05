import React, { useState } from 'react';

const MenuCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const addItem = (event) => {
    event.preventDefault();

    setQuantity(1);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="flex-child4 item-card">
      <div>
        <img src={item.image}></img>
      </div>
      <div className="flex-container justify-content-around">
        <span>{item.title}</span>
        <span>{`$${item.price}`}</span>
      </div>
      <div className="text-center">
        <form onSubmit={addItem}>
          <input
            className="w-25"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default MenuCard;
