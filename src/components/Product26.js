import React, { useState } from 'react';
import Header from './Header';
import './Product26.css'; // Import your CSS file for Product26

const Product26 = ({ navigateTo }) => {
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
    <div className="product26">
      <Header navigateTo={navigateTo} />

      <div className="product26-content">
        <div className="product-image-container">
          <img src="/product26.png" alt="GHD Platinum Straightener - Black" className="product-image" />
        </div>

        <div className="product-details-container">
          <h2 className="product-title">GHD Platinum Straightener - Black</h2>
          
          <div className="product-reviews">
            {[...Array(4)].map((_, index) => (
              <span key={index} className={index < 4 ? 'star-filled' : 'star-empty'}>&#9733;</span>
            ))}
            <span className="reviews-count">(4.6 reviews)</span>
          </div>

          <p className="product-price">$224.99</p>

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
              The GHD Platinum Straightener in Black features advanced ceramic heat technology for smooth and shiny hair with reduced breakage. It heats up quickly and maintains a consistent temperature for optimal styling results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product26;
