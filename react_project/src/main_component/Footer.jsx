import React from 'react';

function Footer(props) {
  return (
    <div className="bg-success bg-gradient text-white p-5 d-flex flex-column flex-md-row justify-content-around">
      <div className="text-center mb-4 mb-md-0">
        <h2 className="text-warning mb-2">Opening Times</h2>
        <ul className="list-unstyled">
          <li>Monday: 09:00 - 17:00</li>
          <li>Tuesday: 09:00 - 17:00</li>
          <li>Wednesday: 09:00 - 17:00</li>
          <li>Thursday: 09:00 - 17:00</li>
          <li>Friday: 09:00 - 17:00</li>
          <li>Saturday: 10:00 - 15:00</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>

      <div className="text-center mb-4 mb-md-0">
        <h2 className="text-warning mb-2">Contact Us</h2>
        <p>Address: 123 Main St, City, State, Zip</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@example.com</p>
      </div>

      <div className="text-center">
        <h2 className="text-warning mb-2">Follow Us</h2>
        <div className="d-flex justify-content-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-github fa-3x"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-facebook fa-3x"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-twitter fa-3x"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-instagram fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
