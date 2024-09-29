import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCarousel = () => {
  return (
    <div className='container'>
    <Carousel id="carouselExampleCaptions" style={{ width: '100%' }}>
      <Carousel.Item interval = {2500}>
        <img
          className="d-block w-100"
          src="public\images\pic1.jpeg"
          alt="First slide"
          style={{ height: '300px', objectFit: 'cover' }} // הגדרת הגובה והתאמת התמונה
        />
        <Carousel.Caption>
          <h5>Unmatched Prices</h5>
          <p className='text-danger'>Our prices are significantly lower than the market, offering savings of up to several dozen percent compared to competitors.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item  interval = {2500}>
        <img
          className="d-block w-100"
          src="public\images\pic2.jpg"
          alt="First slide"
          style={{ height: '300px', objectFit: 'cover' }} // הגדרת הגובה והתאמת התמונה
        />
        <Carousel.Caption>
          <h5>For those who truly understand!!</h5>
          <p>Setting gems, gold, and silver in my favorite musical tool.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval = {2500}>
        <img
          className="d-block w-100"
          src="public\images\pic3.jpg"
          alt="Second slide"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>Wowww</h5>
          <p>A combination of masterpieces by renowned artists.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval = {2500}>
        <img
          className="d-block w-100"
          src="public\images\pic4.jpg"
          alt="Third slide"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>Time to dance!</h5>
          <p>We host sexy nature shows across the country.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default MyCarousel