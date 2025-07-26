import React, { useState } from 'react';
import Header from './Header';
import CategorySection from './CategorySection';
import ProductGrid from './ProductGrid';
import Footer from './Footer';
import { products } from '../data/products';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('All Pakistan');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div>
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      
      <CategorySection setSelectedCategory={setSelectedCategory} />
      
      <ProductGrid 
        products={products}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchTerm={searchTerm}
      />
      
      <Footer />
    </div>
  );
};

export default HomePage;