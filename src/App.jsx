

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './App.css'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ opacity: scrollY / 1000 }); // Adjust this value based on when you want the animation to start
  }, [scrollY, controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToElement = () => {
    const element = document.getElementById('targetElement'); // Replace 'targetElement' with your target element's ID
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        width: '100%',
        overflowY: 'auto',
        border: '1px solid #ccc',
      }}
    >
   <Navbar/>
   <Home/>
   <Footer/>
   </div>
  )
}

export default App
