import React from 'react';
import CartDisplay from './CartDisplay';
const Cart = ({ cart, updateCartItem, removeCartItem, orderItem }) => {
  window.scrollTo(0, 0);
  return (
    <div className="cart w-100 h-100">
      <h2 className="text-center">Shopping Cart</h2>
      <p className="text-center">Pay in Store</p>
      <p className="cart-message d-none text-center">Order Completed!</p>

      <div className="cart-container display-flex w-100 border-box h-100 justify-content-center">
        <CartDisplay
          updateCartItem={updateCartItem}
          removeCartItem={removeCartItem}
          orderItem={orderItem}
          cart={cart}
        />
      </div>
    </div>
  );
};

export default Cart;
