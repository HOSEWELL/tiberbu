import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import AboutUs from '../components/AboutUs';
import Explore from '../components/Explore';

function Home() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Explore/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default Home;
