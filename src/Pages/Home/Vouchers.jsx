import React, { useRef } from 'react'
import Collab from '../../assets/collab.png'
import Central from '../../assets/central.png'
import CentralMob from '../../assets/central-m.png'
import CollabMob from '../../assets/collab-m.png'
import Foodpanda from '../../assets/foodpanda.png'
import Careem from '../../assets/careem.webp'
import Daraz from '../../assets/daraz.webp'
import Golootloo from '../../assets/golootloo.webp'
import Slide from '../../assets/slide3-img.webp'
import Slide1 from '../../assets/slide-2-graphic-1.png'
import Slide2 from '../../assets/slide-1-graphic-2.png'
import GreenStart from '../../assets/star-green.png'
import GreenWhite from '../../assets/star-white.png'
import YellowGradient from '../../assets/gradiant-yellow.png'
import PurpleShade from '../../assets/img-overlay-generic.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BgImageAnimation from '../../components/Animations/BgImageAnimation'
import { motion, easeIn, useInView, useAnimation, useSpring, useScroll, useTransform } from 'framer-motion'
import ImageAnimate from '../../components/Animations/ImageAnimate'
import TextAnimate from '../../components/Animations/TextAnimate'
import { MaskText } from '../../components/Animations/MaskText'


function Vouchers() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      partialVisibilityGutter: 20,
    },
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { totalItems, currentSlide } } = rest;

    return (
      <div className=" carousel-button-group absolute bottom-0 z-30 ml-5 lg:hidden  flex -translate-x-1/2 -translate-y-1/2 left-1/2  transform">
        {[...Array(3)].map((_, index) => (
          <div>
            <div onClick={() => goToSlide(index)} key={index}
              className={`w-12 linear-purple mr-2 items-center cursor-pointer h-0.5 bg-black text-white  ${index === currentSlide ? 'slide-active' : 'linear-purple'}`}

            />
          </div>
        ))}
      </div>
    );
  };
  const slideVariants = {
    hidden: { x: -20 },
    visible: { x: [0, -20, 0, -20, 20, 0], transition: { duration: 10, repeat: Infinity, repeatType: 'yoyo' }, },
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
  };
  const animation = {
    initial: { opacity: 0, y: "100%", },
    enter: { opacity: 1, y: 0, }
  };

  const items = [
    {
      image: Foodpanda,
      text: 'Panda Pro\n(10 free deliveries)',
    },
    {
      image: Careem,
      text: '30% Discount',
    },
    {
      image: Daraz,
      text: '50% Discount',
    },
    {
      image: Golootloo,
      text: 'Free Subscription for Rs. 200',
    },
  ];

  const ref = useRef(null)
    const isInViewshadw = useInView(ref, {amount: 0.4},)
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
    const yPosAnim = useTransform(springProps, [0 , 0.2], [0,  -100],)
    const yPosAnimate = useTransform(springProps, [0 , 0.5], [300,  -1000],)
  return (
    <div ref={ref} className='flex w-full relative'>
      <motion.div
      variants={shadeAnimation}
      initial="initial"
      animate={isInViewshadw ? "visible" : "hidden"}
       className='absolute lg:bottom-0 top-0 lg:h-full h-[50vh]  shade'>
        <img className='w-full h-full' src={YellowGradient} alt='' />
      </motion.div>

      <BgImageAnimation />

      <img src={PurpleShade} className='lg:hidden absolute top-[40vh] z-30 w-full' alt='' />
      <motion.img style={{y:yPosAnim}} className='absolute top-[18vh] left-[40vw]' src={GreenStart} alt='' />
      <motion.img style={{y:yPosAnim}} className='absolute top-[14vh] left-2/3' src={GreenWhite} alt='' />
      <motion.img style={{y:yPosAnim}} className='absolute top-[10vh] right-10  ' src={GreenWhite} alt='' />
      <motion.img style={{y: yPosAnimate}}  className='absolute top-[60vh] lg:left-[55vw] left-10 lg:w-24 w-12 z-30 lg:w-[7vw]' src={Slide2} alt='' />
      <div className='container flex  lg:py-0 w-full   h-screen  relative justify-between flex flex-col-reverse lg:flex-row'>

        <motion.div ref={body} variants={boxVariant} initial="hidden" animate="visible" className='overflow-hidden lg:w-10/12 w-full flex flex-col lg:gap-[3vh] gap-[0.5vh] justify-center lg:justify-center lg:items-start py-10 items-center h-[50vh] lg:h-full z-30'>
          <TextAnimate
            text="Vouchers & Discounts"
            className='text-3xl uppercase text-white font-[TacticSans-bold]  lg:text-[2vw] text-[6vw]' />
          <div className='lg:overflow-hidden'>
            <motion.img variants={animation} initial="initial" whileInView={isInView ? "enter" : "initial"}
              transition={{
                duration: 0.3,
                delay: 0.2
              }} src={Collab} className='lg:h-[15vh] h-8 hidden lg:block' alt='' />
            <motion.img variants={animation} initial="initial" whileInView={isInView ? "enter" : "initial"}
              transition={{
                duration: 0.3,
                delay: 0.3
              }} src={CollabMob} className='lg:h-[15vh] h-[6vh] lg:hidden' alt='' />
          </div>
          <div className='lg:overflow-hidden'>
            <motion.img variants={animation} initial="initial" whileInView={isInView ? "enter" : "initial"}
              transition={{
                duration: 0.3,
                delay: 0.4
              }} src={Central} className='lg:h-[15vh] h-8 hidden lg:block' alt='' />
            <motion.img variants={animation} initial="initial" whileInView={isInView ? "enter" : "initial"}
              transition={{
                duration: 0.5,
                delay: 0.5
              }} src={CentralMob} className='lg:h-[15vh] h-[6vh] lg:hidden' alt='' />
          </div>
          <motion.div  initial={{x:"-100%"}} whileInView={{x:0}} transition={{duration: 0.5, delay:0.6}} className='text-white lg:overflow-hidden'>
            
            <p className='font-[TacticSans-bold] text-center  text-[4vw] lg:text-[1.2vw] leading-[150%]'>
            Download the App to enjoy discounts.
            </p>
          </motion.div>


          <Carousel
            responsive={responsive}
            arrows={false}
            customTransition="transform 300ms ease-in-out"
            centerMode={true}
            customButtonGroup={<ButtonGroup />}
            className='flex w-full z-20 overflow-hidden'
            itemClass='carousel-item-padding-40-px'
            transitionDuration={500}
            containerClass='carousel-container'
            centerSlidePercentage={20}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: "100%"
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: index * 0.3,
                  delay: index * 0.2
                }}
                key={index}
                className='text-white ml-2 py-2'
              >
                <img className='w-28 lg:w-[10vw]' src={item.image} alt='' />
                <div className='mt-2 text-black'>
                  <h1 className='lg:text-[1.2vw] text-[10px] leading-[120%]'>{item.text}</h1>
                </div>
              </motion.div>
            ))}
          </Carousel>
        </motion.div>
        <div className='h-[50vh] lg:static relative flex justify-center'>
          <div className=' z-10 absolute mt-2 bottom-0 lg:right-0 '>
            <ImageAnimate>
              <motion.img initial='hidden'
                animate='visible'
                variants={slideVariants}
                whileHover={{ scale: 1.1, cursor: "pointer", transition: { delay: 0.2, ease: easeIn } }}
                className='lg:h-[90vh] object-contain h-[40vh]' src={Slide} alt='' />
            </ImageAnimate>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Vouchers
