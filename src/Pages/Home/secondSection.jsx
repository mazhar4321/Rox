import React from 'react'
import slide2 from '../../assets/slide2-img.webp'
import Roxn from '../../assets/rox-n.webp'
import Roll from '../../assets/roll.webp'
import GooglePlay from '../../assets/google-play.webp'
import AppStore from '../../assets/app-store.webp'
import SliderGraphic from '../../assets/slide-1-graphic-3.png'
import SliderGraphic2 from '../../assets/slide-2-graphic-1.png'
import SliderGraphic3 from '../../assets/slide-2-graphic-3.png'
import YellowGradient from '../../assets/gradiant-yellow.png'
import QRCode from '../../assets/qr-code-new.png'
import RoxNRoll from '../../assets/rox-n-roll-mob.png'
import ImageAnimation from '../../components/Animations/BgImageAnimation'
import { easeIn, motion } from 'framer-motion'

function SecondSection() {
  const slideVariants = {
    hidden: { x: -20 },
    visible: { x: [0, -20, 0, -20, 20, 0], transition: { duration: 10, repeat: Infinity, repeatType: 'yoyo' }, },
  };
  return (
    <div className='relative h-screen overflow-hidden'>
      <div className='absolute lg:bottom-0 top-0 lg:h-full h-[50vh]  z-10 shade'>
        <img className='lg:w-full w-[120%]  h-full' src={YellowGradient} alt='' />
      </div>
      <ImageAnimation />

      <div>

        <img className='absolute bottom-10 left-1/2 hidden lg:block z-30' src={SliderGraphic3} alt='' />
      </div>
      <div className='container mx-auto overflow-hidden'>
        <div className=' z-10 h-screen relative justify-between flex flex-col lg:flex-row'>
        <div className='h-[50vh] lg:h-screen lg:static relative flex justify-center items-center'>
          <div className='z-10 absolute left-0 mt-2 bottom-0  w-full flex justify-center lg:justify-start'>
            <motion.img initial='hidden'
            animate='visible'
            variants={slideVariants}
            whileHover={{ scale: 1.1, cursor: "pointer", transition: { delay: 0.2, ease: easeIn } }}
             className='lg:h-[90vh] object-contain h-[37vh]  ' src={slide2} alt='' />
            <img className='absolute lg:top-60 z-20 lg:w-24 lg:-left-3 right-0 w-14 top-28' src={SliderGraphic} alt='' />
            <img className='absolute top-0 lg:top-80 lg:left-[580px] left-0 z-20 lg:w-24 w-12' src={SliderGraphic2} alt='' />
          </div>
          </div>
          <div className='w-full lg:h-full h-[50vh] float-right lg:py-20 py-10 uppercase text-white flex flex-col justify-center items-center lg:justify-center gap-1 lg:gap-5 lg:items-end '>
            <h1 className=' text-white text-end font-[TacticSans-bold] text-xl z-10 2xl:text-3xl lg:text-2xl text-sm'>Why Rox?</h1>
           <div className='hidden lg:block'>
            <div className='z-10'>
              <img className='lg:h-[15vh] h-8' src={Roxn} alt='' />
            </div>
            <div className=' z-10 flex justify-end mt-2'>
              <img className='lg:h-[15vh] h-8' src={Roll} alt='' />
            </div>
            </div>
            <div className='lg:hidden block'>
            <img src={RoxNRoll} alt=''/>
            </div>
            <div className='font-[TacticSans-bold]  text-xs text-end z-10 flex items-end justify-end'>
              <p className='xl:text-xs lg:w-1/2 w-full text-[10px] text-black text-center lg:text-end 2xl:text-base lg:text-sm xl:text-base'>
              ROX is a subscription-based digital lifestyle brand that
                lets you enjoy the best of both worlds. We’re the digital
                essentials toolkit you need to enjoy the real
                online experience.
                </p>
            </div>
            <div className='flex justify-center w-[25%]'>
            <img className='lg:w-20 w-16' src={QRCode} alt=''/>
            </div>
            <div  className='flex justify-center lg:w-[25%] '>
            <h6 className='text-center download-rox  items-center 2xl:text-2xl lg:text-xl font-[TacticSans-bold] green-stroke  mr-0'>OR</h6>
            </div>
            <div className='flex gap-5 z-10'>
              <img className='h-8 lg:h-12 2xl:h-12' src={AppStore} alt='' />
              <img className='h-8 lg:h-12 2xl:h-12' src={GooglePlay} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
