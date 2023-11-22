import React from 'react'
import Wegot from '../../assets/we-got.webp'
import Plans from '../../assets/plans.webp'
import Slide from '../../assets/slide5-img.webp'
import Slide1 from '../../assets/slide-2-graphic-1.png'
import CircleWhite from '../../assets/slide-5-grahpic-3.png'
import GreyShade from '../../assets/grey.png'
import BgImageAnimation from '../../components/Animations/BgImageAnimation'
import { motion, easeIn } from 'framer-motion'


function DataPlans() {
  const slideVariants = {
    hidden: { x: -20 },
    visible: { x: [0, -20, 0, -20, 20, 0], transition: { duration: 10, repeat: Infinity, repeatType: 'yoyo' }, },
  };
  return (
    <div className=' flex w-full relative'>
    <div className='absolute lg:bottom-0 hidden lg:block'>
    <img className='w-full' src={GreyShade} alt=''/>
    </div>
    <div className='absolute lg:bottom-0 top-0 lg:h-full h-[50vh] z-10 shade block lg:hidden'>
    <img className='w-full h-full' src={GreyShade} alt=''/>
    </div>
    <BgImageAnimation/>
    <div className='container relative mx-auto lg:h-screen h-fit overflow-hidden flex flex-col-reverse lg:flex-row z-10'>

   
    <div className='lg:w-full hidden lg:block w-full z-20 py-20 flex flex-col lg:items-start items-center justify-center lg:justify-center lg:gap-4 gap-1 h-[50vh] lg:h-full'>
      <h1 className='lg:text-2xl 2xl:text-3xl text-lg uppercase text-white text-center mb-2 lg:mb-0'>  Our Data Plans</h1>
      <img className=' h-8 lg:h-[15vh]' src={Wegot} alt='' />
      <img className=" h-8 lg:h-[15vh]" src={Plans}  alt='' />
      <div className='text-black text-xs lg:text-base 2xl:text-xl text-center '>
      <p>No more buffering, lagging or <br className='block lg:hidden'/> ‘oye awaaz aa rahi hai?’      </p>
      <p>Our plans will keep you vibing <br className='block lg:hidden'/> all day, every day.      </p>
      </div>
     
      </div>
      <div className='h-[50vh] relative lg:static flex justify-center w-full'>
      <div className='z-10 absolute bottom-0'>
      <motion.img 
      initial='hidden'
      animate='visible'
      variants={slideVariants}
      whileHover={{ scale: 1.1, cursor: "pointer", transition: { delay: 0.2, ease: easeIn } }}
       className=' h-[40vh] lg:h-[90vh]' src={Slide} alt='' />
      <img className='absolute lg:top-10 top-0 lg:right-10 left-6 lg:w-24 w-12'  src={Slide1} alt='' />
      <img className='absolute lg:top-44 top-20  right-10 lg:w-16 w-12'  src={CircleWhite} alt='' />
      </div>
      </div>
      </div>
    </div>
  )
}

export default DataPlans
