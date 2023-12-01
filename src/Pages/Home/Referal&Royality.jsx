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
import { motion, easeIn, useInView, useTransform, useSpring, useScroll } from 'framer-motion'
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
    enter: { opacity: 1, y: 0, }
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

  const ref = useRef(null)
  const isInViewshadw = useInView(ref, { amount: 0.4 },)
  const shadeAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }
  const { scrollYProgress } = useScroll();
  const springProps = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 30,
    mass: 1.5,
  });
  const yPosAnim = useTransform(springProps, [0, 0.2], [0, -100],)
  const yPosAnimate = useTransform(springProps, [0, 0.5], [0, -900])
  const imgVariants = {
    initial: { x: 0 },
    animate: {
      x: [0, -10, 10, -10, 10, 0], // Keyframes for the x-axis animation
      transition: { duration: 2, repeat: Infinity, repeatType: 'yoyo' },
    },
  };
  return (
    <div ref={ref} className='relative h-screen '>
      <motion.div variants={shadeAnimation} initial="hidden" animate={isInViewshadw ? "visible" : "hidden"} className='absolute lg:bottom-0 top-0 lg:h-full h-[50vh] shade'>
        <img className='w-full h-full' src={PurpleGradient} alt='' />
      </motion.div>
      <BgImageAnimation />

      <motion.img style={{ y: yPosAnimate }} src={Globe} className='hidden absolute lg:top-28 top-10 lg:right-1 left-10 lg:w-[7vw] w-12 z-30 ' alt='' />
      <div className='z-10 h-screen container relative justify-between flex flex-col lg:flex-row '>
        <div className='h-[50vh] relative lg:static flex justify-center w-full'>
          <div className=' z-10 absolute bottom-0 '>
            <motion.img style={{ y: yPosAnimate }} src={RoundedIcon} className='absolute top-[70vh] lg:w-[7vw] w-12 z-30' alt='' />
            <img className='hidden absolute lg:top-36 top-40 lg:w-[7vw] w-12 lg:right-20 right-10 z-30 ' src={Slide1} alt='' />
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
          className='w-full overflow-hidden h-[50vh] lg:py-20 py-10 uppercase lg:h-full text-white justify-center flex flex-col lg:gap-5 gap-[0.5vh] lg:items-end items-center '>

          <TextAnimate
            text="REFERRALS & LOYALTY"
            className='text-start font-[TacticSans-bold] text-[6vw] text-[#87348a] lg:text-[2vw] z-10' />
          <div className='flex justify-between lg:items-end items-center z-10 flex-col'>
            <div className='overflow-hidden'>
              <motion.img variants={animation} initial="initial" whileInView={isInView ? "enter" : "initial"}
                transition={{
                  duration: 0.3,
                  delay: 0.2
                }}
                src={Refer} className=' h-12 lg:h-[18vh]' alt=' ' />
            </div>
            <div className='overflow-hidden'>
              <motion.img
                variants={animation} initial="initial" whileInView={isInView ? "enter" : "initial"}
                transition={{
                  duration: 0.3,
                  delay: 0.4
                }}
                src={Earn} className=' h-12 lg:h-[18vh]' alt=' ' />
            </div>
            <div className='overflow-hidden'>
              <motion.img variants={animation} initial="initial" whileInView={isInView ? "enter" : "initial"}
                transition={{
                  duration: 0.3,
                  delay: 0.5
                }} src={Thrive} className='h-12 lg:h-[17vh]' alt=' ' />
            </div>
          </div>
          <motion.div  initial={{x:"100%"}} whileInView={{x:0}} transition={{duration: 0.5, delay:0.6}} className=''>
           
            <p  className='mt-2 lg:text-right lg:text-black text-[#87348a] z-10  text-[4vw] text-center lg:text-[1vw]'>
            Refer friends to ROX, score big points for you and your squad!   
            </p>
          </motion.div>
          <motion.div  initial={{x:"100%"}} whileInView={{x:0}} transition={{duration: 0.5, delay:0.6}} className=''>
            
            <motion.div
            className='lg:bg-[#eeea99] bg-[#67519d] w-fit float-right mt-2 flex items-center gap-5 z-10 refer-now   py-0.5'
            initial={{x:40 , opacity:0 }}
            animate={{x:0, opacity:1}}
            transition={{duration : 1,}}
            exit={{opacity:0}}
          >
            <motion.h6 className='download-rox text-white lg:text-2xl 2xl:text-3xl text-lg '>
              Refer Now
            </motion.h6>
            <motion.img
              className='w-8 lg:w-fit py-0.5'
              src={BtnIcon}
              alt=''
              variants={imgVariants}
              initial='initial'
              animate='animate'
            />
          </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Referal
