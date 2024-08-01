import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap-icons/font/bootstrap-icons.css'
import image1 from '../../src/assets/wfnews (2).png'
import image2 from '../../src/assets/wfnews (3).png'
import image3 from '../../src/assets/wfnews (4).png'

function CarouselComponent() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
