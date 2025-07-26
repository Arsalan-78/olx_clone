import React from 'react';
import DarazHeader from './DarazHeader';
import HeroBanner from './HeroBanner';
import CategoryGrid from './CategoryGrid';
import FlashSale from './FlashSale';
import ProductGrid from './ProductGrid';
import BottomNavigation from './BottomNavigation';

const DarazApp = () => {
  return (
    <div className="daraz-app">
      <DarazHeader />
      <HeroBanner />
      <CategoryGrid />
      <FlashSale />
      <ProductGrid />
      <BottomNavigation />
      
      {/* Add bottom padding for mobile navigation */}
      <div className="d-md-none" style={{ height: '80px' }}></div>
    </div>
  );
};

export default DarazApp;