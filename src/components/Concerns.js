import React from 'react';
import Header from './Header';
import './Concerns.css';

const Concerns = ({ navigateTo }) => {
  const handleConcernClick = (concern) => {
    switch (concern) {
      case 'Dryness':
        navigateTo('product12');
        break;
      case 'Damage':
        navigateTo('product24');
        break;
      case 'Frizz':
        navigateTo('product8'); // Navigate to Product8 when clicking on Frizz
        break;
      case 'Curl Support':
        navigateTo('curly-hair');
        break;
      default:
        navigateTo(concern.toLowerCase().replace(' ', '-'));
        break;
    }
  };

  return (
    <div className="concerns-page">
      <Header navigateTo={navigateTo} />
      <div className="concerns-grid">
        <div className="concern dryness" onClick={() => handleConcernClick('Dryness')}>
          <h3>Dryness</h3>
          <p>The product to combat dry hair</p>
        </div>
        <div className="concern damage" onClick={() => handleConcernClick('Damage')}>
          <h3>Damage</h3>
          <p>The product to repair damaged hair</p>
        </div>
        <div className="concern frizz" onClick={() => handleConcernClick('Frizz')}>
          <h3>Frizz</h3>
          <p>The product to manage frizzy hair</p>
        </div>
        <div className="concern curl-support" onClick={() => handleConcernClick('Curl Support')}>
          <h3>Curl Support</h3>
          <p>The products to enhance curl definition</p>
        </div>
        {/* Add other concerns similarly */}
      </div>
    </div>
  );
};

export default Concerns;
