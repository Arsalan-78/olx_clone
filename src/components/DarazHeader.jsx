import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, InputGroup, Button, Badge } from 'react-bootstrap';
import { 
  FiSearch, 
  FiShoppingCart, 
  FiHeart, 
  FiUser, 
  FiBell,
  FiMenu,
  FiMapPin
} from 'react-icons/fi';

const DarazHeader = () => {
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(5);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-light border-bottom py-1">
        <Container>
          <div className="d-flex justify-content-between align-items-center small">
            <div className="d-flex align-items-center">
              <FiMapPin size={14} className="me-1 text-muted" />
              <span className="text-muted">Deliver to: Lahore</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="text-muted">Customer Care</span>
              <span className="text-muted">Track My Order</span>
              <span className="text-muted">Sell on Daraz</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <Navbar className="daraz-header shadow-sm" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-2 daraz-logo">
            Daraz
          </Navbar.Brand>
          
          <div className="flex-grow-1 mx-4 d-none d-lg-block">
            <InputGroup className="search-input">
              <Form.Control
                type="text"
                placeholder="Search in Daraz"
                className="border-0 shadow-none"
                style={{ backgroundColor: '#f5f5f5' }}
              />
              <Button className="daraz-search-btn">
                <FiSearch size={18} />
              </Button>
            </InputGroup>
          </div>

          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#" className="position-relative me-3 d-flex align-items-center">
              <FiUser size={20} className="text-dark" />
              <span className="ms-2 d-none d-md-inline text-dark">Login</span>
            </Nav.Link>
            
            <Nav.Link href="#" className="position-relative me-3">
              <FiHeart size={20} className="text-dark" />
              {wishlistCount > 0 && (
                <Badge 
                  bg="danger" 
                  className="position-absolute top-0 start-100 translate-middle rounded-pill"
                  style={{ fontSize: '0.6rem' }}
                >
                  {wishlistCount}
                </Badge>
              )}
            </Nav.Link>
            
            <Nav.Link href="#" className="position-relative me-3">
              <FiBell size={20} className="text-dark" />
              <Badge 
                bg="danger" 
                className="position-absolute top-0 start-100 translate-middle rounded-pill"
                style={{ fontSize: '0.6rem' }}
              >
                2
              </Badge>
            </Nav.Link>
            
            <Nav.Link href="#" className="position-relative">
              <FiShoppingCart size={20} className="text-dark" />
              {cartCount > 0 && (
                <Badge 
                  bg="danger" 
                  className="position-absolute top-0 start-100 translate-middle rounded-pill"
                  style={{ fontSize: '0.6rem' }}
                >
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Mobile Search */}
      <div className="d-lg-none bg-white border-bottom p-3">
        <InputGroup className="search-input">
          <Form.Control
            type="text"
            placeholder="Search in Daraz"
            className="border-0 shadow-none"
            style={{ backgroundColor: '#f5f5f5' }}
          />
          <Button className="daraz-search-btn">
            <FiSearch size={18} />
          </Button>
        </InputGroup>
      </div>
    </>
  );
};

export default DarazHeader;