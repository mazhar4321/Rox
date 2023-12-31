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
    <div className='hero-section h-screen' >
    <div className='mx-auto  overflow-hidden'>
    <HeroSection/>
    </div>
    </div>
    <div className='hero-section2 h-screen'>
    <div className='  mx-auto h-screen overflow-hidden'>
    <SecondSection/>
    </div>
    </div>
    <div className='hero-section3 h-screen'>
    <div className=' mx-auto h-screen overflow-hidden'>
    <Vouchers/>
    </div>
    </div>
    <div className='hero-section4 h-screen'>
    <div className=' mx-auto h-screen overflow-hidden'>
    <Referal/>
    </div>
    </div>
    <div className='hero-section5 h-screen'>
    <div className='mx-auto h-screen overflow-hidden'>
    <DataPlans/>
    </div>
    </div>
    <div className='hero-section6 h-screen relative overflow-hidden'>
    <img className='absolute left-0 right-0 top-0 bottom-0 w-full'  src={Bg} alt='' />
    <div className='container mx-auto flex h-screen '>
    <Plans/>
    </div>
    </div>
    <div className='faqs lg:h-screen h-fit'>
    <div className='mx-auto lg:h-screen h-fit overflow-hidden'>  
    <Faqs/>
    </div>
    </div>
    <div className='faqs h-screen'>
    <div className='container mx-auto h-screen py-10'>
    <FaqsContent/>
    </div>
    </div>
    <div className='apply-now h-screen'>
    <div className=' mx-auto h-screen py-10 overflow-hidden'>
    <ApplyNow/>
    </div>
    </div>
    </div>
      
  
  )
}

export default Home
