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
import BgImageAnimation from '../../components/Animations/BgImageAnimation'

function DataPlans() {
  return (
    <div className='py-16 flex w-full relative'>
    <div className='absolute w-full h-full z-10 shade'>
    <img className='w-full' src={GreyShade} alt=''/>
    </div>
    <BgImageAnimation/>
    <div className='container relative mx-auto h-screen flex z-10'>

   
    <div className='lg:w-5/6 w-full py-20 flex flex-col lg:items-start items-center  justify-end lg:justify-center lg:gap-5 gap-1 h-full'>
      <h1 className='lg:text-2xl 2xl:text-6xl text-lg uppercase text-white text-center mb-2 lg:mb-0'>  Our Data Plans</h1>
      <img className='w-fit h-8 lg:h-[15vh]' src={Wegot} alt='' />
      <img className="w-fit h-8 lg:h-[15vh]" src={Plans}  alt='' />
      <div className='text-white text-xs lg:text-base 2xl:text-2xl text-center '>
      <p>No more buffering, lagging or <br className='block lg:hidden'/> ‘oye awaaz aa rahi hai?’      </p>
      <p>Our plans will keep you vibing <br className='block lg:hidden'/> all day, every day.      </p>
      </div>
     
      </div>
      <div className='z-10 absolute lg:right-0  bottom-20 right-20'>
      <img className='w-fit max-h-full 2xl:h-[90vh] lg:h-[90vh]' src={Slide} alt='' />
      <img className='absolute top-10 right-10 w-24'  src={Slide1} alt='' />
      <img className='absolute top-44 right-10 w-16'  src={CircleWhite} alt='' />
      </div>
      </div>
    </div>
  )
}

export default DataPlans
