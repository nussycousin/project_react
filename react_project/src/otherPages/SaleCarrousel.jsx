import React from 'react';
import { Carousel } from 'react-bootstrap';
import Book from '../specialComponent/Book';
import arr from './sale.json';

const SaleCarrousel = ({ indexes }) => {
  return (
    <div style={{ maxWidth: "200px", maxHeight: "500px" }}>
      <Carousel data-bs-theme="dark" interval={3000}>
        {indexes.map((index) => (
          <Carousel.Item key={index}>
            <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Book picture={arr[index].image_url} bookTitle={arr[index].instrument} AuthorName={arr[index].brand} price={arr[index].price} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SaleCarrousel;
