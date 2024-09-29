import Header from '../main_component/Header'
import React from 'react'
import './plus.css';
import Book from '../specialComponent/Book'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from '../specialComponent/MyCarousel';
import SaleCarrousel from '../otherPages/SaleCarrousel';
import Footer from '../main_component/Footer';




const Home = () => {
  return (
    <div className='sin1 text-center'>
      <Header color="bg-info" title="Boundless musical instruments" num={1}/>

      {/* <i className="fa-solid fa-heart"></i> */}
      {/* <i className="fa-regular fa-heart"></i> */}
      <MyCarousel />


      <div className="text-center py-5" style={{ background: 'linear-gradient(135deg, #ff7e5f, #feb47b)' }}>
      <h1 className="display-3 text-white fw-bold mb-3">
        Hot Deals
      </h1>
      <p className="lead text-light mb-4">
        Don't miss out on the hottest deals of the season!
      </p>
      <hr className="my-4 border-light" style={{ width: '50%', margin: 'auto' }} />
    </div>

      <div className='d-flex justify-content-between p-3'>
        <SaleCarrousel indexes={[0,1,2,3]} />
        <SaleCarrousel indexes={[4,5,6,7]}/>
        <SaleCarrousel indexes={[8,9,10,11]}/>
        <SaleCarrousel indexes={[12,13,14,15]}/>
        {/* <SaleCarrousel /> */}

      </div>
      <Footer/>
    </div>
  )
}

export default Home