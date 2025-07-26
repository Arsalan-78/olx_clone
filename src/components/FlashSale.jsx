import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FiClock, FiStar, FiShoppingCart } from 'react-icons/fi';
import { flashSaleProducts } from '../data/darazData';

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
    }).format(price).replace('PKR', 'Rs ');
  };

  return (
    <div className="flash-sale-section py-4" style={{ backgroundColor: '#fff5f5' }}>
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <div className="flash-sale-icon me-3">
              <FiClock size={24} className="text-danger" />
            </div>
            <div>
              <h4 className="mb-0 fw-bold text-danger">Flash Sale</h4>
              <small className="text-muted">Limited time offers</small>
            </div>
          </div>
          
          <div className="d-flex align-items-center">
            <span className="me-2 small text-muted">Ends in:</span>
            <div className="d-flex gap-1">
              <Badge bg="danger" className="px-2 py-1">
                {String(timeLeft.hours).padStart(2, '0')}
              </Badge>
              <span className="text-danger">:</span>
              <Badge bg="danger" className="px-2 py-1">
                {String(timeLeft.minutes).padStart(2, '0')}
              </Badge>
              <span className="text-danger">:</span>
              <Badge bg="danger" className="px-2 py-1">
                {String(timeLeft.seconds).padStart(2, '0')}
              </Badge>
            </div>
          </div>
        </div>

        <Row>
          {flashSaleProducts.map(product => (
            <Col key={product.id} lg={3} md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm flash-sale-card position-relative">
                <div className="position-absolute top-0 start-0 m-2" style={{ zIndex: 1 }}>
                  <Badge bg="danger" className="flash-badge">
                    -{product.discount}%
                  </Badge>
                </div>
                
                <div className="position-absolute top-0 end-0 m-2" style={{ zIndex: 1 }}>
                  <Badge bg="warning" text="dark" className="small">
                    {product.badge}
                  </Badge>
                </div>

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
                    <span className="small text-muted">({product.sold} sold)</span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="d-flex align-items-center">
                      <span className="fw-bold text-danger fs-5 me-2">
                        {formatPrice(product.salePrice)}
                      </span>
                      <small className="text-muted text-decoration-line-through">
                        {formatPrice(product.originalPrice)}
                      </small>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline-danger" 
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
        
        <div className="text-center mt-4">
          <Button variant="danger" size="lg" className="px-5">
            View All Flash Sale Items
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default FlashSale;