import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5 className="mb-3">POPULAR CATEGORIES</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Cars</a></li>
              <li><a href="#" className="text-light text-decoration-none">Flats for rent</a></li>
              <li><a href="#" className="text-light text-decoration-none">Mobile Phones</a></li>
              <li><a href="#" className="text-light text-decoration-none">Jobs</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="mb-3">TRENDING SEARCHES</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Bikes</a></li>
              <li><a href="#" className="text-light text-decoration-none">Watches</a></li>
              <li><a href="#" className="text-light text-decoration-none">Books</a></li>
              <li><a href="#" className="text-light text-decoration-none">Dogs</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="mb-3">ABOUT US</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">About OLX Group</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">OLXPeople</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="mb-3">OLX</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Help</a></li>
              <li><a href="#" className="text-light text-decoration-none">Sitemap</a></li>
              <li><a href="#" className="text-light text-decoration-none">Legal & Privacy</a></li>
              <li><a href="#" className="text-light text-decoration-none">Vulnerability Disclosure</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0">&copy; 2025 OLX Clone. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0">Follow us on social media</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;