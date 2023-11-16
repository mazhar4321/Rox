import React from 'react';
import { easeIn, motion } from 'framer-motion';
import Real from '../../assets/real.png';
import Online1 from '../../assets/online1.png';
import Online2 from '../../assets/online2.png';
import Online3 from '../../assets/online3.png';
import Online4 from '../../assets/online4.png';
import Online5 from '../../assets/online5.png';
import Online6 from '../../assets/online6.png';
import Experience from '../../assets/experience.png';
import BtnIcon from '../../assets/button-icon.png';
import SlideImg from '../../assets/slide1.webp';
import Gradient from '../../assets/gradiant.png';
import Circle from '../../assets/slide-1-graphic-1.png';
import ImageAnimation from '../../components/Animations/BgImageAnimation';

function HeroSection() {
  const fadeVariants = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, },
  };

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
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className='relative'>
      <div
        className='absolute bottom-0   z-10 shade'
      >
        <img className='w-full h-full' src={Gradient} alt='' />
      </div>
      <img
        src={Circle}
        alt=''
        className='absolute left-1/2 top-52 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-ping	animate-pulse		'
      />

      <ImageAnimation />

      <motion.div
        className='container flex lg:flex-row flex-col flex-col-reverse pb-10 lg:py-0 items-center h-screen relative'
        initial='hidden'
        animate='visible'
        variants={fadeVariants}
      >
        <motion.div variants={staggerVariants}
          initial='initial'
          animate='animate'
          className='z-20 relative flex flex-col items-center lg:items-start'>
          <motion.img
            className='w-fit lg:h-[15vh] h-8'
            src={Real}
            alt=''
            variants={fadeVariants}
            initial='hidden'
            animate='visible'
          />
          <motion.div
            className='flex lg:my-10 my-1'
            variants={staggerVariants}
            initial='initial'
            animate='animate'
          >
            <motion.img
              className='w-fit lg:h-[15vh] h-8'
              src={Online1}
              alt=''
              variants={OnlineVariants}
            />
            <motion.img
              className='w-fit lg:h-[15vh] h-8 '
              src={Online2}
              alt=''
              variants={OnlineVariants}
            />
            <motion.img
              className='w-fit lg:h-[15vh] h-8 '
              src={Online3}
              alt=''
              variants={OnlineVariants}
            />
            <motion.img
              className='w-fit lg:h-[15vh] h-8 '
              src={Online4}
              alt=''
              variants={OnlineVariants}
            />
            <motion.img
              className='w-fit lg:h-[15vh] h-8 '
              src={Online5}
              alt=''
              variants={OnlineVariants}
            />
            <motion.img
              className='w-fit lg:h-[15vh] h-8'
              src={Online6}
              alt=''
              variants={OnlineVariants}
            />
          </motion.div>
          <motion.img
            className='w-fit lg:h-[15vh] h-8 lg:my-2 my-1'
            src={Experience}
            alt=''
            variants={fadeVariants}
            initial='hidden'
            animate='visible'
          />
          <motion.div
            className='reveal-now w-fit py-1 my-2 lg:my-5'
            variants={fadeVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.h6 className='uppercase text-white lg:text-2xl 2xl:text-5xl text-lg refer-btn'>
              Refer Now
            </motion.h6>
            <motion.img
              className='w-8 lg:w-fit 2xl:w-16'
              src={BtnIcon}
              alt=''
              variants={imgVariants}
              initial='initial'
              animate='animate'
            />
          </motion.div>
        </motion.div>
        <motion.div
          className='absolute lg:bottom-0   lg:right-20 z-10'
          initial='hidden'
          animate='visible'
          variants={slideVariants}
          whileHover={{ scale: 1.1, cursor: "pointer", transition: { delay: 0.2, ease: easeIn } }}
        >
          <img className='w-fit max-h-full 2xl:h-[90vh] lg:h-[90vh]' src={SlideImg} alt='' />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;