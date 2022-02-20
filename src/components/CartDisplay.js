import React from 'react';
import CartCard from './CartCard';
const CartDisplay = ({ cart }) => {
  const subtotal = (item) => {
    return Number(item.price) * Number(item.quantity);
  };
  const subPrice = () => {
    let sum = 0;

    cart.forEach((item) => {
      sum += subtotal(item);
    });

    return sum;
  };
  const taxPrice = (amount) => {
    const taxRate = 0.13;
    return amount * taxRate;
  };

  const totalPrice = () => subPrice() + taxPrice(subPrice());

  return (
    <div className="cart-display h-100  display-flex flex-wrap">
      <div className="cart-display__right display-flex">
        <div>
          <div>
            <span className="total">Subtotal: ${subPrice().toFixed(2)}</span>
          </div>
          <div className="total">+</div>
          <div>
            <span className="total">
              tax: ${taxPrice(subPrice()).toFixed(2)}
            </span>
          </div>

          <div className="total">
            Total: <span className="price">${totalPrice().toFixed(2)}</span>
          </div>
        </div>
        <div className="h-100 w-100">
          <button className="checkout">Order</button>
        </div>
      </div>

      <div className="cart-display__left display-flex">
        <div className="course-cart">{cart.length} Courses in Cart</div>

        {cart.map((item, index) => (
          <CartCard key={index} subtotal={subtotal} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartDisplay;
