import { buyBook } from '../App';
import React, { useContext, useState, useRef, useEffect } from 'react';
import booksjson from '../otherPages/init.json';
import Generifileter from '../otherPages/MyFilter';
import './plus.css';
import Header from '../main_component/Header';
import Footer from '../main_component/Footer';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function Gallery() {
  const [booksarr, setbooksarr] = useState(booksjson);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;
  const [selctoptions, setselctoptions] = useState("genre");
  const [cart, setCart] = useContext(buyBook); // Cart context
  const [showPopover, setShowPopover] = useState(null);
  const popoverRef = useRef(null);

  const data = {
    instrument: ["Piano", "Guitar", "Violin", "Drum", "Flute"],
    price: ["5000", "800", "15000", "1200", "300"],
    brand: ["Yamaha", "Fender", "Stradivarius", "Pearl", "Yamaha"]
  };

  useEffect(() => {
    // To detect clicks outside the popover
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const send = (e) => {
    e.preventDefault();
    console.log("Search initiated with:", search, "and filter:", selctoptions);
    try {
      const filteredArr = Generifileter(booksjson, search, selctoptions);
      console.log("Filtered array:", filteredArr);
      setbooksarr(filteredArr);
    } catch (error) {
      console.error("Error filtering books:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log("Search updated to:", e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    console.log("Changing to page:", pageNumber);
    setCurrentPage(pageNumber);
  };

  const handleAddCart = (obj) => {
    const product = {
      title: obj.instrument,
      img: obj.image_url,
      price: obj.price
    };

    let myCart = JSON.parse(localStorage.getItem('myCart')) || [];
    myCart.push(product);
    localStorage.setItem('myCart', JSON.stringify(myCart));

    setCart((prevCart) => [...prevCart, product]);
    console.log("Added to cart:", product);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = booksarr.slice(indexOfFirstBook, indexOfLastBook);

  const popover = (summary) => (
    <Popover ref={popoverRef} id="popover-basic">
      <Popover.Body>{summary}</Popover.Body>
    </Popover>
  );

  const renderBooks = currentBooks.map((book, index) => (
    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card h-100 shadow-lg border-0 rounded" style={{ width: "100%", height: "380px", overflow: 'hidden' }}>
        <img
          src={book.image_url}
          className="card-img-top rounded-top"
          alt={book.instrument}
          style={{ height: '300px', objectFit: 'cover', borderBottom: '2px solid #ddd' }}
        />
        <div className="card-body d-flex flex-column justify-content-between" style={{ padding: '15px', fontSize: '0.9rem' }}>
          <p className="card-title text-truncate" style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333' }}>{book.instrument}</p>
          <p className="card-text mb-1"><strong>Brand:</strong> {book.brand}</p>
          <p className="card-text mb-1"><strong>Price:</strong> ${book.price}</p>

          <div className="d-flex justify-content-between">
            <OverlayTrigger
              show={showPopover === index}
              trigger="click"
              placement="right"
              overlay={popover(book.summary)}
            >
              <Button
                variant="outline-primary"
                className="btn-sm"
                onClick={() => setShowPopover(showPopover === index ? null : index)}
                style={{ fontSize: '0.85rem', padding: '5px 10px', borderRadius: '20px', transition: 'all 0.3s ease' }}
              >
                Summary
              </Button>
            </OverlayTrigger>

            <Button
              onClick={() => handleAddCart(book)}
              className="btn bg-info btn-outline-primary btn-sm"
              style={{ padding: '5px 10px', fontSize: '0.85rem', borderRadius: '20px', transition: 'all 0.3s ease' }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(booksarr.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => (
    <button
      key={number}
      onClick={() => handlePageChange(number)}
      className={`btn btn-primary mx-1 ${number === currentPage ? 'active' : ''}`}
      title={`Go to page ${number}`}
    >
      {number}
    </button>
  ));

  return (
    <div className="sin1 text-center">
      <Header color="bg-info" title="Boundless Musical Instruments" num={1} />

      {/* Search Form */}
      <div className="d-flex justify-content-center my-4">
        <div className="card w-75">
          <div className="card-body">
            <form onSubmit={send} className="d-flex flex-column flex-md-row justify-content-center align-items-center">
              <input
                type="text"
                placeholder="Search by musical instrument or brand"
                value={search}
                onChange={handleSearchChange}
                className="form-control me-2 mb-2 mb-md-0"
                style={{ width: '300px' }}
              />
              <select
                name="filterBy"
                id="filterBy"
                onChange={(e) => setselctoptions(e.target.value)}
                value={selctoptions}
                className="form-select me-2 mb-2 mb-md-0"
              >
                <option value="brand">brand</option>
                <option value="price">Price</option>
                <option value="instrument">instrument</option>
              </select>
              <select
                onChange={handleSearchChange}
                className="form-select me-2 mb-2 mb-md-0"
              >
                {data[selctoptions]?.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        {renderBooks.length > 0 ? renderBooks : <p>No results found.</p>}
      </div>

      <div className="row mt-4">
        <div className="col d-flex justify-content-center">
          {renderPageNumbers}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Gallery;
