import React from 'react';
import CartCard from './CartCard';
import orderAPI from '../services/orderAPI';
const CartDisplay = ({ cart, updateCartItem, removeCartItem, orderItem }) => {
  const totalItems = () => {
    let sum = 0;
    cart.forEach((item) => (sum += Number(item.quantity)));
    return sum;
  };

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
  const orderCheckout = async (event) => {
    event.preventDefault;
    if (cart.length > 0) {
      const orderMessage = document.querySelector('.cart-message');
      const tempObject = {};
      tempObject.price = { total: totalPrice(), tax: taxPrice(subPrice()) };
      tempObject.items = [...cart];

      await orderAPI.create(tempObject);
      orderMessage.classList.toggle('d-none');

      setTimeout(() => {
        orderMessage.classList.toggle('d-none');
      }, 3000);
      orderItem();
    }
  };
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
              Tax: ${taxPrice(subPrice()).toFixed(2)}
            </span>
          </div>

          <div className="total total-price__container">
            Total: <span className="price">${totalPrice().toFixed(2)}</span>
          </div>
        </div>
        <div className="h-100 w-100">
          <button onClick={orderCheckout} className="checkout">
            Order
          </button>
        </div>
      </div>

      <div className="cart-display__left display-flex">
        <div className="course-cart">{totalItems()} items in the Cart</div>

        {cart.map((item, index) => (
          <CartCard
            updateCartItem={updateCartItem}
            removeCartItem={removeCartItem}
            key={index}
            subtotal={subtotal}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default CartDisplay;
