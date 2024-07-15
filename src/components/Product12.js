// Product12.js

import React, { useState } from 'react';
import Header from './Header';
import './Product12.css'; // Import your CSS file for Product12

const Product12 = ({ navigateTo }) => {
  const [quantity, setQuantity] = useState(1); // State for quantity

  const handleQuantityChange = (value) => {
    // Function to handle quantity change
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Function to handle adding to cart
    // Implement your logic here
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="product12">
      <Header navigateTo={navigateTo} />

      <div className="product12-content">
        <div className="product-image-container">
          <img src="/product12.png" alt="Amika Moisture Mask" className="product-image" />
        </div>

        <div className="product-details-container">
          <h2 className="product-title">Amika Moisture Mask</h2>
          
          <div className="product-reviews">
            {[...Array(4)].map((_, index) => (
              <span key={index} className={index < 4 ? 'star-filled' : 'star-empty'}>&#9733;</span>
            ))}
            <span className="reviews-count">(4.5 reviews)</span>
          </div>

          <p className="product-price">$25.99</p>

          <div className="quantity-section">
            <label htmlFor="quantity">Quantity:</label>
            <div className="quantity-input">
              <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
              />
              <button className="quantity-btn" onClick={increaseQuantity}>+</button>
            </div>
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>ADD TO CART</button>

          <div className="product-description">
            <h3>Description:</h3>
            <p>
              Amika Moisture Mask provides intense hydration and nourishment for dry and damaged hair. It restores moisture balance, leaving hair silky, soft, and manageable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product12;
