import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { banners } from '../data/darazData';

const HeroBanner = () => {
  return (
    <Container className="my-4">
      <Carousel className="hero-carousel" interval={4000}>
        {banners.map(banner => (
          <Carousel.Item key={banner.id}>
            <div 
              className="carousel-slide d-flex align-items-center justify-content-center position-relative"
              style={{
                height: '250px',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${banner.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                overflow: 'hidden'
              }}
            >
              <div className="text-center text-white">
                <h2 className="fw-bold mb-2">{banner.title}</h2>
                <p className="fs-5 mb-3">{banner.subtitle}</p>
                <button className="btn btn-light btn-lg px-4 fw-semibold">
                  {banner.cta}
                </button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default HeroBanner;