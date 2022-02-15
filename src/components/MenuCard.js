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
      <div className="item-card__info">
        <div className="flex-container justify-content-around">
          <span>{item.title}</span>
          <span>{`$${item.price}`}</span>
        </div>
        <div className="text-center">
          <form onSubmit={addItem}>
            <input
              className="item-card__input w-25 text-center"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button className="item-card__btn" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
