import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FiStar, FiShoppingCart, FiHeart, FiTruck } from 'react-icons/fi';
import { products } from '../data/darazData';

const ProductGrid = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
    }).format(price).replace('PKR', 'Rs ');
  };

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Just For You</h4>
        <Button variant="outline-primary" size="sm">View All</Button>
      </div>
      
      <Row>
        {products.map(product => (
          <Col key={product.id} lg={3} md={6} className="mb-4">
            <Card className="h-100 border-0 shadow-sm product-card position-relative">
              <div className="position-absolute top-0 end-0 p-2" style={{ zIndex: 1 }}>
                <FiHeart 
                  size={18} 
                  className="text-muted wishlist-icon" 
                  style={{ cursor: 'pointer' }} 
                />
              </div>
              
              {product.originalPrice && (
                <div className="position-absolute top-0 start-0 m-2" style={{ zIndex: 1 }}>
                  <Badge bg="success" className="discount-badge">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </Badge>
                </div>
              )}

              <div style={{ height: '200px', overflow: 'hidden' }}>
                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </div>
              
              <Card.Body className="p-3">
                <Card.Title className="fs-6 mb-2 text-truncate" title={product.title}>
                  {product.title}
                </Card.Title>
                
                <div className="d-flex align-items-center mb-2">
                  <div className="d-flex align-items-center me-2">
                    <FiStar size={14} className="text-warning me-1" />
                    <span className="small text-muted">{product.rating}</span>
                  </div>
                  <span className="small text-muted">({product.reviews} reviews)</span>
                </div>
                
                <div className="mb-2">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-primary fs-5 me-2">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <small className="text-muted text-decoration-line-through">
                        {formatPrice(product.originalPrice)}
                      </small>
                    )}
                  </div>
                </div>
                
                {product.freeShipping && (
                  <div className="mb-2">
                    <Badge bg="success" className="d-flex align-items-center w-fit">
                      <FiTruck size={12} className="me-1" />
                      Free Shipping
                    </Badge>
                  </div>
                )}
                
                <Button 
                  variant="outline-primary" 
                  size="sm" 
                  className="w-100 d-flex align-items-center justify-content-center"
                >
                  <FiShoppingCart size={16} className="me-2" />
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;