import React, { useState } from 'react';
import './Cart.css';
import Header from './Header'; // Import Header component

function Cart({ navigateTo }) {
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Perform any necessary form validation here

    // Assuming validation is successful, proceed to submission success state
    setSubmitted(true);
  };

  const renderForm = () => {
    return (
      <div className="cart-form">
        <p className="cart-form-title">Please fill out in order to place an order</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <button type="submit" className="cart-submit-button">Submit Order</button>
        </form>
      </div>
    );
  };

  const renderThankYouMessage = () => {
    return (
      <div className="thank-you-message">
        <p>Thank you! A Hair Haven representative will reach out within 24 hours to collect your payment and complete your order.</p>
      </div>
    );
  };

  return (
    <div className="cart-page">
      <Header navigateTo={navigateTo} /> {/* Include Header component */}
      <div className="cart-container">
        <div className="cart-header">
          <h2 className="cart-title">Your Cart</h2>
        </div>
        {submitted ? renderThankYouMessage() : renderForm()}
      </div>
    </div>
  );
}

export default Cart;
