import React, { useState } from 'react';
import Header from './Header';
import './Products.css';

const productsData = [
  { id: 1, name: 'Amika Dry Shampoo', price: '$19.99', image: '/product1.png', reviews: '4.5/5', category: 'sprays-oils' },
  { id: 2, name: 'Amika Nutrient Shampoo', price: '$24.99', image: '/product2.png', reviews: '5/5', category: 'shampoos' },
  { id: 3, name: 'Amika Nutrient Conditioner', price: '$24.99', image: '/product3.png', reviews: '4.8/5', category: 'conditioners' },
  { id: 4, name: 'Amika Nourishing Mask', price: '$31.99', image: '/product4.png', reviews: '4.7/5', category: 'masks-creams' },
  { id: 5, name: 'Olaplex Bond Smoother', price: '$34.99', image: '/product5.png', reviews: '4.2/5', category: 'masks-creams' },
  { id: 6, name: 'Olaplex Bond Shampoo', price: '$34.99', image: '/product6.png', reviews: '4.9/5', category: 'shampoos' },
  { id: 7, name: 'Olaplex Bond Conditioner', price: '$34.99', image: '/product7.png', reviews: '4.6/5', category: 'conditioners' },
  { id: 8, name: 'Olaplex Bonding Oil', price: '$27.99', image: '/product8.png', reviews: '4.4/5', category: 'sprays-oils' },
  { id: 9, name: 'Amika Curl Spray', price: '$22.99', image: '/product9.png', reviews: '4.3/5', category: 'sprays-oils' },
  { id: 10, name: 'Amika Curl Cream', price: '$19.99', image: '/product10.png', reviews: '4.7/5', category: 'masks-creams' },
  { id: 11, name: 'Amika Curl Gel', price: '$32.99', image: '/product11.png', reviews: '4.8/5', category: 'masks-creams' },
  { id: 12, name: 'Amika Moisture Mask', price: '$25.99', image: '/product12.png', reviews: '4.5/5', category: 'masks-creams' },
  { id: 13, name: 'Earthling Shampoo - Vanilla Coconut', price: '$29.99', image: '/product13.png', reviews: '4.6/5', category: ['shampoos', 'eco-friendly'] },
  { id: 14, name: 'Earthling Shampoo - Cool Breeze', price: '$29.99', image: '/product14.png', reviews: '4.9/5', category: ['shampoos', 'eco-friendly'] },
  { id: 15, name: 'Earthling Shampoo - Citrus Sun', price: '$29.99', image: '/product15.png', reviews: '4.3/5', category: ['shampoos', 'eco-friendly'] },
  { id: 16, name: 'Earthling Shampoo - Simple Fresh', price: '$29.99', image: '/product16.png', reviews: '4.7/5', category: ['shampoos', 'eco-friendly'] },  
  { id: 17, name: 'Earthling Conditioner - Wild Vanilla', price: '$29.99', image: '/product17.png', reviews: '4.2/5', category: ['conditioners', 'eco-friendly'] },
  { id: 18, name: 'Earthling Conditioner - Simple Fresh', price: '$29.99', image: '/product18.png', reviews: '4.6/5', category: ['conditioners', 'eco-friendly'] },
  { id: 19, name: 'Earthling Conditioner - Cool Breeze', price: '$29.99', image: '/product19.png', reviews: '4.4/5', category: ['conditioners', 'eco-friendly'] },
  { id: 20, name: 'Earthling Conditioner - Unscented', price: '$29.99', image: '/product20.png', reviews: '4.5/5', category: ['conditioners', 'eco-friendly'] },
  { id: 21, name: 'Amika Repair Cream', price: '$26.99', image: '/product21.png', reviews: '4.5/5', category: 'masks-creams' },
  { id: 22, name: 'Amika Repair Shampoo', price: '$31.99', image: '/product22.png', reviews: '4.8/5', category: 'shampoos' },
  { id: 23, name: 'Amika Repair Conditioner', price: '$20.99', image: '/product23.png', reviews: '4.1/5', category: 'conditioners' },
  { id: 24, name: 'Amika Repair Cream', price: '$38.99', image: '/product24.png', reviews: '4.7/5', category: 'masks-creams' },
  { id: 25, name: 'GHD Platinum Straightener - White', price: '$224.99', image: '/product25.png', reviews: '4.2/5', category: 'hot-tools' },
  { id: 26, name: 'GHD Platinum Straightener - Black', price: '$224.99', image: '/product26.png', reviews: '4.6/5', category: 'hot-tools' },
  { id: 27, name: 'GHD Curve - Silver', price: '$198.99', image: '/product27.png', reviews: '4.9/5', category: 'hot-tools' },
  { id: 28, name: 'GHD Curve - Black', price: '$198.99', image: '/product28.png', reviews: '4.4/5', category: 'hot-tools' },
  { id: 29, name: 'GHD Dryer - White', price: '$124.99', image: '/product29.png', reviews: '4.3/5', category: 'hot-tools' },
  { id: 30, name: 'GHD Dryer - Black', price: '$124.99', image: '/product30.png', reviews: '4.7/5', category: 'hot-tools' },
  { id: 31, name: 'Babybliss', price: '$74.99', image: '/product31.png', reviews: '4.8/5', category: 'hot-tools' },
  { id: 32, name: 'Babybliss Curler', price: '74.99', image: '/product32.png', reviews: '4.5/5', category: 'hot-tools' },
  { id: 33, name: 'Tangle Teezer - Pink', price: '$27.99', image: '/product33.png', reviews: '4.6/5', category: 'accessories' },
  { id: 34, name: 'Tangle Teezer - Purple', price: '$27.99', image: '/product34.png', reviews: '4.9/5', category: 'accessories' },
  { id: 35, name: 'Tangle Teezer Spike', price: '$21.99', image: '/product35.png', reviews: '4.3/5', category: 'accessories' },
  { id: 36, name: 'Tangle Teezer - Blue', price: '$39.99', image: '/product36.png', reviews: '4.7/5', category: 'accessories' },
  { id: 37, name: 'Wella Coarse Shampoo', price: '$31.99', image: '/product37.png', reviews: '4.2/5', category: 'shampoos' },
  { id: 38, name: 'Wella Color Shampoo', price: '$31.99', image: '/product38.png', reviews: '4.6/5', category: 'shampoos' },
  { id: 39, name: 'Wella Nourishment Mask', price: '$27.99', image: '/product39.png', reviews: '4.4/5', category: 'masks-creams' },
  { id: 40, name: 'Wella Nourishing Conditioner', price: '$31.99', image: '/product40.png', reviews: '4.5/5', category: 'conditioners' },
  // Add more products as needed
];

function Products({ navigateTo }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const categories = [
    'all',
    'shampoos',
    'conditioners',
    'masks-creams',
    'sprays-oils',
    'eco-friendly',
    'hot-tools',
    'accessories'
  ];

  const filterProducts = (category) => {
    setActiveCategory(category === 'all' ? null : category);

    // Filter products based on category
    const filteredProducts = category === 'all' ? productsData : productsData.filter(product => {
      return product.category.includes(category);
    });

    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="products">
      <Header navigateTo={navigateTo} />

      <div className="products-content">
        <div className="filters">
          <h3>Filter by Category</h3>
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className={category === activeCategory ? 'active' : ''}
                onClick={() => filterProducts(category)}
              >
                {category.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>

        <h2>PRODUCTS</h2>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item" onClick={() => navigateTo(`product${product.id}`)}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <p className="product-reviews">Reviews: {product.reviews}</p>
                <button className="add-to-cart-btn">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
