import React from 'react'
import slide from '../../assets/slide4-img.webp'
import Refer from '../../assets/ref.webp'
import Thrive from '../../assets/thrive.webp'
import Earn from '../../assets/earn.webp'
import BtnIcon from '../../assets/icon-slide-4.png'
import RoundedIcon from '../../assets/slide-1-graphic-2.png'
import Globe from '../../assets/globe.png'
import PurpleGradient from '../../assets/gradient-purple.png'
import Slide1 from '../../assets/slide-2-graphic-1.png'
import BgImageAnimation from '../../components/Animations/BgImageAnimation'
import { motion, easeIn } from 'framer-motion'
function Referal() {
  const slideVariants = {
    hidden: { x: -20 },
    visible: { x: [0, -20, 0, -20, 20, 0], transition: { duration: 10, repeat: Infinity, repeatType: 'yoyo' }, },
  };
  return (
    <div className='relative h-screen '>
    <div className='absolute lg:bottom-0 top-0 lg:h-full h-[50vh] z-10 shade'>
    <img className='w-full h-full' src={PurpleGradient} alt=''/>
    </div>
   <BgImageAnimation/>
    
    <img src={Globe} className='absolute lg:top-28 top-10 lg:right-1 left-10 lg:w-28 w-12 z-30 ' alt='' />
    <div className='z-10 h-screen container relative justify-between flex flex-col lg:flex-row'>
    <div className='h-[50vh] relative lg:static flex justify-center w-full'>
    <div className=' z-10 absolute bottom-0 '>
    <img src={RoundedIcon} className='absolute top-48 lg:w-28 w-12 z-30' alt='' />
    <img  className='absolute lg:top-36 top-40 lg:w-24 w-12 lg:right-20 right-10 z-30 ' src={Slide1} alt='' />
    <motion.img
    initial='hidden'
      animate='visible'
      variants={slideVariants}
      whileHover={{ scale: 1.1, cursor: "pointer", transition: { delay: 0.2, ease: easeIn } }}
     className='h-[40vh] lg:h-[90vh]' src={slide} alt='' />
    </div>
    </div>
    <div className='w-full h-[50vh] lg:py-20 py-10 uppercase lg:h-full text-white justify-center flex flex-col lg:gap-5 gap-1 lg:items-end items-center '>
  
    <h1 className='text-start font-[TacticSans-bold] text-base text-[#87348a] lg:text-2xl 2xl:text-3xl z-10'>REFERRALS & LOYALTY   </h1>
    <div className='flex justify-between lg:items-end items-center z-10 flex-col'>
    <img src={Refer} className=' h-8 lg:h-[18vh]' alt=' ' />
    <img src={Earn} className=' h-8 lg:h-[18vh]' alt=' ' />
    <img src={Thrive} className='h-8 lg:h-[17vh]' alt=' ' />
    </div>
    <p className='mt-2 lg:text-right text-black z-10 2xl:text-base text-xs text-center lg:text-base'>Refer friends to ROX, score big points for you and your squad!    </p>
    <div className='lg:bg-[#eeea99] bg-[#67519d] w-fit float-right mt-2 flex items-center gap-5 z-10 refer-now   py-0.5'>
    <h1 className='download-rox text-white lg:text-2xl 2xl:text-3xl text-lg '>Refer Now</h1>
    <img  className='w-8 lg:w-fit py-0.5' src={BtnIcon} alt='' />
   
    </div>
    </div>
    </div>
    </div>
  )
}

export default Referal
