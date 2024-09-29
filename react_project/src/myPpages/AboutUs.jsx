import React from 'react';
import './plus.css';
import Header from '../main_component/Header';
import Footer from '../main_component/Footer';

const AboutUs = () => {
  return (
    <div className='sin1 text-center about-container'>
      <Header color="bg-danger" title="Boundless musical instruments" num={1} />
      <div className="about-content container">
        <h2 className="about-title">Our Story</h2>
        <p className="about-description">
        Melody Corner started as a small, independent music shop in a lively neighborhood, founded by three lifelong friends who shared a passion for music. The store first opened in the summer of 2012, with founders, Sarah and Ben, eager to create a space where musicians and music lovers could gather, explore, and connect. The name "Melody Corner" reflects the endless variety of tunes and instruments the shop offers, each representing the limitless creativity that music inspires.        </p>

        <h2 className="about-title">Our Collection</h2>
        <p className="about-description">
        The store quickly became more than just a place to purchase instruments; it evolved into a go-to spot for both beginners and seasoned musicians. Melody Corner offers a thoughtfully curated selection of musical instruments, from guitars and keyboards to violins and drums. They also stock accessories like sheet music, pedals, strings, and recording equipment. Whether you're looking for classic instruments or rare finds, there's something for every musician on their shelves.
        </p>

        <h2 className="about-title">Customer Experience</h2>
        <p className="about-description">
        What truly sets Melody Corner apart is its personalized customer service. Sarah, Ben, and Alex pride themselves on fostering strong relationships with their customers, offering tailored advice whether you're selecting your first instrument or looking for an upgrade. Their team is always ready to assist with passion and expertise. The store regularly hosts music lessons, jam sessions, and live performances, building a vibrant community of musicians within the neighborhood.        </p>

        <h2 className="about-title">Our Mission</h2>
        <p className="about-description">
        Over the years, Melody Corner has grown, but its heart has stayed the same. Sarah and Ben remain as dedicated to music as they were on day one, keeping the shop a welcoming haven for musicians of all kinds. Their mission is simple: to inspire creativity through music and help every customer find their unique sound.        </p>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
