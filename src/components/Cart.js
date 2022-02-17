import React from 'react';
import CartDisplay from './CartDisplay';
const Cart = ({ cart }) => {
  console.log('this is from Cart');
  console.log(cart);
  return (
    <div className="cart w-100 h-100">
      <h2 className="text-center">Shopping Cart</h2>
      <p className="text-center">Pay in Store</p>
      <div className="cart-container display-flex w-100 border-box h-100 justify-content-center">
        <CartDisplay cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
