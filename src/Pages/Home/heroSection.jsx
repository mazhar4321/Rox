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
// import ImageAnimation from '../../components/Animations/BgImageAnimation';
import BgImageAnimation from '../../components/Animation/BgImageAnimation';
import { transition1 } from '../../transition';

function HeroSection() {
  const fadeVariants = {
    hidden: { opacity: 0, },
    visible: { opacity: 1 },
  };

  // const slideVariants = {
  //   hidden: { x: -20,  },
  //   visible: {x: [0, -20, 0, -20, 20, 0] ,  transition: { duration: 10, repeat: Infinity, repeatType: 'yoyo' },},
  // };

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
  const rotateStyle = {
    rotate: [0, 360], // Rotate from 0 degrees to 360 degrees
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  };

  const easeIn = [0.16, 1, 0.3, 2]; // Define your easeIn curve

  const containerVariants = {
    open: { x: 0 },
    closed: { x: -20 },
  };
  
  const imageVariants = {
    open: { scale: 1, x: 0 },
    closed: { scale: 0, x: -20 },
  };
  return (
    <div className='relative'>
      <div
        className='absolute bottom-0   z-10 shade'
      >
        <img className='w-full h-full' src={Gradient} alt='' />
     </div>
     <motion.img
      src={Circle}
      alt=''
      className='absolute left-1/2 top-52 transform -translate-x-1/2 -translate-y-1/2 z-20'
      animate={rotateStyle}
      transition={transition1}
    />

      <BgImageAnimation />

      <div
        className='container flex lg:flex-row flex-col flex-col-reverse pb-10 lg:py-0 items-center h-screen relative'
        
      >
      <motion.div  
       initial={{opacity:0}}
       animate={{opacity: 1}}
       exit={{opacity:0}}
      // transition={transition1}
      variants={staggerVariants}
      className='z-20 relative flex flex-col items-center lg:items-start'>
      <motion.img
        className='w-fit lg:h-[15vh] h-8'
        src={Real}
        alt=''
        transition={{duration : 1.4,}}
        initial={{y:'-50%' , opacity: 0}}
        animate={{opacity:1 , y: 0}}
        exit={{opacity:0, y:"-50%"}}
      />
      <motion.div
        className='flex lg:my-10 my-1'
        variants={staggerVariants}
        initial='initial'
        animate='animate'
        transition={transition1}
      >
        <motion.img
          className='w-fit lg:h-[15vh] h-8'
          src={Online1}
          alt=''
          variants={OnlineVariants}
          transition={transition1}
        />
        <motion.img
          className='w-fit lg:h-[15vh] h-8 '
          src={Online2}
          alt=''
          variants={OnlineVariants}
          transition={transition1}
        />
        <motion.img
          className='w-fit lg:h-[15vh] h-8 '
          src={Online3}
          alt=''
          variants={OnlineVariants}
          transition={transition1}
        />
        <motion.img
          className='w-fit lg:h-[15vh] h-8 '
          src={Online4}
          alt=''
          variants={OnlineVariants}
          transition={transition1}
        />
        <motion.img
          className='w-fit lg:h-[15vh] h-8 '
          src={Online5}
          alt=''
          variants={OnlineVariants}
          transition={transition1}
        />
        <motion.img
          className='w-fit lg:h-[15vh] h-8'
          src={Online6}
          alt=''
          variants={OnlineVariants}
          transition={transition1}
        />
      </motion.div>
      <motion.img
        className='w-fit lg:h-[15vh] h-8 lg:my-2 my-1'
        src={Experience}
        alt=''
        variants={fadeVariants}
        // transition={transition1}
        initial='hidden'
        animate='visible'
      />
      <motion.div
        className='reveal-now w-fit py-1 my-2 lg:my-5'
        initial={{x:40 , opacity:0 }}
        animate={{x:0, opacity:1}}
        transition={{duration : 1,}}
        exit={{opacity:0}}
      >
        <motion.h6 className='uppercase text-white lg:text-2xl text-lg refer-btn'>
          Refer Now
        </motion.h6>
        <motion.img
          className='w-8 lg:w-fit'
          src={BtnIcon}
          alt=''
          variants={imgVariants}
          transition={transition1}
          initial='initial'
          animate='animate'
        />
      </motion.div>
    </motion.div>
    <motion.div
      className='absolute lg:-bottom-10 top-20 lg:right-20 h-5/6 z-10'
      initial='closed'
      animate='open'
      exit="closed"
      variants={containerVariants}
      transition={{ duration: 1.4 }}
      whileHover={{ x: 0.2, cursor: 'pointer', transition: { delay: 0.2, ease: easeIn } }}
    >
      <motion.img
        className='w-fit max-h-full'
        src={SlideImg}
        alt=''
        variants={imageVariants}
        transition={{ duration: 1 }}
      />
    </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;