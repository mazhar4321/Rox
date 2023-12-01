import React, { useEffect, useRef, useState } from 'react'
import slide2 from '../../assets/slide2-img.webp'
import slide2Mob from '../../assets/slide2-img-m.webp'
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
import Overlay from '../../assets/img-overlay-green.png'
import ImageAnimation from '../../components/Animations/BgImageAnimation'
import { easeIn, motion, useInView, useScroll, useSpring, useTransform, } from 'framer-motion'
import TextAnimate from '../../components/Animations/TextAnimate'
import AnimatedSection from '../../components/Animations/AnimateSection'
import ImageAnimate from '../../components/Animations/ImageAnimate'
import { MaskText } from '../../components/Animations/MaskText'

function SecondSection() {
  const boxVariant = {
    hidden: {
      opacity: 0, //move out of the site
    },
    visible: {
      opacity: 1, // bring it back to nrmal
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.75,
      },
    },
  };
  const animation = {
    initial: { opacity: 0, y: 100, },
    enter: { opacity: 1, y: 0, }
  };
  const Storeanimation = {
    initial: { opacity: 0, x: "100%", },
    enter: { opacity: 1, x: 0, }
  };
  const body = useRef(null)
  const isInView = useInView(body)
  const phrase = ["ROX is a subscription-based digital lifestyle brand that lets",
    "you enjoy the best of both worlds. We’re the digital essentials",
    "toolkit you need to enjoy the real online experience."
  ]
  const slideVariants = {
    hidden: { x: -20 },
    visible: { x: [0, -20, 0, -20, 20, 0], transition: { duration: 10, repeat: Infinity, repeatType: 'yoyo' }, },
  };

  const { scrollYProgress } = useScroll();
  const springProps = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 30,
    mass: 1.5,
  });
  const yPosAnim = useTransform(springProps, [0, 0.2], [0, -500],)

  const ref = useRef(null)
  const isInViewshadw = useInView(ref, { amount: 0.7, once: true },)
  const shadeAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }

  return (
    <div ref={ref} className='relative h-screen overflow-hidden z-30'>
      <motion.div
        variants={shadeAnimation}
        initial="initial"
        animate={isInViewshadw ? "visible" : "hidden"}
        className='absolute lg:bottom-0 top-0 lg:h-full h-[50vh]    shade'>
        <img className='lg:w-full w-[150%]  h-full' src={YellowGradient} alt='' />
      </motion.div>

      <ImageAnimation />
      <img src={Overlay} className='lg:hidden absolute top-[40vh] z-20 w-full' alt='' />
      <motion.div
      >

        <motion.img style={{ y: yPosAnim }} className='absolute h-[5vh] bottom-10 left-1/2 hidden lg:block z-30' src={SliderGraphic3} alt='' />
      </motion.div>
      <div className='container mx-auto overflow-hidden'>
        <div className=' z-10 h-screen relative justify-between flex flex-col lg:flex-row'>
          <div className='h-[50vh] lg:h-screen lg:static relative flex justify-center items-center'>
            <div className='lg:z-10 hidden lg:block z-50 absolute lg:-left-10 mt-2 bottom-0 m  w-full flex justify-center lg:justify-start'>
              <ImageAnimate>
                <motion.img initial='hidden'
                  animate='visible'
                  variants={slideVariants}
                  whileHover={{ scale: 1.1, cursor: "pointer", transition: { delay: 0.2, ease: [0.33, 1, 0.68, 1] } }}
                  className='lg:h-[90vh] object-contain h-[35vh]  ' src={slide2} alt='' />
              </ImageAnimate>
              <motion.img
                style={{ y: yPosAnim }}
                initial='hidden'
                className='absolute lg:top-60 z-20 lg:w-[7vw] lg:-left-3 right-0 w-14 top-28'
                src={SliderGraphic}
                alt=''
              />
              <motion.img
                style={{ y: yPosAnim }}
                initial='hidden'
                className='absolute top-0 lg:top-[24vh] lg:left-[32vw] left-0 z-20 lg:w-[7vw] w-12'
                src={SliderGraphic2}
                alt=''
              />
            </div>
            <div className='lg:z-10 z-50 lg:hidden m  w-full '>
              <ImageAnimate>
                <motion.img initial='hidden'
                  animate='visible'
                  variants={slideVariants}
                  whileHover={{ scale: 1.1, cursor: "pointer", transition: { delay: 0.2, ease: [0.33, 1, 0.68, 1] } }}
                  className='lg:h-[90vh] absolute bottom-0 object-contain max-h-[90%] left-0' src={slide2} alt='' />
              </ImageAnimate>
              <motion.img
                initial='hidden'
                style={{ y: yPosAnim }}
                className='absolute lg:top-60 z-20 lg:w-[7vw] lg:-left-3 right-0 w-14 top-28'
                src={SliderGraphic}
                alt=''
              />
              <motion.img
                initial='hidden'
                className='absolute top-0 lg:top-[24vh] lg:left-[32vw] left-0 z-20 lg:w-[7vw] w-12'
                src={SliderGraphic2}
                alt=''
              />
            </div>
          </div>
          <motion.div
            variants={boxVariant}
            animate="visible"
            initial="hidden"
            ref={body}

            className='w-full overflow-hidden lg:h-full h-[50vh] float-right lg:py-20 py-10 uppercase text-white flex flex-col justify-center items-center lg:justify-center gap-[0.5vh] lg:gap-[3.2vh] lg:items-end '>

            <TextAnimate className='text-white text-end font-[TacticSans-bold] text-xl lg:text-[2vw] text-[6vw] z-30' text="Why Rox" />

            <div className='hidden lg:block'>
              <div className='z-10 overflow-hidden'>
                <motion.img variants={animation} initial="initial" whileInView={isInView ? "enter" : "initial"}
                  transition={{
                    duration: 0.3,
                    delay: 0.3
                  }}
                  className='lg:h-[15vh] h-8' src={Roxn} alt='' />
              </div>
              <div className=' z-10 flex justify-end mt-2 overflow-hidden'>
                <motion.img variants={animation} initial="initial" whileInView={isInView ? "enter" : "initial"}
                  transition={{
                    duration: 0.3,
                    delay: 0.4
                  }}
                  className='lg:h-[15vh] h-8' src={Roll} alt='' />
              </div>
            </div>
            <div className='lg:hidden block overflow-hidden'>
              <motion.img
                variants={animation} initial="initial" animate={isInView ? "enter" : "initial"}
                transition={{
                  duration: 0.3,
                  delay: 0.5
                }}

                src={RoxNRoll} alt='' />
            </div>
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                when: "beforeChildren"
              }}
              className='font-[TacticSans-bold] text-xs text-end z-10 flex items-end justify-end hidden lg:block'
            >
              <MaskText
                phrases={phrase}
                parentDelay={0.3}
                className='w-full text-[3vw] md:text-xs text-black text-center lg:text-end lg:text-[1vw] leading-[150%]'
              />
            </motion.div>
            <div className='font-[TacticSans-bold]  text-xs text-end z-10 flex items-end justify-end lg:hidden overflow-hidden'>
              <MaskText parentDelay={0.6} className='  w-full text-[3vw] md:text-xs text-black text-center lg:text-end lg:text-[1vw]'
                phrases={[" ROX is a subscription-based digital lifestyle brand that lets you  enjoy the best of both worlds. We’re the digital essentials toolkit  you need to enjoy the real online experience."]}
              />

            </div>
            <motion.div  initial={{x:"100%"}} whileInView={{x:0}} transition={{duration: 0.5, delay:0.6}}  className=' z-20  '>
              <motion.h3  className='text-center font-extrabold text-black items-center lg:text-[1.6vw] text-[4vw] lg:mr-10 mr-0'>DOWNLOAD & ROX NOW</motion.h3>
            </motion.div>
            <motion.div
              className='flex flex-col lg:flex-row lg:gap-10 gap-0 items-center'>
              <div className='flex justify-center items-center  mt-0 overflow-hidden'>
                <motion.img variants={animation} initial="initial" whileInView={isInView ? "enter" : "initial"}
                  transition={{
                    duration: 0.3,
                    delay: 0.5
                  }} className='lg:w-[12vw] hidden lg:block  w-16' src={QRCode} alt='' />
              </div>
              <div className='flex lg:flex-col flex-row gap-5 z-10  overflow-hidden'>
                <motion.img variants={Storeanimation} initial="initial" whileInView={isInView ? "enter" : "initial"}
                  transition={{
                    duration: 0.3,
                    delay: 0.5
                  }} className='lg:w-[12vw] w-[36vw]' src={AppStore} alt='' />
                <motion.img variants={Storeanimation} initial="initial" whileInView={isInView ? "enter" : "initial"}
                  transition={{
                    duration: 0.3,
                    delay: 0.5
                  }} className='lg:w-[12vw] w-[36vw]' src={GooglePlay} alt='' />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
