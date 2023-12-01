import React, { useEffect, useRef, useState } from 'react'
import HeroSection from './heroSection'
import './style.css'
import SecondSection from './secondSection'
import Vouchers from './Vouchers'
import Referal from './Referal&Royality'
import DataPlans from './DataPlans'
import Plans from './Plans'
import Faqs from './Faqs'
import Bg from '../../assets/bg-green.jpg'
import FaqsContent from './FaqsContent'
import ApplyNow from './ApplyNow'
import Lenis from '@studio-freight/lenis'
import { useScroll, useTransform , motion, useSpring} from 'framer-motion'


function Home() {
  const [dimension, setDimension] = useState({width:0, height:0});
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', "end start"]
  })
  const { height } = dimension;
  const springProps = useSpring(scrollYProgress, {
    stiffness: 20,
    damping: 15,
    mass: 1,
  });
  const heroZIndex = useTransform(scrollYProgress, [0, 1], [10, 0])
  const backgroundy = useTransform(springProps, [0, 1], [0, -height * 2])
  const y2 = useTransform(springProps, [0, 1], [0, -height * 2.7])
  const y3 = useTransform(springProps, [0, 1], [0, -height * 2.7])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -height * 2.7])
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -height * 2.7])

  useEffect( () => {
    const lenis = new Lenis()
console.log(lenis)
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])
  return (
    <div ref={ref} className='hero-section6'>
    <motion.div id='Hero' className={`hero-section min-h-screen ${heroZIndex.get() === 0 ? 'z-0' : 'z-10'}`} >
    <div className='mx-auto  overflow-hidden'>
    <HeroSection heroZIndex={heroZIndex} />
    </div>
    </motion.div>
    <motion.div style={{y : backgroundy, zIndex: 20}} id='WhyRox' className='hero-section2 min-h-screen'>
    <div className='  mx-auto h-screen overflow-hidden'>
    <SecondSection/>
    </div>
    </motion.div>
    <motion.div style={{y: y2}}  id='VOUCHERANDDISCOUNTS' className='hero-section3 min-h-screen'>
    <div className=' mx-auto h-screen overflow-hidden'>
    <Vouchers/>
    </div>
    </motion.div>
    <motion.div style={{y: y3, heroZIndex:40}} id='REFERALANDROYALITY' className='hero-section4 min-h-screen relative z-10'>
    <div className=' mx-auto h-screen overflow-hidden'>
    <Referal/>
    </div>
    </motion.div>

    <motion.div  className='hero-section6 min-h-screen -mt-[80vh] hidden lg:block'>
    <div className=' '>
    <Plans/>
    </div>
    </motion.div>
    <motion.div  className='hero-section6 min-h-screen -mt-[120vh] lg:hidden overflow-hidden'>
    <div className=' '>
    <DataPlans/>
    </div>
    </motion.div>
    
    <div id='Faqs' className='faqs lg:h-screen h-fit'>
    <div className='mx-auto lg:h-screen h-fit overflow-hidden'>  
    <Faqs/>
    </div>
    </div>
    <div className='faqs h-screen lg:hidden block'>
    <div className='container mx-auto h-screen py-10'>
    <FaqsContent/>
    </div>
    </div>
    <div id='ApplyNow' className='apply-now h-screen'>
    <div className=' mx-auto h-screen overflow-hidden'>
    <ApplyNow/>
    </div>
    </div>
    </div>
      
  
  )
}

export default Home
