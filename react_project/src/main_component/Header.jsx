import React from 'react';
import { Link } from 'react-router-dom';
import '../myPpages/plus.css';

const Header = (props) => {
  let valueOnInput = "";


  const setValueInput = (e) => {
    valueOnInput = e.target.value;
  };

  const getColor = (num)=>{
   return num === 1 ? '#a5d6a7' : '#c8e6c9';
  };

  return (
    <header className={`text-center py-3 ${props.color} bg-light`} style={{ backgroundColor: '#e8f5e9', borderBottom: '2px solid #4caf50' }}>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center mb-3'>

          <div className="d-flex align-items-center">
          <Link to='/'><img src="public/icon.png" style={{ width: "100px" }} className='myHover' alt="Icon" />
            </Link>
            <h4 className="mx-3 header-title" style={{ color: '#388e3c', marginBottom: 0 }}>{props.title}</h4>
          </div>

          <div className="d-flex align-items-center position-relative">
            <input
              type="text"
              onChange={setValueInput}
              className="form-control me-2"
              placeholder="Search by musical instrument or brand..."
              style={{ width: "500px", borderColor: '#388e3c' }}
            />
            <button className='btn btn-success'>Search</button>
            <Link to='/cart'>
              <i className="fa-solid fa-cart-plus mx-3" style={{ color: '#4caf50' }}></i>
            </Link>
            <Link to='/conection'>
              <i className="fa-regular fa-circle-user" style={{ color: '#4caf50' }}></i>
            </Link>
          </div>
        </div>

        <nav className='d-flex justify-content-center'>
          <Link className='nav-link nav-links mx-3 btn ' style={{width: '100px' , color: '#2e7d32', backgroundColor: getColor(`${props.num}`)  }} to="/">Home</Link>
          <Link className='nav-link nav-links mx-3 btn' style={{width: '100px' , color: '#2e7d32', backgroundColor: getColor(`${props.num}`)  }} to="/gallery">Gallery</Link>
          <Link className='nav-link nav-links mx-3 btn' style={{width: '100px' , color: '#2e7d32', backgroundColor: getColor(`${props.num}`)  }} to="/aboutUS">About Us</Link>
          {/* <Link className='nav-link nav-links mx-3 btn' style={{width: '100px' , color: '#2e7d32', backgroundColor: getColor(`${props.num}`)  }} to="/MySearch">Search</Link> */}
          <Link className='nav-link nav-links mx-3 btn' style={{width: '120px' , color: '#2e7d32', backgroundColor: getColor(`${props.num}`)  }} to="/ShoppingCart">Shopping Cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
