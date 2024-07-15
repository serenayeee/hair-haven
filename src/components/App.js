import React, { useState } from 'react';
import Home from './components/Home';
import Products from './components/Products';
import Product1 from './components/Product1';
import Product2 from './components/Product2';
import Product3 from './components/Product3';
import Product4 from './components/Product4';
import Product5 from './components/Product5';
import Product6 from './components/Product6';
import Product7 from './components/Product7';
import Product8 from './components/Product8';
import Product9 from './components/Product9';
import Product10 from './components/Product10';
import Product11 from './components/Product11';
import Product12 from './components/Product12';
import Product13 from './components/Product13';
import Product14 from './components/Product14';
import Product15 from './components/Product15';
import Product16 from './components/Product16';
import Product17 from './components/Product17';
import Product18 from './components/Product18';
import Product19 from './components/Product19';
import Product20 from './components/Product20';
import Product21 from './components/Product21';
import Product22 from './components/Product22';
import Product23 from './components/Product23';
import Product24 from './components/Product24';
import Product25 from './components/Product25';
import Product26 from './components/Product26';
import Product27 from './components/Product27';
import Product28 from './components/Product28';
import Product29 from './components/Product29';
import Product30 from './components/Product30';
import Product31 from './components/Product31';
import Product32 from './components/Product32';
import Product33 from './components/Product33';
import Product34 from './components/Product34';
import Product35 from './components/Product35';
import Product36 from './components/Product36';
import Product37 from './components/Product37';
import Product38 from './components/Product38';
import Product39 from './components/Product39';
import Product40 from './components/Product40';
import BleachedHairProducts from './components/BleachedHairProducts';
import CurlyHairProducts from './components/CurlyHairProducts';
import DamagedHairProducts from './components/DamagedHairProducts';
import DryHairProducts from './components/DryHairProducts';
import EcoFriendlyProducts from './components/EcoFriendlyProducts';
import FrizzyHairProducts from './components/FrizzyHairProducts';
import StraightHairProducts from './components/StraightHairProducts';
import FineHairProducts from './components/FineHairProducts';
import ThickHairProducts from './components/ThickHairProducts';
import Quiz from './components/Quiz';
import Concerns from './components/Concerns';
import Cart from './components/Cart';
import Header from './components/Header';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header navigateTo={navigateTo} />
      {currentPage === 'home' && <Home navigateTo={navigateTo} />}
      {currentPage === 'products' && <Products navigateTo={navigateTo} />}
      {currentPage === 'product1' && <Product1 navigateTo={navigateTo} />}
      {currentPage === 'product2' && <Product2 navigateTo={navigateTo} />}
      {currentPage === 'product3' && <Product3 navigateTo={navigateTo} />}
      {currentPage === 'product4' && <Product4 navigateTo={navigateTo} />}
      {currentPage === 'product5' && <Product5 navigateTo={navigateTo} />}
      {currentPage === 'product6' && <Product6 navigateTo={navigateTo} />}
      {currentPage === 'product7' && <Product7 navigateTo={navigateTo} />}
      {currentPage === 'product8' && <Product8 navigateTo={navigateTo} />}
      {currentPage === 'product9' && <Product9 navigateTo={navigateTo} />}
      {currentPage === 'product10' && <Product10 navigateTo={navigateTo} />}
      {currentPage === 'product11' && <Product11 navigateTo={navigateTo} />}
      {currentPage === 'product12' && <Product12 navigateTo={navigateTo} />}
      {currentPage === 'product13' && <Product13 navigateTo={navigateTo} />}
      {currentPage === 'product14' && <Product14 navigateTo={navigateTo} />}
      {currentPage === 'product15' && <Product15 navigateTo={navigateTo} />}
      {currentPage === 'product16' && <Product16 navigateTo={navigateTo} />}
      {currentPage === 'product17' && <Product17 navigateTo={navigateTo} />}
      {currentPage === 'product18' && <Product18 navigateTo={navigateTo} />}
      {currentPage === 'product19' && <Product19 navigateTo={navigateTo} />}
      {currentPage === 'product20' && <Product20 navigateTo={navigateTo} />}
      {currentPage === 'product21' && <Product21 navigateTo={navigateTo} />}
      {currentPage === 'product22' && <Product22 navigateTo={navigateTo} />}
      {currentPage === 'product23' && <Product23 navigateTo={navigateTo} />}
      {currentPage === 'product24' && <Product24 navigateTo={navigateTo} />}
      {currentPage === 'product25' && <Product25 navigateTo={navigateTo} />}
      {currentPage === 'product26' && <Product26 navigateTo={navigateTo} />}
      {currentPage === 'product27' && <Product27 navigateTo={navigateTo} />}
      {currentPage === 'product28' && <Product28 navigateTo={navigateTo} />}
      {currentPage === 'product29' && <Product29 navigateTo={navigateTo} />}
      {currentPage === 'product30' && <Product30 navigateTo={navigateTo} />}
      {currentPage === 'product31' && <Product31 navigateTo={navigateTo} />}
      {currentPage === 'product32' && <Product32 navigateTo={navigateTo} />}
      {currentPage === 'product33' && <Product33 navigateTo={navigateTo} />}
      {currentPage === 'product34' && <Product34 navigateTo={navigateTo} />}
      {currentPage === 'product35' && <Product35 navigateTo={navigateTo} />}
      {currentPage === 'product36' && <Product36 navigateTo={navigateTo} />}
      {currentPage === 'product37' && <Product37 navigateTo={navigateTo} />}
      {currentPage === 'product38' && <Product38 navigateTo={navigateTo} />}
      {currentPage === 'product39' && <Product39 navigateTo={navigateTo} />}
      {currentPage === 'product40' && <Product40 navigateTo={navigateTo} />}
      {currentPage === 'bleached-hair' && <BleachedHairProducts navigateTo={navigateTo} />}
      {currentPage === 'curly-hair' && <CurlyHairProducts navigateTo={navigateTo} />}
      {currentPage === 'damaged-hair' && <DamagedHairProducts navigateTo={navigateTo} />}
      {currentPage === 'dry-hair' && <DryHairProducts navigateTo={navigateTo} />}
      {currentPage === 'eco-friendly' && <EcoFriendlyProducts navigateTo={navigateTo} />}
      {currentPage === 'frizzy-hair' && <FrizzyHairProducts navigateTo={navigateTo} />}
      {currentPage === 'straight-hair' && <StraightHairProducts navigateTo={navigateTo} />}
      {currentPage === 'fine-hair' && <FineHairProducts navigateTo={navigateTo} />}
      {currentPage === 'thick-hair' && <ThickHairProducts navigateTo={navigateTo} />}
      {currentPage === 'quiz' && <Quiz navigateTo={navigateTo} />}
      {currentPage === 'shop-by-concern' && <Concerns navigateTo={navigateTo} />}
      {currentPage === 'cart' && <Cart navigateTo={navigateTo} />} {/* Updated to pass navigateTo */}
    </div>
  );
}

export default App;
