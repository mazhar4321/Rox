import React from 'react'
import  SlideImg from '../../assets/slide6-img.webp'
import FaqsImg from '../../assets/faqs.png'
import RoundedIcon from '../../assets/slide-1-graphic-2.png'
import Slide2 from '../../assets/slide-2-graphic-1.png'
import RRR from '../../assets/rrr.png'
import OOO from '../../assets/ooo.png'
import XXX from '../../assets/xxx.png'
import PurpleGradient from '../../assets/gradient-purple-2.png'
function Faqs() {
  return (
    <div className='relative lg:h-screen  h-fit'>
    <div className='absolute w-full h-full z-10 shade'>
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
    <img src={RoundedIcon} className='absolute lg:bottom-0 top-20 right-5 lg:left-1/2 z-20 lg:w-36 w-16' alt='' />
    
    <div className='container mx-auto lg:h-screen h-[55vh] relative'>
    <div className='z-10 absolute left-20 bottom-0 top-32 '>
    <img className=' max-h-full ' src={SlideImg} alt='' />
    <img src={Slide2} className='absolute top-10 left-0 rotate-[65deg] z-20 lg:w-36 w-16' alt='' />
    </div>
    <div className='h-full '>
    <div className='w-full justify-center  uppercase text-white flex flex-col gap-5 items-end z-10  h-full '>
  
    <img className=' z-10 lg:h-[15vh] h-8 ' src={FaqsImg} alt='' />
    </div>
    </div>
    </div>
    </div>
  )
}

export default Faqs
