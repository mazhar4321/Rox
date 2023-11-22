import React from 'react'
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

function Home() {
  return (
    <div>
    <div id='Hero' className='hero-section h-screen' >
    <div className='mx-auto  overflow-hidden'>
    <HeroSection/>
    </div>
    </div>
    <div id='WhyRox' className='hero-section2 h-screen'>
    <div className='  mx-auto h-screen overflow-hidden'>
    <SecondSection/>
    </div>
    </div>
    <div id='VOUCHERANDDISCOUNTS' className='hero-section3 h-screen'>
    <div className=' mx-auto h-screen overflow-hidden'>
    <Vouchers/>
    </div>
    </div>
    <div id='REFERALANDROYALITY' className='hero-section4 h-screen'>
    <div className=' mx-auto h-screen overflow-hidden'>
    <Referal/>
    </div>
    </div>
    <div id='OURDATAPLANS' className='hero-section5 '>
    <div className='mx-auto lg:h-screen h-fit overflow-hidden'>
    <DataPlans/>
    </div>
    </div>
    <div className='hero-section6'>
    <div className='container '>
    <Plans/>
    </div>
    </div>
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
