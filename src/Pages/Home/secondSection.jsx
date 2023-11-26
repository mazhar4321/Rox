import React, { useRef } from 'react'
import slide2 from '../../assets/slide2-img.webp'
import Roxn from '../../assets/rox-n.png'
import Roll from '../../assets/roll.png'
import GooglePlay from '../../assets/google-play.png'
import AppStore from '../../assets/app-store.png'
import SliderGraphic from '../../assets/slide-1-graphic-3.png'
import SliderGraphic2 from '../../assets/slide-2-graphic-1.png'
import SliderGraphic3 from '../../assets/slide-2-graphic-3.png'

import YellowGradient from '../../assets/gradiant-yellow.png'
import BgImageAnimation from '../../components/Animation/BgImageAnimation'
import { motion, useInView } from 'framer-motion'
import { MaskText } from '../../components/Animation/MaskText'

function SecondSection() {

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
};
  const animation = {
    initial: { opacity: 0, y: 100, },
    enter: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.33, 1, 0.68, 1] } }
  };
  const body = useRef(null)
  const isInView = useInView(body, {margin: "-10%"})
  const phrase = ["ROX is a subscription-based digital lifestyle brand that lets",
   "you enjoy the best of both worlds. We’re the digital essentials",
  "toolkit you need to enjoy the real online experience."
  ]
  return (
    <div className='relative h-screen'>
    <div className='absolute w-full h-full z-10 shade'>
    <img className='w-full h-full' src={YellowGradient} alt=''/>
    </div>
    <BgImageAnimation/>
    
    <div>
  
    <img className='absolute bottom-10 left-1/2' src={SliderGraphic3} alt='' />
    </div>
    <div className='container mx-auto '>
    <div className=' z-10 h-screen relative justify-between flex flex-col lg:flex-row'>
    <div className='  z-10 absolute lg:-bottom-10 lg:top-40 top-10 lg:left-0 w-full  z-10'>
    <img className='  max-h-full' src={slide2} alt=''/>
    <img className='absolute top-60 z-20 w-24 -left-3' src={SliderGraphic} alt='' />
    <img className='absolute top-80 left-[580px] z-20 w-24 ' src={SliderGraphic2} alt='' />
    </div>
    <motion.div  variants={boxVariant}
                animate="visible"
                initial="hidden" ref={body} className='w-full h-full float-right lg:py-20 py-10 uppercase text-white flex flex-col justify-end items-center lg:justify-center gap-1 lg:gap-5 lg:items-end '>
      {/* <h1 className='xl:text-xl 2xl:text-4xl text-white text-end font-[TacticSans-bold] text-xl z-10'>Why Rox?</h1> */}
      <MaskText phrases={["why" , "Rox"]} className="xl:text-xl 2xl:text-4xl text-white text-end font-[TacticSans-bold] text-xl z-10" />
      <div  className='z-10 overflow-hidden'>
      <motion.img variants={animation} initial="initial" animate={isInView ? "enter" : "initial"} className='w-fit lg:h-[15vh] h-8' src={Roxn} alt=''/>
      </div>
      <div  className=' z-10 overflow-hidden'>
      <motion.img variants={animation} initial="initial" animate={isInView ? "enter" : "initial"} className='w-fit lg:h-[15vh] h-8' src={Roll} alt=''/>
      </div>
      {/* <div className=''> */}
      {/* <p className='xl:text-xs lg:w-1/2 w-full text-[10px] text-center  2xl:text-base'>ROX is a subscription-based digital lifestyle brand that
      lets you enjoy the best of both worlds. We’re the digital
      essentials toolkit you need to enjoy the real
      online experience.</p> */}
      <MaskText phrases={phrase} className="xl:text-xs  w-full text-[10px] text-center  2xl:text-base"/>
      {/* </div> */}
      <div className=' z-20'>
      <h3  className='text-center download-rox  items-center 2xl:text-xl font-[TacticSans-bold] green-stroke lg:mr-10 mr-0'>DOWNLOAD & ROX NOW</h3>
      </div>
      <div className='flex gap-5 z-10'>
      <img className='h-8 lg:h-12' src={AppStore} alt='' />
      <img className='h-8 lg:h-12' src={GooglePlay} alt='' />
      </div>
      </motion.div>
      </div>
      </div>
    </div>
  )
}

export default SecondSection
