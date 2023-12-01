import React, { useRef } from 'react'
import Wegot from '../../assets/we-got.png'
import Plans from '../../assets/plans.png'
import Slide from '../../assets/slide5-img.webp'
import Slide1 from '../../assets/slide-2-graphic-1.png'
import CircleWhite from '../../assets/slide-5-grahpic-3.png'
import GreyShade from '../../assets/grey.png'
import BgImageAnimation from '../../components/Animations/BgImageAnimation'
import { motion, easeIn, useTransform, useSpring, useScroll, useInView } from 'framer-motion'
import ImageAnimate from '../../components/Animations/ImageAnimate'
import AnimatedSection from '../../components/Animations/AnimateSection'
import TextAnimate from '../../components/Animations/TextAnimate'


function DataPlans() {
  const slideVariants = {
    hidden: { x: -20 },
    visible: { x: [0, -20, 0, -20, 20, 0], transition: { duration: 10, repeat: Infinity, repeatType: 'yoyo' }, },
  };
  

  const ref = useRef(null)
  const isInViewshadw = useInView(ref, {amount: 0.9},)
  const shadeAnimation = {
    hidden:{
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
  const yPosAnim = useTransform(springProps, [0 , 0.4], [0,  -200],)
  const yPosAnimate = useTransform(springProps, [0 , 0.4], [600,  -200],)
  // const yPosAnimateImg = useTransform(scrollYProgress, [0 , 0.3], [1200,  0])
  const yPosAnimateImgScale = useTransform(scrollYProgress, [0 , 0.3], [-0.2,  1])
  return (
    <motion.div  ref={ref} className=' flex w-full relative '>
      <motion.div variants={shadeAnimation} initial="hidden" animate={isInViewshadw ? "visible" : "hidden"} className='absolute lg:bottom-0 hidden w-full lg:block'>
        <img className='w-full h-full' src={GreyShade} alt='' />
      </motion.div>
      <div className='absolute lg:bottom-0 top-0 lg:h-full h-[50vh]  shade block lg:hidden'>
        <img className='w-full h-full' src={GreyShade} alt='' />
      </div>
      <BgImageAnimation />
      <div className='container relative mx-auto lg:h-screen h-fit overflow-hidden flex flex-col-reverse lg:flex-row '>


        <AnimatedSection className='lg:w-full w-full z-20 py-20 flex flex-col lg:items-start items-center justify-center lg:justify-center lg:gap-[3vh] gap-[1vh] h-[50vh] lg:h-full'>
          <TextAnimate style={{scale:yPosAnimateImgScale}} text="Our Data Plans"
            className='lg:text-[2vw] text-[6vw] uppercase text-white text-center mb-2 lg:mb-0' />
          <motion.img style={{scale:yPosAnimateImgScale}} transition={{duration: 1}} className=' h-12 lg:h-[15vh]' src={Wegot} alt='' />
          <motion.img style={{scale:yPosAnimateImgScale}} transition={{duration: 1}}  className=" h-12 lg:h-[15vh]" src={Plans} alt='' />
          <div className='lg:text-black text-white text-[4vw] lg:text-[1.2vw] leading-[120%] text-center '>
            <motion.p style={{scale:yPosAnimateImgScale}} transition={{duration: 1}} >No more buffering, lagging or <br className='block lg:hidden' /> ‘oye awaaz aa rahi hai?’      </motion.p>
            <motion.p style={{scale:yPosAnimateImgScale}} transition={{duration: 1}} >Our plans will keep you vibing <br className='block lg:hidden' /> all day, every day.      </motion.p>
          </div>

        </AnimatedSection>
        <div className='h-[50vh] relative lg:static flex justify-center w-full'>
          <div className='absolute bottom-0'>
            <motion.div style={{ scale: yPosAnimateImgScale}}>
              <motion.img
                initial='hidden'
                animate='visible'
                variants={slideVariants}
                whileHover={{ scale: 1.1, cursor: "pointer", transition: { delay: 0.2, ease: easeIn } }}
                className=' h-[40vh] lg:h-[90vh]' src={Slide} alt='' />
            </motion.div>
            <motion.img style={{y: yPosAnimate}} className='absolute lg:top-10 top-0 lg:right-10 left-6 lg:w-[7vw] w-12' src={Slide1} alt='' />
            <motion.img style={{y: yPosAnim}} className='absolute lg:top-[40vh] top-20  right-10 lg:w-[3vw] w-8' src={CircleWhite} alt='' />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default DataPlans
