import React from 'react';
import { Row, Col } from 'react-bootstrap';
const CartCard = () => {
  return (
    <Row className="cart-card">
      <Col className="cart-card__left" xs="12" sm="12" md="8" lg="7">
        <Row className="h-100 border-box">
          <Col xs="3" sm="3" md="5" lg="4" xl="3" xxl="3">
            <img
              className="cart-icon"
              src="https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg"
            />
          </Col>
          <Col>
            <div>Chicken Fingers</div>
            <div>Subtotal</div>
          </Col>
        </Row>
      </Col>
      <Col className="cart-card__right">
        <div className="cart-card__btn">
          <input className="input-quantity" type="number" value="1"></input>
          <button>Update</button>
          <button>Remove</button>
        </div>
      </Col>
    </Row>
  );
};

export default CartCard;
