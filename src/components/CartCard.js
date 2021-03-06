import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
const CartCard = ({ item, subtotal, updateCartItem, removeCartItem }) => {
  const [quantity, setquantity] = useState(item.quantity);
  const quantityChange = (event) => {
    setquantity(event.target.value);
  };
  const updateCart = () => {
    updateCartItem(item, quantity);
  };

  const removeItem = (event) => {
    event.preventDefault;
    removeCartItem(item);
  };

  return (
    <Row className="cart-card">
      <Col className="cart-card__left" xs="12" sm="12" md="8" lg="7">
        <Row className="h-100 border-box">
          <Col xs="3" sm="3" md="5" lg="4" xl="4" xxl="3">
            <img className="cart-icon" src={item.image} />
          </Col>
          <Col>
            <div>{item.title}</div>
            <div>
              Subtotal:{' '}
              <span className="subtotal">${subtotal(item).toFixed(2)}</span>
            </div>
          </Col>
        </Row>
      </Col>
      <Col className="cart-card__right">
        <div className="cart-card__btn">
          <form onSubmit={updateCart}>
            <input
              className="input-quantity"
              type="number"
              value={quantity}
              onChange={quantityChange}
              min="1"
            ></input>
            <button type="submit">Update</button>
            <button onClick={removeItem}>Remove</button>
          </form>
        </div>
      </Col>
    </Row>
  );
};

export default CartCard;
