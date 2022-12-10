import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousell.css';

const Carousell = () => {
  return (
    <div className="main-carousel">
      <div className="our-product">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100  image-product"
              src="https://www.innokin.com/hubfs/What%20Are%20the%20Different%20Types%20of%20Vapes.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image-product"
              src="https://cdn.shopify.com/s/files/1/2027/3035/files/2205-BG024-VS-Blog-Best-E-liquid-Vape-Flavor-2022.jpg?v=1653428533"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100  image-product"
              src="https://awsimages.detik.net.id/community/media/visual/2020/02/14/a88e39f3-b587-4ac3-8d02-95bd0a909194_169.jpeg?w=700&q=90"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Carousell;
