import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './main_component/Header';
import AboutUs from './myPpages/AboutUs';
import Gallery from './myPpages/Gallery';
import Serch from './myPpages/MySerch';
import ShopingCart from './myPpages/ShopingCart';
import Conection from './otherPages/Conection';
import Home from './myPpages/Home';
import MySearch from './myPpages/MySerch';
import SignIn from './otherPages/SignUp';

export const buyBook = React.createContext();

function App() {

  
  const [cart, setCart] = useState([]);
  


  return (
    <buyBook.Provider value={[cart, setCart]}>
    <BrowserRouter>
   
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutUS" element={<AboutUs/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/MySearch" element={<MySearch/>} />
          <Route path="/ShoppingCart" element={<ShopingCart/>} />
          <Route path='/cart' element={<ShopingCart/>}/>
          <Route path='/conection' element={<Conection/>}/>
          <Route path='/Signup' element={<SignIn/>} />
        </Routes>
        
        
    </BrowserRouter>
    </buyBook.Provider>
  );
}

export default App;
