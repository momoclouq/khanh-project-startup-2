import React from "react";
import "../Cart/cart.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { removeFromCart, clearCart, getTotals } from "features/cartSlice";

const CartContent = () => {
    const cart = useSelector((state) => state.cart);
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.cartItem.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
            <div className="start-shopping">
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

                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price-title">Price</h3>
            </div>

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
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => handleClearCart()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">${cart.cartTotalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout">
                  <button>Check Out</button>
                </Link>
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
          </div>
        )}
      </div>
    </>
  );
};

export default CartContent;
