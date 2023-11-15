import React from 'react'
import Real from  '../../assets/real.png'
import Online1 from '../../assets/online1.png'
import Online2 from '../../assets/online2.png'
import Online3 from '../../assets/online3.png'
import Online4 from '../../assets/online4.png'
import Online5 from '../../assets/online5.png'
import Online6 from '../../assets/online6.png'
import Experience from '../../assets/experience.png'
import BtnIcon from '../../assets/button-icon.png'
import SlideImg from '../../assets/slide1.webp'
import Gradient from '../../assets/gradiant.png'
import RRR from '../../assets/rrr.png'
import OOO from '../../assets/ooo.png'
import XXX from '../../assets/xxx.png'



function HeroSection() {
  
  return (
    <div className=' relative'>
    <div className='absolute lg:bottom-0 hidden lg:block  z-10 shade'>
    <img className='w-full h-full' src={Gradient} alt=''/>
    </div>
   
    <div className='flex flex-col gap-1 justify-center absolute z-10 left-0 h-full'>
    <div className='flex'>
    <img className=' h-[18vh]' src={RRR} alt=''/>
    <img className=' h-[18vh]' src={RRR} alt=''/>
    <img className=' h-[18vh]' src={RRR} alt=''/>
    <img className=' h-[18vh]' src={RRR} alt=''/>
    <img className=' h-[18vh]' src={RRR} alt=''/>
    <img className=' h-[18vh]' src={RRR} alt=''/>
    </div>
    <div className='flex'>
    <img className=' h-[18vh]' src={OOO} alt=''/>
    <img className=' h-[18vh]' src={OOO} alt=''/>
    <img className=' h-[18vh]' src={OOO} alt=''/>
    <img className=' h-[18vh]' src={OOO} alt=''/>
    <img className=' h-[18vh]' src={OOO} alt=''/>
    <img className=' h-[18vh]' src={OOO} alt=''/>
    </div>
    <div className='flex'>
    <img className=' h-[18vh]' src={XXX} alt=''/>
    <img className=' h-[18vh]' src={XXX} alt=''/>
    <img className=' h-[18vh]' src={XXX} alt=''/>
    <img className=' h-[18vh]' src={XXX} alt=''/>
    <img className=' h-[18vh]' src={XXX} alt=''/>
    <img className=' h-[18vh]' src={XXX} alt=''/>
    </div>
    </div>
    <div className='container flex lg:flex-row flex-col flex-col-reverse pb-10 lg:py-0  items-center h-screen  relative'>
    <div className='z-20 relative flex flex-col items-center lg:items-start'>
      <img className='w-fit lg:h-[15vh] h-8' src={Real} alt=''/>
      <div className='flex lg:my-10 my-1'>
      <img className='w-fit lg:h-[15vh] h-8' src={Online1} alt=''/>
      <img className='w-fit lg:h-[15vh] h-8 ' src={Online2} alt=''/>
      <img className='w-fit lg:h-[15vh] h-8 ' src={Online3} alt=''/>
      <img className='w-fit lg:h-[15vh] h-8 ' src={Online4} alt=''/>
      <img className='w-fit lg:h-[15vh] h-8 ' src={Online5} alt=''/>
      <img className='w-fit lg:h-[15vh] h-8' src={Online6} alt=''/>
      </div>
      <img className='w-fit lg:h-[15vh] h-8 lg:my-2 my-1' src={Experience} alt=''/>
      <div className='reveal-now w-fit py-1 my-2 lg:my-5'>
      <h6 className='uppercase text-white lg:text-2xl text-lg refer-btn'>Refer Now</h6>
      <img className='w-8 lg:w-fit' src={BtnIcon} alt=''/>
      </div>
    
      </div>
      <div className='absolute lg:-bottom-10 top-20 lg:right-20 h-5/6  z-10'>
      <img className='w-fit max-h-full' src={SlideImg} alt=''/>
      </div>
      
      </div>
    </div>
  )
}

export default HeroSection
