import React, { useRef } from 'react';
import { easeIn, easeInOut, motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Real from '../../assets/real.webp';
import Online1 from '../../assets/online1.png';
import Online2 from '../../assets/online2.png';
import Online3 from '../../assets/online3.png';
import Online4 from '../../assets/online4.png';
import Online5 from '../../assets/online5.png';
import Online6 from '../../assets/online6.png';
import Experience from '../../assets/experience.webp';
import SlideImg from '../../assets/slide1.webp';
import MobileImg from '../../assets/slide-1-char-m.webp';
import Gradient from '../../assets/gradiant.webp';
import Circle from '../../assets/slide-1-graphic-1.png';
import SliderGraphic from '../../assets/slide-1-graphic-3.png'
import SliderGraphic2 from '../../assets/slide-1-graphic-2.png'
import ImageAnimation from '../../components/Animations/BgImageAnimation';

function HeroSection({heroZIndex}) {

  const slideVariants = {
    hidden: { x: -20 },
    visible: { x: [0, -20, 0, -20, 20, 0], transition: { duration: 10, repeat: Infinity, repeatType: 'yoyo' }, },
  };

  const OnlineVariants = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  const imgVariants = {
    initial: { x: 0 },
    animate: {
      x: [0, -10, 10, -10, 10, 0], // Keyframes for the x-axis animation
      transition: { duration: 2, repeat: Infinity, repeatType: 'yoyo' },
    },
  };
  const staggerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const rotateStyle = {
    rotate: [0, 360], // Rotate from 0 degrees to 360 degrees
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  };

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const springProps = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 30,
    mass: 1.5,
  });
  const yPosAnim = useTransform(springProps, [0 , 0.2], [0,  -1000],)

  return (
    <div className='relative'>
      <motion.div
        initial={{
          opacity: 0,
          y: "100%"
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0.33, 1, 0.88, 1]
        }}
        className='absolute lg:bottom-0 top-0 lg:h-full h-[55vh]   shade'
      >
        <img className='lg:w-full w-full h-full  lg:h-full ' src={Gradient} alt='' />
        <div className='absolute top-10'>
        </div>

      </motion.div>
      <motion.img
    style={{y: yPosAnim}}
        transition={{
          delay: 1.2,
          duration: 1
        }}
        src={Circle}
        alt=''
        className='absolute lg:left-[35vw] right-5 w-8 lg:w-[4vw] cursor-pointer z-30 lg:top-[20vh] top-20 transform -translate-x-1/2 -translate-y-1/2 z-20'
        animate={rotateStyle}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.7}

      // transition={transition1}
      />
      <motion.img
        style={{ y: yPosAnim, }}
        initial={{
          x: 400,
          y: 80,
          opacity: 0
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 2,
          delay: 1.8
        }}

        className='absolute top-40 z-20 lg:left-[90vw] lg:top-[48vh]  left-3 w-14 lg:w-[7vw]' src={SliderGraphic} alt=''
      />
      <motion.div
        className='z-30'

        initial={{
          x: -200,
          y: 100,
          opacity: 0
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0
        }}
        transition={{
          duration: 1,
          delay: 1.4,
          when: "beforeChildren"
        }}>
        <motion.img
          initial={{ y: 0, }}
          animate={{ y: [0, -80, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'yoyo', when: "afterParrent" }}
          className='absolute bottom-0 lg:top-[30vh] z-20  right-3 lg:right-[45vw] w-14 lg:w-[7vw] lg:right-20'
          src={SliderGraphic2} alt='' />

      </motion.div>

      <ImageAnimation />

      <div
        className='container flex lg:flex-row flex-col flex-col-reverse  items-center h-screen relative'
      >
        <motion.div
          variants={staggerVariants}
          className='z-20 relative flex flex-col overflow-hidden gap-[2vh] lg:mt-20  mt-0 lg:gap-0 items-center justify-center lg:items-start h-[40%] lg:h-full w-full'>
          <motion.img
            initial={{
              x: "-200%"
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.33, 1, 0.88, 1]
            }}
            className='lg:h-[18vh] h-[7vh] mt-[-12vh]'
            src={Real}
            alt=''
          />
          <motion.div
            className='flex lg:my-10 my-0'
            variants={staggerVariants}
            initial='initial'
            animate='animate'
            whileInView="animate"
          >
            <motion.img
              className='lg:h-[18vh] h-[7vh]'
              src={Online1}
              alt=''
              variants={OnlineVariants}
            />
            <motion.img
              className='lg:h-[18vh] h-[7vh] '
              src={Online2}
              alt=''
              variants={OnlineVariants}
            />
            <motion.img
              className='lg:h-[18vh] h-[7vh] '
              src={Online3}
              alt=''
              variants={OnlineVariants}
            />
            <motion.img
              className='lg:h-[18vh] h-[7vh] '
              src={Online4}
              alt=''
              variants={OnlineVariants}
            />
            <motion.img
              className='lg:h-[18vh] h-[7vh] '
              src={Online5}
              alt=''
              variants={OnlineVariants}
            />
            <motion.img
              className='lg:h-[18vh] h-[7vh]'
              src={Online6}
              alt=''
              variants={OnlineVariants}
            />
          </motion.div>
          <motion.img
            initial={{
              x: "-100%"
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.3,
              ease: [0.33, 1, 0.88, 1]
            }}
            className='lg:h-[18vh] h-[7vh] lg:my-0 my-0'
            src={Experience}
            alt=''
          />

        </motion.div>
        <motion.div
          className={`absolute lg:-bottom-0  lg:right-20    lg:block hidden`}
          initial='hidden'
          animate='visible'
          variants={slideVariants}
          whileHover={{ scale: 1.1, cursor: "pointer", transition: { delay: 0.2, ease: easeIn } }}
        >
          <motion.img initial={{
            scale: 1.5
          }} animate={{
            scale: 1
          }}
            transition={{
              ease: [0.33, 1, 0.88, 1],
              duration: 1.9
            }}
            className='max-h-full lg:h-[80vh]' src={SlideImg} alt='' />
        </motion.div>
        <div className='lg:static relative flex justify-center top-auto bottom-auto h-[60%] w-full  lg:hidden w-full '>
          <img className='max-h-[85%] w-full object-contain absolute bottom-0 z-20' src={MobileImg} alt='' />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;