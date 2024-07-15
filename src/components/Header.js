// Header.js
import React, { useState } from 'react';
import './Header.css';

function Header({ navigateTo }) {
  const [showConcernMenu, setShowConcernMenu] = useState(false);
  const [showHairTypeMenu, setShowHairTypeMenu] = useState(false);

  const handleCartClick = () => {
    navigateTo('cart'); // Navigate to the Cart page
  };

  const toggleConcernMenu = () => {
    setShowConcernMenu(!showConcernMenu);
    setShowHairTypeMenu(false);
  };

  const toggleHairTypeMenu = () => {
    setShowHairTypeMenu(!showHairTypeMenu);
    setShowConcernMenu(false);
  };

  const handleConcernClick = (concern) => {
    navigateTo(concern.toLowerCase().replace(' ', '-'));
    toggleConcernMenu();
  };

  const handleHairTypeClick = (hairType) => {
    if (hairType === 'Straight Hair') {
      navigateTo('straight-hair');
    } else {
      navigateTo(hairType.toLowerCase().replace(' ', '-'));
    }
    toggleHairTypeMenu();
  };

  const handleQuizClick = () => {
    navigateTo('quiz'); // Navigate to the Quiz page
  };

  return (
    <>
      <div className="announcement-bar">
        Free Shipping on Orders over $50
      </div>
      <header className="home-header">
        <a href="/" className="home-title-link">
          <h1 onClick={() => navigateTo('home')}>HAIR HAVEN</h1>
        </a>
        <nav className="home-menu">
          <ul>
            <li><a href="#products" onClick={() => navigateTo('products')}>PRODUCTS</a></li>
            <li>
              <div className="dropdown">
                <a href="#shop-by-concern" onClick={toggleConcernMenu}>SHOP BY CONCERN</a>
                {showConcernMenu && (
                  <div className="dropdown-content">
                    <a href="#bleached-hair" onClick={() => handleConcernClick('bleached-hair')}>Bleached Hair</a>
                    <a href="#curly-hair" onClick={() => handleConcernClick('Curly Hair')}>Curly Hair</a>
                    <a href="#damaged-hair" onClick={() => handleConcernClick('Damaged Hair')}>Damaged Hair</a>
                    <a href="#dry-hair" onClick={() => handleConcernClick('Dry Hair')}>Dry Hair</a>
                    <a href="#eco-friendly" onClick={() => handleConcernClick('Eco-Friendly')}>Eco-Friendly</a>
                    <a href="#frizzy-hair" onClick={() => handleConcernClick('Frizzy Hair')}>Frizzy Hair</a>
                  </div>
                )}
              </div>
            </li>
            <li>
              <div className="dropdown">
                <a href="#shop-by-hair-type" onClick={toggleHairTypeMenu}>SHOP BY HAIR TYPE</a>
                {showHairTypeMenu && (
                  <div className="dropdown-content">
                    <a href="#straight-hair" onClick={() => handleHairTypeClick('Straight Hair')}>Straight Hair</a>
                    <a href="#curly-hair" onClick={() => handleHairTypeClick('Curly Hair')}>Curly Hair</a>
                    <a href="#fine-hair" onClick={() => handleHairTypeClick('Fine Hair')}>Fine Hair</a>
                    <a href="#thick-hair" onClick={() => handleHairTypeClick('Thick Hair')}>Thick Hair</a>
                  </div>
                )}
              </div>
            </li>
            <li><a href="#quiz" onClick={handleQuizClick}>QUIZ</a></li>
          </ul>
        </nav>
        <div className="cart-icon" onClick={handleCartClick}>
          <img src="/cart-icon.png" alt="Cart" />
        </div>
      </header>
    </>
  );
}

export default Header;
