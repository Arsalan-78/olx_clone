import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Badge, 
  ListGroup,
  Carousel
} from 'react-bootstrap';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  MapPin, 
  Clock, 
  Shield, 
  Phone, 
  MessageCircle,
  Eye,
  Star
} from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPhone, setShowPhone] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h4>Product not found</h4>
        <Button onClick={() => navigate('/')} className="mt-3">
          Go back to homepage
        </Button>
      </Container>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
    }).format(price).replace('PKR', 'Rs ');
  };

  return (
    <div className="bg-light min-vh-100">
      <Container className="py-4">
        {/* Back Button */}
        <Button 
          variant="link" 
          className="p-0 mb-3 text-decoration-none d-flex align-items-center"
          onClick={() => navigate('/')}
          style={{ color: '#002f34' }}
        >
          <ArrowLeft size={20} className="me-2" />
          Back to search results
        </Button>

        <Row>
          {/* Left Column - Images and Details */}
          <Col lg={8}>
            {/* Image Gallery */}
            <Card className="mb-4 border-0 shadow-sm">
              <Carousel interval={null} className="product-carousel">
                {product.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      style={{ height: '400px', objectFit: 'cover' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card>

            {/* Product Details */}
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h2 className="fw-bold mb-2" style={{ color: '#002f34' }}>
                      {formatPrice(product.price)}
                    </h2>
                    {product.originalPrice && (
                      <p className="text-muted text-decoration-line-through mb-2">
                        {formatPrice(product.originalPrice)}
                      </p>
                    )}
                  </div>
                  <div className="d-flex gap-2">
                    <Button variant="outline-secondary" size="sm">
                      <Heart size={16} />
                    </Button>
                    <Button variant="outline-secondary" size="sm">
                      <Share2 size={16} />
                    </Button>
                  </div>
                </div>

                <h3 className="fs-4 mb-3">{product.title}</h3>

                <div className="d-flex align-items-center text-muted mb-3">
                  <MapPin size={16} className="me-2" />
                  <span className="me-4">{product.location}</span>
                  <Clock size={16} className="me-2" />
                  <span>{product.timePosted}</span>
                </div>

                {product.featured && (
                  <Badge bg="warning" className="mb-3">
                    <Star size={14} className="me-1" />
                    Featured Ad
                  </Badge>
                )}

                <div className="mb-4">
                  <h5 className="mb-3">Description</h5>
                  <p className="text-muted">{product.description}</p>
                </div>

                {/* Specifications */}
                <div className="mb-4">
                  <h5 className="mb-3">Details</h5>
                  <Row>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <Col md={6} className="mb-2" key={key}>
                        <div className="d-flex justify-content-between border-bottom pb-2">
                          <span className="text-muted">{key}</span>
                          <span className="fw-semibold">{value}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                {/* Safety Tips */}
                <div className="bg-light p-3 rounded">
                  <div className="d-flex align-items-center mb-2">
                    <Shield size={16} className="me-2 text-primary" />
                    <span className="fw-semibold">Safety tips</span>
                  </div>
                  <ul className="small text-muted mb-0">
                    <li>Meet in a public place</li>
                    <li>Check the item before you buy</li>
                    <li>Pay only after collecting the item</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column - Seller Info and Actions */}
          <Col lg={4}>
            {/* Seller Information */}
            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                       style={{ width: '50px', height: '50px', backgroundColor: '#002f34' }}>
                    <span className="text-white fw-bold">
                      {product.seller.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h6 className="mb-1 d-flex align-items-center">
                      {product.seller.name}
                      {product.seller.verified && (
                        <Shield size={16} className="ms-2 text-success" />
                      )}
                    </h6>
                    <small className="text-muted">
                      Member since {product.seller.memberSince}
                    </small>
                  </div>
                </div>

                <div className="d-flex align-items-center text-muted mb-4">
                  <Eye size={16} className="me-2" />
                  <span>Usually responds within a few hours</span>
                </div>

                <div className="d-grid gap-2">
                  <Button 
                    variant="success" 
                    size="lg"
                    onClick={() => setShowPhone(!showPhone)}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Phone size={18} className="me-2" />
                    {showPhone ? product.seller.phone : 'Show phone number'}
                  </Button>
                  
                  <Button 
                    variant="outline-primary" 
                    size="lg"
                    className="d-flex align-items-center justify-content-center"
                    style={{ borderColor: '#002f34', color: '#002f34' }}
                  >
                    <MessageCircle size={18} className="me-2" />
                    Chat
                  </Button>
                </div>
              </Card.Body>
            </Card>

            {/* Posted In */}
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h6 className="mb-3">Posted in</h6>
                <div className="d-flex align-items-center">
                  <MapPin size={16} className="me-2 text-primary" />
                  <span>{product.location}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Related Products */}
        <div className="mt-5">
          <h4 className="mb-4" style={{ color: '#002f34' }}>Related ads</h4>
          <Row>
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <Col key={relatedProduct.id} lg={3} md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Link to={`/product/${relatedProduct.id}`} className="text-decoration-none text-dark">
                      <Card.Img 
                        variant="top" 
                        src={relatedProduct.images[0]} 
                        style={{ height: '150px', objectFit: 'cover' }}
                      />
                      <Card.Body className="p-3">
                        <Card.Title className="fs-6 fw-bold mb-1" style={{ color: '#002f34' }}>
                          {formatPrice(relatedProduct.price)}
                        </Card.Title>
                        <Card.Text className="small text-truncate mb-2">
                          {relatedProduct.title}
                        </Card.Text>
                        <small className="text-muted">{relatedProduct.location}</small>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;