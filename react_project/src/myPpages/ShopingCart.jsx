import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../main_component/Header';
import Footer from '../main_component/Footer';
import './plus.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const ShoppingCart = () => {
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Retrieve cart from local storage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('myCart')) || [];
    setCartItems(savedCart);
  }, []);

  // Update total price whenever cartItems changes
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, [cartItems]);

  // Function to remove specific item from the cart
  const deleteFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('myCart', JSON.stringify(updatedCart));
  };
  
  

  // Function to handle buy button (navigates to sign-up page)
  const handleBuy = () => {
    navigate('/SignUp');
  };

  return (
    <div className="shopping-cart-page sin1">
      <Header color="bg-danger" title="Shopping Cart" num={cartItems.length} />

      <div className="container mt-4">
        <h2 className="mb-4">Items in your Cart:</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart text-center">
            <Image
              src="..\public\images\pexels-karolina-grabowska-5632398.jpg" // Add your own cozy/creative image
              alt="Cozy reading"
              fluid
              style={{ maxHeight: '300px', marginBottom: '20px' }} // Style for image
            />
            <h3>Your cart is feeling a little lonely!</h3>
            <p>
              How about browsing some musical instrument to fill it up? Your next adventure awaits.
            </p>
            <button
              className="btn btn-primary mt-3"
              onClick={() => navigate('/Gallery')} // Redirect to the book gallery
            >
              Discover Books
            </button>
          </div>
        ) : (
          <div className="row">
            {cartItems.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm book-card">
                  <img
                    src={item.image_url}
                    className="card-img-top"
                    alt={item.instrument}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.instrument}</h5>
                    <p className="card-text mb-1"><strong>Price:</strong> {item.price} $</p>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-around">
                        {/* Delete Button */}
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteFromCart(item.id)}
                          >
                          Delete
                        </button>

                        {/* Buy Button */}
                        <button
                          className="btn btn-success"
                          onClick={handleBuy}
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <h1 className='bg-success'>Total Price: {totalPrice.toFixed(2)} $</h1>
      <button
        className="btn btn-info  m-lg-5"
        onClick={handleBuy}
      >
        Beyond Payment
      </button>

      <Footer />
    </div>
  );
};

export default ShoppingCart;
