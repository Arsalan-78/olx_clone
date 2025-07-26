import React from 'react';
import { Card } from 'react-bootstrap';
import { Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
    }).format(price).replace('PKR', 'Rs ');
  };

  return (
    <Card className="h-100 border-0 shadow-sm product-card position-relative">
      <div className="position-absolute top-0 end-0 p-2" style={{ zIndex: 1 }}>
        <Heart size={20} className="text-muted" style={{ cursor: 'pointer' }} />
      </div>
      
      {product.featured && (
        <div 
          className="position-absolute top-0 start-0 px-2 py-1 text-white small fw-bold"
          style={{ backgroundColor: '#ff6b35', zIndex: 1 }}
        >
          FEATURED
        </div>
      )}

      <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
        <div style={{ height: '200px', overflow: 'hidden' }}>
          <Card.Img 
            variant="top" 
            src={product.images[0]} 
            style={{ height: '200px', objectFit: 'cover' }}
          />
        </div>
        
        <Card.Body className="p-3">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div>
              <Card.Title className="fs-5 fw-bold mb-1" style={{ color: '#002f34' }}>
                {formatPrice(product.price)}
              </Card.Title>
              {product.originalPrice && (
                <small className="text-muted text-decoration-line-through">
                  {formatPrice(product.originalPrice)}
                </small>
              )}
            </div>
          </div>
          
          <Card.Text className="mb-2 text-truncate" title={product.title}>
            {product.title}
          </Card.Text>
          
          <div className="d-flex justify-content-between align-items-center text-muted small">
            <div className="d-flex align-items-center">
              <MapPin size={14} className="me-1" />
              {product.location}
            </div>
            <span>{product.timePosted}</span>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ProductCard;