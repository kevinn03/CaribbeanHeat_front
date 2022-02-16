import React from 'react';
import CartDisplay from './CartDisplay';
const Cart = () => {
  return (
    <div className="cart w-100 h-100">
      <h2 className="text-center">Shopping Cart</h2>
      <div className="cart-container display-flex w-100 border-box h-100 justify-content-center">
        <CartDisplay />
      </div>
    </div>
  );
};

export default Cart;
