import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FiMonitor, 
  FiShirt, 
  FiHome, 
  FiHeart, 
  FiActivity,
  FiWatch,
  FiTruck,
  FiShoppingCart
} from 'react-icons/fi';
import { categories } from '../data/darazData';

const iconMap = {
  laptop: FiMonitor,
  shirt: FiShirt,
  home: FiHome,
  heart: FiHeart,
  football: FiActivity,
  watch: FiWatch,
  car: FiTruck,
  'shopping-cart': FiShoppingCart
};

const CategoryGrid = () => {
  return (
    <Container className="my-4">
      <h5 className="mb-4 fw-bold">Categories</h5>
      <Row>
        {categories.map(category => {
          const IconComponent = iconMap[category.icon];
          return (
            <Col key={category.id} xs={6} md={3} lg={3} className="mb-3">
              <Card 
                className="h-100 border-0 shadow-sm category-card text-center"
                style={{ cursor: 'pointer' }}
              >
                <Card.Body className="p-3">
                  <div 
                    className="rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center"
                    style={{ 
                      width: '50px', 
                      height: '50px', 
                      backgroundColor: `${category.color}15`,
                      border: `2px solid ${category.color}20`
                    }}
                  >
                    <IconComponent 
                      size={24} 
                      style={{ color: category.color }}
                    />
                  </div>
                  <Card.Title className="fs-6 fw-semibold mb-1">{category.name}</Card.Title>
                  <Card.Text className="text-muted small">{category.count} items</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CategoryGrid;