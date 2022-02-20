import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
const MenuCard = ({ item, addItem }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const addMenuItem = (event) => {
    event.preventDefault();
    addItem(item, quantity);

    setQuantity(1);
  };

  return (
    <Col xs="12" sm="6" md="6" lg="4" xl="3" className="item-card box-border">
      <div className="item-card__div">
        <div>
          <img src={item.image}></img>
        </div>
        <div className="item-card__info">
          <div className="text-center">
            <span>{item.title}</span>
            <span> </span>
            <span>{`$${item.price}`}</span>
          </div>
          <div className="text-center">
            <form onSubmit={addItem}>
              <input
                className="item-card__input w-25 text-center"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
              <button
                onClick={addMenuItem}
                className="item-card__btn"
                type="submit"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default MenuCard;
