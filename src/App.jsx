
import { useEffect, useRef, useState } from 'react';
import './App.css'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Lenis from '@studio-freight/lenis';

function App() {
 
  return (
    <div
      // ref={containerRef}
      // onWheel={handleWheel}
      // style={{
      //   width: '100%',
      //   overflowY: 'auto',
      //   border: '1px solid #ccc',
      // }}
    >
   <Navbar/>
   <Home/>
   <Footer/>
   </div>
  )
}

export default App
