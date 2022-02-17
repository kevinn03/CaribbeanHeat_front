import React from 'react';
import CartCard from './CartCard';
const CartDisplay = ({ cart }) => {
  const subtotal = (item) => {
    return Number(item.price) * Number(item.quantity);
  };
  const totalPrice = () => {
    let sum = 0;

    cart.forEach((item) => {
      sum += subtotal(item);
    });

    return sum.toFixed(2);
  };
  return (
    <div className="cart-display h-100  display-flex flex-wrap">
      <div className="cart-display__right display-flex">
        <div className="total">
          Total: <span className="price">${totalPrice()}</span>
        </div>
        <div className="h-100 w-100">
          <button className="checkout">Checkout</button>
        </div>
      </div>

      <div className="cart-display__left display-flex">
        <div className="course-cart">{cart.length} Courses in Cart</div>

        {cart.map((item) => (
          <CartCard key={item.id} subtotal={subtotal} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartDisplay;
