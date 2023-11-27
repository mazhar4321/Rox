import React from 'react'
import Wegot from '../../assets/we-got.png'
import Plans from '../../assets/plans.png'
import Slide from '../../assets/slide5-img.webp'
import Slide1 from '../../assets/slide-2-graphic-1.png'
import CircleWhite from '../../assets/slide-5-grahpic-3.png'
import GreyShade from '../../assets/grey.png'
import BgImageAnimation from '../../components/Animations/BgImageAnimation'
import { motion, easeIn } from 'framer-motion'
import ImageAnimate from '../../components/Animations/ImageAnimate'
import AnimatedSection from '../../components/Animations/AnimateSection'
import TextAnimate from '../../components/Animations/TextAnimate'


function DataPlans() {
  const slideVariants = {
    hidden: { x: -20 },
    visible: { x: [0, -20, 0, -20, 20, 0], transition: { duration: 10, repeat: Infinity, repeatType: 'yoyo' }, },
  };
  return (
    <div className=' flex w-full relative'>
    <div className='absolute lg:bottom-0 hidden w-full lg:block'>
    <img className='w-full' src={GreyShade} alt=''/>
    </div>
    <div className='absolute lg:bottom-0 top-0 lg:h-full h-[50vh] z-10 shade block lg:hidden'>
    <img className='w-full h-full' src={GreyShade} alt=''/>
    </div>
    <BgImageAnimation/>
    <div className='container relative mx-auto lg:h-screen h-fit overflow-hidden flex flex-col-reverse lg:flex-row z-10'>

   
    <AnimatedSection className='lg:w-full w-full z-20 py-20 flex flex-col lg:items-start items-center justify-center lg:justify-center lg:gap-[3vh] gap-[1vh] h-[50vh] lg:h-full'>
      <TextAnimate text="Our Data Plans"
      className='lg:text-[2vw] text-[6vw] uppercase text-white text-center mb-2 lg:mb-0'/>
      <img className=' h-12 lg:h-[15vh]' src={Wegot} alt='' />
      <img className=" h-12 lg:h-[15vh]" src={Plans}  alt='' />
      <div className='lg:text-black text-white text-[4vw] lg:text-[1.2vw] leading-[120%] text-center '>
      <p>No more buffering, lagging or <br className='block lg:hidden'/> ‘oye awaaz aa rahi hai?’      </p>
      <p>Our plans will keep you vibing <br className='block lg:hidden'/> all day, every day.      </p>
      </div>
     
      </AnimatedSection>
      <div className='h-[50vh] relative lg:static flex justify-center w-full'>
      <div className='z-10 absolute bottom-0'>
      <ImageAnimate>
      <motion.img 
      initial='hidden'
      animate='visible'
      variants={slideVariants}
      whileHover={{ scale: 1.1, cursor: "pointer", transition: { delay: 0.2, ease: easeIn } }}
       className=' h-[40vh] lg:h-[90vh]' src={Slide} alt='' />
       </ImageAnimate>
      <img className='absolute lg:top-10 top-0 lg:right-10 left-6 lg:w-[7vw] w-12'  src={Slide1} alt='' />
      <img className='absolute lg:top-44 top-20  right-10 lg:w-[5vw] w-12'  src={CircleWhite} alt='' />
      </div>
      </div>
      </div>
    </div>
  )
}

export default DataPlans
