import React from 'react'
import  SlideImg from '../../assets/slide6-img.webp'
import FaqsImg from '../../assets/faqs.webp'
import RoundedIcon from '../../assets/slide-1-graphic-2.png'
import Slide2 from '../../assets/slide-2-graphic-1.png'
import RRR from '../../assets/rrr.png'
import OOO from '../../assets/ooo.png'
import XXX from '../../assets/xxx.png'
import PurpleGradient from '../../assets/gradient-purple-2.png'
import FaqsContent from './FaqsContent'
function Faqs() {
  return (
    <div className='relative lg:h-screen w-full h-fit'>
    <div className='absolute  w-full h-full z-10 shade'>
    <img className='w-full h-full' src={PurpleGradient} alt=''/>
    </div>
    <div className='flex flex-col gap-1 justify-center absolute left-0 h-full z-10'>
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
    <img src={RoundedIcon} className='absolute lg:bottom-0 lg:top-20 top-40 right-1/2 z-20 lg:w-36 w-12' alt='' />
    
    <div className='container mx-auto lg:h-screen h-[55vh] '>
    <div className='z-10 absolute lg:left-20  bottom-0  w-full flex justify-center  lg:justify-start'>
    <img  className='h-[40vh] 2xl:h-[90vh] lg:h-[90vh] object-contain ' src={SlideImg} alt='' />
    <img src={Slide2} className='absolute lg:top-10 top-20 left-0 rotate-[65deg] z-20 lg:w-36 w-12' alt='' />
    </div>
    <div className='lg:flex justify-end items-end items-center h-screen hidden'>
    <div className='z-10 absolute  top-60 right-0 lg:inline-block hidden'>
    <div className='w-full'>
  
    </div>
    </div>
    <FaqsContent/>
    </div>
    </div>
    </div>
  )
}

export default Faqs
