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
              className="d-block w-100"
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
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GFWmmC5b2okcUHbdJuGtYZBxg4ughtnMlNJAd1gS2OJegSfPkgrM34P3Ek_KBXbevVs&usqp=CAU"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Carousell;
