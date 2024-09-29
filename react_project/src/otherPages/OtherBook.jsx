import React from 'react';

function OtherBook(props) {
  return (
    <div style={{width: "100px", height: "200px"}} className="card border-light p-3 mb-4 bg-white">
      <img 
        className="card-img-top img-fluid rounded" 
        src={props.src} 
        alt={props.image_url} 
        style={{ height: '15rem', objectFit: 'cover' }} 
      />
      <div className="card-body">
        <h2 className="card-title h4 text-dark">{props.instrument}</h2>
        <h3 className="h6 text-primary">by {props.brand}</h3>
        {/* <p className="text-muted small">{props.publishing_year}</p> */}
        <h3 className="h6 text-info">Price: ${props.price}</h3>
        <p className="card-text text-secondary">{props.description}</p>
        <p className="card-text text-secondary">Genre: {props.image_url}</p>
        <button
          onClick={props.handleAddCart}
          className="btn btn-info text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default OtherBook;
