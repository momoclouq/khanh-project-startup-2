import CardIcon from "../../assets/images/credit-card.svg";
import ProductImage from "../../assets/images/product-image.jpg";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards-2";
import { useSelector, useDispatch } from "react-redux";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { removeFromCart, getTotals } from "features/cartSlice";
import { Link } from "react-router-dom";
import "../Checkout/checkout.css";

const Checkout = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="checkout">
      {/* <h1>PayPal Checkout</h1>
      <p className="checkout-title">Design+Code React Hooks Course</p>
      <p className="checkout-description">
        Learn how to build a website with React Hooks
      </p>
      <h1 className="checkout-price">${cart.cartTotalAmount}</h1>
      <img
        className="checkout-product-image"
        src={ProductImage}
        alt="Product"
      /> */}
      <h2>Checking Out</h2>
      <div className="checkout-container">
        <div className="checkout-left">
          <div className="cart-items">
            {cart.cartItem?.map((item) => (
              <div className="cart-item" key={item.courseId}>
                <div className="cart-item-info">
                  <img src={item.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.desciption}</p>

                    <div
                      className="remove-button"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </div>
                  </div>
                </div>

                <div className="cart-item-price">${item.price}</div>
              </div>
            ))}
          </div>
          <div className="cart-checkout">
            <div className="subtotal">
              <span>Subtotal</span>
              <span className="amount">${cart.cartTotalAmount}</span>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <div className="continue-shopping">
              <Link to="/our-courses">
                {/*arrow-left*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>

                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="checkout-right">
          <div className="card-contents">
            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
            />
            <form className="card-form">
              <input
                className="card-number"
                type="number"
                name="number"
                placeholder="Card Number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input
                className="card-name"
                type="name"
                name="name"
                placeholder="Name"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <div className="card-form-bottom">
                <input
                  className="card-expiry"
                  type="tel"
                  name="expiry"
                  pattern="\d\d/\d\d"
                  placeholder="Valid Thru"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
                <input
                  className="card-cvc"
                  type="number"
                  name="cvc"
                  placeholder="CVC"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </form>
          </div>
          <button className="checkout-button">
            <div className="grey-circle">
              <div className="purple-circle">
                <img className="icon" src={CardIcon} alt="credit-card-icon" />
              </div>
            </div>
            <div className="text-container">
              <p className="text">Buy</p>
            </div>
          </button>
          <div className="separator"></div>
          <div className="paypal">
            <p className="checkout-title">OR, PAY WITH PAYPAL</p>
            <div className="paypal-button-container">
              <PaypalCheckoutButton cart={cart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
