import React from 'react'
import Header from '../main_component/Header'
import { Form, InputGroup, Button } from 'react-bootstrap';
import Footer from '../main_component/Footer'
import { Link } from 'react-router-dom';

const Conection = () => {

  const send = (e) => {

    e.preventDefault();
    console.log("Form submitted!");
  }
  return (
    <div className='sin1 ' >
      <Header color="bg-info" title="Boundless musical instruments" />
      <h1 className='mt-4 text-center' style={{ backgroundColor: '#4caf50', color: 'white' }}>Connect Us!</h1>
      <div className="p-4 d-flex justify-content-center" >
        <form className="p-4 shadow-lg rounded" style={{ maxWidth: '400px', margin: 'auto', backgroundColor: '#c8e6c9' }} onSubmit={send}>
          <div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-text text-muted">Email address</label> 
            <input
              type="email"
              className="form-control border-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              style={{ borderRadius: '8px', backgroundColor: '#eef2f7' }}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1" className="form-text text-muted">Password</label>
            <input
              type="password"
              className="form-control border-0"
              id="exampleInputPassword1"
              placeholder="Password"
              style={{ borderRadius: '8px', backgroundColor: '#eef2f7' }}

            />
          </div>

          <div className="form-check mt-3">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label text-muted" htmlFor="exampleCheck1">
              Check me out
            </label>
            {/* <br/> */}
            <div className='mt-3 text-start'>
            <Link to='/SignUp'>Sign Up</Link>
            </div>

          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Conection