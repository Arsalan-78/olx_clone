import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Filter } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, selectedCategory, setSelectedCategory, searchTerm }) => {
  const filteredProducts = products.filter(product => {
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = !searchTerm || 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <Container className="my-4">
      {/* Filters Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0" style={{ color: '#002f34' }}>
          {selectedCategory ? `${selectedCategory} in Pakistan` : 'Fresh recommendations'}
          <span className="text-muted ms-2">({filteredProducts.length} ads)</span>
        </h5>
        
        <div className="d-flex align-items-center">
          <Form.Select size="sm" className="me-2" style={{ width: '150px' }}>
            <option>Sort by: Date</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </Form.Select>
          
          <Button variant="outline-secondary" size="sm" className="d-flex align-items-center">
            <Filter size={16} className="me-1" />
            Filters
          </Button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="mb-4">
        <div className="d-flex flex-wrap gap-2">
          <Button
            variant={!selectedCategory || selectedCategory === 'All' ? 'primary' : 'outline-secondary'}
            size="sm"
            onClick={() => setSelectedCategory('All')}
            style={!selectedCategory || selectedCategory === 'All' ? 
              { backgroundColor: '#002f34', borderColor: '#002f34' } : {}}
          >
            All Categories
          </Button>
          {['Mobiles', 'Vehicles', 'Property for Rent', 'Electronics & Home Appliances', 'Bikes'].map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline-secondary'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              style={selectedCategory === category ? 
                { backgroundColor: '#002f34', borderColor: '#002f34' } : {}}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <Row>
        {filteredProducts.map(product => (
          <Col key={product.id} xl={3} lg={4} md={6} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>

      {filteredProducts.length === 0 && (
        <div className="text-center py-5">
          <h5 className="text-muted">No products found</h5>
          <p className="text-muted">Try adjusting your search or filters</p>
        </div>
      )}
    </Container>
  );
};

export default ProductGrid;