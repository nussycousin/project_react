import React from 'react';
import { useNavigate } from 'react-router-dom';

const Book = (props) => {
  const navigate = useNavigate();

  const navigateToOtherComponent = () => {
    navigate('/aboutUS');
  };

  const addToCart = () => {
    const product = {
      id: props.brand, // Include book ID here
      title: props.instrument,
      img: props.image_url,
      price: props.price 
    };
    
    // Get existing cart or initialize an empty array
    let myCart = JSON.parse(localStorage.getItem('myCart')) || [];
    
    // Add the new product to the cart
    myCart.push(product);
    
    // Save the updated cart to local storage
    localStorage.setItem('myCart', JSON.stringify(myCart));
  };

  const addToFavorite = () => {
    const product = {
      img: props.image_url,
      title: props.instrument,
      price: props.price
    };

    localStorage.setItem('favoriteBook', JSON.stringify(product));
    console.log(localStorage);
  };

  return (
    <div className="card mx-auto my-4 shadow" style={{ width: '200px', height: '380px', borderRadius: '15px' }}>
      <img
        src={props.image_url}
        onClick={navigateToOtherComponent}
        className="card-img-top img-fluid"
        alt="Book"
        style={{
          cursor: 'pointer',
          height: '180px',
          objectFit: 'cover',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px'
        }}
      />
      <div className="card-body d-flex flex-column justify-content-between text-center">
        <div>
          <p className="card-title text-primary">{props.instrument}</p>
          {/* <p className="card-subtitle mb-2 text-muted">{props.authorName}</p> */}
          <p>price: {props.price} $</p>
          <p className="card-text text-truncate">Short description of the instrument to give a teaser.</p>
        </div>
        <div className="d-flex justify-content-center mt-auto">
          <button
            type="button"
            className="btn btn-primary rounded-circle mx-2"
            onClick={() => {
              // alert('Added to cart!');
              addToCart();
            }}
            style={{ width: '40px', height: '40px' }}
          >
            <i className="fa-solid fa-cart-plus"></i>
          </button>
          {/* <button
            type="button"
            className="btn btn-outline-secondary rounded-circle mx-2"
            onClick={() => {
              alert('Added to favorites!');
              addToFavorite();
            }}
            style={{ width: '40px', height: '40px' }}
          >
            <i className="fa-regular fa-heart"></i>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Book;
