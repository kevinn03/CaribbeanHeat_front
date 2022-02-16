import React from 'react';
import CartCard from './CartCard';
const CartDisplay = () => {
  return (
    <div className="cart-display h-100  display-flex flex-wrap">
      <div className="cart-display__right display-flex">
        <div className="subtotal">
          Subtotal: <span className="price">price</span>
        </div>
        <div>
          <button className="checkout">Checkout</button>
        </div>
      </div>

      <div className="cart-display__left display-flex">
        <div className="course-cart">2 Courses in Cart</div>
        <CartCard />
      </div>
    </div>
  );
};

export default CartDisplay;
