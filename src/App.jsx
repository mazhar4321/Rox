
import { useRef, useState } from 'react';
import './App.css'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const handleWheel = (e) => {
    if (!isScrolling) {
      setIsScrolling(true);
      setStartY(e.clientY);
      animateScroll();
    }
  };

  const animateScroll = () => {
    const container = containerRef.current;
    const delta = scrollY - startY;

    // Apply momentum effect
    setScrollY(scrollY + delta * 0.9);

    if (Math.abs(delta) > 0.9) {
      requestAnimationFrame(animateScroll);
    } else {
      setIsScrolling(false);
    }
  };

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
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
