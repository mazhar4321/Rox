import React, { useRef } from 'react'
import slide from '../../assets/slide4-img.webp'
import Refer from '../../assets/ref.png'
import Thrive from '../../assets/thrive.png'
import Earn from '../../assets/earn.png'
import BtnIcon from '../../assets/icon-slide-4.png'
import RoundedIcon from '../../assets/slide-1-graphic-2.png'
import Globe from '../../assets/globe.png'
import PurpleGradient from '../../assets/gradient-purple.png'
import Slide1 from '../../assets/slide-2-graphic-1.png'
import BgImageAnimation from '../../components/Animations/BgImageAnimation'
import { motion, easeIn, useInView } from 'framer-motion'
import ImageAnimate from '../../components/Animations/ImageAnimate'
import AnimatedSection from '../../components/Animations/AnimateSection'
import TextAnimate from '../../components/Animations/TextAnimate'
import { MaskText } from '../../components/Animations/MaskText'
function Referal() {
  const slideVariants = {
    hidden: { x: -20 },
    visible: { x: [0, -20, 0, -20, 20, 0], transition: { duration: 10, repeat: Infinity, repeatType: 'yoyo' }, },
  };
  const animation = {
    initial: { opacity: 0, y: "100%", },
    enter: { opacity: 1, y: 0,  }
  };
  const body = useRef(null)
  const isInView = useInView(body)
  const boxVariant = {
    hidden: {
        opacity: 0, //move out of the site
    },
    visible: {
        opacity: 1, // bring it back to nrmal
        transition: {
            when: "beforeChildren", //use this instead of delay
            staggerChildren: 0.75, //apply stagger on the parent tag
        },
    },
  }
  return (
    <div className='relative h-screen '>
    <div className='absolute lg:bottom-0 top-0 lg:h-full h-[50vh] z-10 shade'>
    <img className='w-full h-full' src={PurpleGradient} alt=''/>
    </div>
   <BgImageAnimation/>
    
    <img src={Globe} className='absolute lg:top-28 top-10 lg:right-1 left-10 lg:w-[7vw] w-12 z-30 ' alt='' />
    <div className='z-10 h-screen container relative justify-between flex flex-col lg:flex-row'>
    <div className='h-[50vh] relative lg:static flex justify-center w-full'>
    <div className=' z-10 absolute bottom-0 '>
    <img src={RoundedIcon} className='absolute top-48 lg:w-[7vw] w-12 z-30' alt='' />
    <img  className='absolute lg:top-36 top-40 lg:w-[7vw] w-12 lg:right-20 right-10 z-30 ' src={Slide1} alt='' />
    <ImageAnimate>
    <motion.img
    initial='hidden'
      animate='visible'
      variants={slideVariants}
      whileHover={{ scale: 1.1, cursor: "pointer", transition: { delay: 0.2, ease: easeIn } }}
     className='h-[35vh] lg:h-[90vh] object-contain' src={slide} alt='' />
     </ImageAnimate>
    </div>
    </div>
    <motion.div 
    ref={body}
    variants={boxVariant}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    className='w-full h-[50vh] lg:py-20 py-10 uppercase lg:h-full text-white justify-center flex flex-col lg:gap-5 gap-[0.5vh] lg:items-end items-center '>
  
    <TextAnimate 
    text="REFERRALS & LOYALTY"
    className='text-start font-[TacticSans-bold] text-[6vw] text-[#87348a] lg:text-[2vw] z-10'/> 
    <div className='flex justify-between lg:items-end items-center z-10 flex-col'>
    <div className='overflow-hidden'>
    <motion.img variants={animation} initial="initial" animate={isInView ? "enter" : "initial"} whileInView="enter"
    transition={{
      duration: 0.5,
      delay: 0.5
    }}
     src={Refer} className=' h-12 lg:h-[18vh]' alt=' ' />
     </div>
     <div className='overflow-hidden'>
    <motion.img 
    variants={animation} initial="initial" animate={isInView ? "enter" : "initial"} whileInView="enter"
    transition={{
      duration: 0.5,
      delay: 0.7
    }}
    src={Earn} className=' h-12 lg:h-[18vh]' alt=' ' />
    </div>
    <div className='overflow-hidden'>
    <motion.img variants={animation} initial="initial" animate={isInView ? "enter" : "initial"} whileInView="enter"
    transition={{
      duration: 0.5,
      delay: 0.9
    }} src={Thrive} className='h-12 lg:h-[17vh]' alt=' ' />
    </div>
    </div>
    <div className=''>
    <MaskText parentDelay={1.1} className='mt-2 lg:text-right lg:text-black text-[#87348a] z-10  text-[4vw] text-center lg:text-[1vw]'
    phrases={["Refer friends to ROX, score big points for you and your squad!   "]}
    />
    </div>
    <div className=''>
    <motion.div variants={animation} initial="initial" animate={isInView ? "enter" : "initial"} whileInView="enter"
    transition={{
      duration: 0.5,
      delay: 1.2
    }} className='lg:bg-[#eeea99] bg-[#67519d] w-fit float-right mt-2 flex items-center gap-5 z-10 refer-now   py-0.5'>
    <h1 className='download-rox text-white lg:text-2xl 2xl:text-3xl text-lg '>Refer Now</h1>
    <img  className='w-8 lg:w-fit py-0.5' src={BtnIcon} alt='' />
   
    </motion.div>
    </div>
    </motion.div>
    </div>
    </div>
  )
}

export default Referal
