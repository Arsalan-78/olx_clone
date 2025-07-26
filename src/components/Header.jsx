import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, InputGroup, Button, Dropdown } from 'react-bootstrap';
import { Search, MapPin, Plus, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cities } from '../data/products';

const Header = ({ searchTerm, setSearchTerm, selectedCity, setSelectedCity }) => {
  const [showCities, setShowCities] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-light border-bottom py-2">
        <Container>
          <div className="d-flex justify-content-between align-items-center small">
            <div className="d-flex align-items-center">
              <MapPin size={16} className="me-2 text-primary" />
              <Dropdown show={showCities} onToggle={setShowCities}>
                <Dropdown.Toggle variant="link" className="p-0 text-decoration-none text-dark border-0 bg-transparent">
                  {selectedCity} <i className="fas fa-chevron-down ms-1"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {cities.map(city => (
                    <Dropdown.Item 
                      key={city} 
                      onClick={() => {
                        setSelectedCity(city);
                        setShowCities(false);
                      }}
                      active={city === selectedCity}
                    >
                      {city}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3">Help</span>
              <User size={16} className="me-2" />
              <span>Login</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Navbar bg="white" expand="lg" className="border-bottom shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-2" style={{ color: '#002f34' }}>
            OLX
          </Navbar.Brand>
          
          <div className="flex-grow-1 mx-4">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Find Cars, Mobile Phones and more..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-2"
                style={{ borderColor: '#002f34' }}
              />
              <Button variant="dark" style={{ backgroundColor: '#002f34', borderColor: '#002f34' }}>
                <Search size={20} />
              </Button>
            </InputGroup>
          </div>

          <Nav className="ms-auto">
            <Button 
              variant="outline-dark" 
              className="me-3 d-flex align-items-center"
              style={{ borderColor: '#002f34', color: '#002f34' }}
            >
              <Plus size={16} className="me-2" />
              SELL
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;