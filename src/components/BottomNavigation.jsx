import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { 
  FiHome, 
  FiGrid, 
  FiShoppingCart, 
  FiHeart, 
  FiUser 
} from 'react-icons/fi';

const BottomNavigation = () => {
  return (
    <Navbar 
      fixed="bottom" 
      className="d-md-none bottom-nav border-top bg-white"
      style={{ zIndex: 1000 }}
    >
      <Container>
        <Nav className="w-100 d-flex justify-content-around">
          <Nav.Link href="#" className="text-center p-2 flex-fill">
            <FiHome size={20} className="d-block mx-auto mb-1" />
            <small>Home</small>
          </Nav.Link>
          
          <Nav.Link href="#" className="text-center p-2 flex-fill">
            <FiGrid size={20} className="d-block mx-auto mb-1" />
            <small>Categories</small>
          </Nav.Link>
          
          <Nav.Link href="#" className="text-center p-2 flex-fill position-relative">
            <FiShoppingCart size={20} className="d-block mx-auto mb-1" />
            <Badge 
              bg="danger" 
              className="position-absolute"
              style={{ 
                top: '5px', 
                right: '35%', 
                fontSize: '0.6rem',
                transform: 'translateX(50%)'
              }}
            >
              3
            </Badge>
            <small>Cart</small>
          </Nav.Link>
          
          <Nav.Link href="#" className="text-center p-2 flex-fill position-relative">
            <FiHeart size={20} className="d-block mx-auto mb-1" />
            <Badge 
              bg="danger" 
              className="position-absolute"
              style={{ 
                top: '5px', 
                right: '35%', 
                fontSize: '0.6rem',
                transform: 'translateX(50%)'
              }}
            >
              5
            </Badge>
            <small>Wishlist</small>
          </Nav.Link>
          
          <Nav.Link href="#" className="text-center p-2 flex-fill">
            <FiUser size={20} className="d-block mx-auto mb-1" />
            <small>Account</small>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default BottomNavigation;