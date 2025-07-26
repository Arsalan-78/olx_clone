import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  Smartphone, 
  Car, 
  Home, 
  Key, 
  Tv, 
  Bike, 
  Briefcase, 
  Wrench 
} from 'lucide-react';
import { categories } from '../data/products';

const iconMap = {
  phone: Smartphone,
  truck: Car,
  house: Home,
  key: Key,
  tv: Tv,
  bicycle: Bike,
  briefcase: Briefcase,
  wrench: Wrench
};

const CategorySection = ({ setSelectedCategory }) => {
  return (
    <Container className="my-4">
      <h4 className="mb-4" style={{ color: '#002f34' }}>Browse categories</h4>
      <Row>
        {categories.map(category => {
          const IconComponent = iconMap[category.icon];
          return (
            <Col key={category.id} lg={3} md={4} sm={6} className="mb-3">
              <Card 
                className="h-100 border-0 shadow-sm category-card"
                onClick={() => setSelectedCategory(category.name)}
                style={{ cursor: 'pointer' }}
              >
                <Card.Body className="text-center p-3">
                  <IconComponent 
                    size={32} 
                    className="mb-2 text-primary" 
                    style={{ color: '#23e5db' }}
                  />
                  <Card.Title className="fs-6 fw-normal mb-1">{category.name}</Card.Title>
                  <Card.Text className="text-muted small">{category.count} ads</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CategorySection;