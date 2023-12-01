import React from 'react'
import SlideImg from '../../assets/slide6-img.webp'
import FaqsImg from '../../assets/faqs.webp'
import RoundedIcon from '../../assets/slide-1-graphic-2.png'
import Slide2 from '../../assets/slide-2-graphic-1.png'
import RRR from '../../assets/rrr.png'
import OOO from '../../assets/ooo.png'
import XXX from '../../assets/xxx.png'
import PurpleGradient from '../../assets/gradient-purple-2.png'
import FaqsContent from './FaqsContent'
import ImageAnimate from '../../components/Animations/ImageAnimate'
import BgImageAnimation from '../../components/Animations/BgImageAnimation'
import { useScroll, useSpring, useTransform , motion} from 'framer-motion'
function Faqs() {
  const { scrollYProgress } = useScroll();
  const springProps = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 30,
    mass: 1.5,
  });
  const yPosAnim = useTransform(springProps, [0 , 1.5], [1200,  -1000])

  return (
    <div className='relative lg:h-screen w-full h-fit'>
      <div className='absolute -right-[100vw]  h-full z-10 shade'>
        <img className='w-full h-full' src={PurpleGradient} alt='' />
      </div>
      <BgImageAnimation />
      <motion.img style={{y: yPosAnim}} src={RoundedIcon} className='absolute lg:bottom-0 lg:top-20 top-40 right-1/2 z-20 lg:w-[7vw] w-12' alt='' />

      <div className='container mx-auto lg:h-screen h-[55vh] '>
        <div className='z-10 absolute lg:left-20  bottom-0  w-full flex justify-center  lg:justify-start'>
          <ImageAnimate>
            <img className='h-[40vh] 2xl:h-[90vh] lg:h-[90vh] object-contain ' src={SlideImg} alt='' />
          </ImageAnimate>
          <motion.img style={{y: yPosAnim}} src={Slide2} className='absolute lg:top-[20vh] z-30 top-20 left-0 rotate-[65deg] z-20 lg:w-[7vw] w-12' alt='' />
        </div>
        <div className='lg:flex justify-end items-end items-center h-screen hidden'>
          <div className='z-10 absolute  top-60 right-0 lg:inline-block hidden'>
            <div className='w-full'>

            </div>
          </div>
          <FaqsContent />
        </div>
      </div>
    </div>
  )
}

export default Faqs
