import React from 'react'
import Wegot from '../../assets/we-got.png'
import Plans from '../../assets/plans.png'

import Slide from '../../assets/slide5-img.webp'
import Slide1 from '../../assets/slide-2-graphic-1.png'
import CircleWhite from '../../assets/slide-5-grahpic-3.png'
import RRR from '../../assets/rrr.png'
import OOO from '../../assets/ooo.png'
import XXX from '../../assets/xxx.png'
import GreyShade from '../../assets/grey.png'

function DataPlans() {
  return (
    <div className='py-16 flex w-full relative'>
    <div className='absolute w-full h-full z-10 shade'>
    <img className='w-full' src={GreyShade} alt=''/>
    </div>
    <div className='flex flex-col gap-1 justify-center absolute left-0 top-36'>
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
    <div className='container mx-auto h-screen flex z-10'>

   
    <div className='lg:w-5/6 w-full py-20 flex flex-col lg:items-start items-center justify-end lg:justify-start lg:gap-5 gap-1 h-full'>
      <h1 className='lg:text-3xl text-lg uppercase text-white text-center mb-2 lg:mb-0'>  Our Data Plans</h1>
      <img className='w-fit h-8 lg:h-[15vh]' src={Wegot} alt='' />
      <img className="w-fit h-8 lg:h-[15vh]" src={Plans}  alt='' />
      <div className='text-white text-xs lg:text-lg text-center '>
      <p>No more buffering, lagging or <br className='block lg:hidden'/> ‘oye awaaz aa rahi hai?’      </p>
      <p>Our plans will keep you vibing <br className='block lg:hidden'/> all day, every day.      </p>
      </div>
     
      </div>
      <div className='z-10 absolute lg:right-0  bottom-0 lg:top-20 top-32'>
      <img className='max-h-full' src={Slide} alt='' />
      <img className='absolute top-10 right-10 w-24'  src={Slide1} alt='' />
      <img className='absolute top-44 right-10 w-16'  src={CircleWhite} alt='' />
      </div>
      </div>
    </div>
  )
}

export default DataPlans
