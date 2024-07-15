// Home.js
import React, { useEffect, useState } from 'react';
import Header from './Header';
import './Home.css';

function Home({ navigateTo }) {
  const [currentBanner, setCurrentBanner] = useState(0);
  const bannerCount = 3; // Number of banners

  useEffect(() => {
    const bannerItems = document.querySelectorAll('.banner-item');
    bannerItems.forEach((item, index) => {
      item.style.display = index === currentBanner ? 'block' : 'none';
    });

    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % bannerCount);
    }, 3000); // Change banner every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentBanner]);

  const handleCircleClick = (index) => {
    setCurrentBanner(index);
  };

  return (
    <div className="home">
      <Header navigateTo={navigateTo} />
      <section className="home-banner">
        <div className="banner-item">
          <img src="/banner1.jpg" alt="Banner 1" />
        </div>
        <div className="banner-item">
          <img src="/banner2.jpg" alt="Banner 2" />
        </div>
        <div className="banner-item">
          <img src="/banner3.jpg" alt="Banner 3" />
        </div>
        <div className="banner-navigation">
          <div className={`circle ${currentBanner === 0 ? 'active' : ''}`} onClick={() => handleCircleClick(0)}></div>
          <div className={`circle ${currentBanner === 1 ? 'active' : ''}`} onClick={() => handleCircleClick(1)}></div>
          <div className={`circle ${currentBanner === 2 ? 'active' : ''}`} onClick={() => handleCircleClick(2)}></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
