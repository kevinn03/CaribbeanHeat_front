import React from 'react';
import CartCard from './CartCard';
const CartDisplay = () => {
  return (
    <div className="cart-display h-100  display-flex flex-wrap">
      <div className="cart-display__right display-flex">
        <div className="total">
          Total: <span className="price">price</span>
        </div>
        <div className="h-100 w-100">
          <button className="checkout">Checkout</button>
        </div>
      </div>

      <div className="cart-display__left display-flex">
        <div className="course-cart">2 Courses in Cart</div>
        <CartCard />
        <CartCard />
      </div>
    </div>
  );
};

export default CartDisplay;
