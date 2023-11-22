import React from 'react'
import Collab from '../../assets/collab.webp'
import Central from '../../assets/central.webp'
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
import SliderGraphic from '../../assets/slide-1-graphic-3.png'
import SliderGraphic2 from '../../assets/slide-1-graphic-2.png'
import RRR from '../../assets/rrr.png'
import OOO from '../../assets/ooo.png'
import XXX from '../../assets/xxx.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BgImageAnimation from '../../components/Animations/BgImageAnimation'
import { motion, easeIn  } from 'framer-motion'


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
    const { carouselState: { totalItems , currentSlide} } = rest;
  
    return (
      <div className=" carousel-button-group absolute bottom-0 z-30 ml-5 lg:hidden  flex -translate-x-1/2 -translate-y-1/2 left-1/2  transform">
        {[...Array(totalItems)].map((_, index) => (
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
  return (
    <div className='flex w-full relative'>
    <div className='absolute lg:bottom-0 top-0 lg:h-full h-[50vh] z-10 shade'>
    <img className='w-full h-full' src={YellowGradient} alt=''/>
    </div>
   
    <BgImageAnimation/>
   

    <img className='absolute lg:top-36 top-40 lg:w-24 w-12 lg:right-20 right-10 z-30 ' src={Slide1} alt='' />
    <img className='absolute top-14 left-1/3' src={GreenStart} alt='' />
    <img className='absolute top-14 left-2/3' src={GreenWhite} alt='' />
    <img className='absolute top-10 right-10  ' src={GreenWhite} alt='' />
    <img className='absolute top-14 lg:left-1/2 left-10 lg:w-24 w-12 z-30 '  src={Slide2} alt='' />
    <div className='container flex  lg:py-0 w-full   h-screen  relative justify-between flex flex-col-reverse lg:flex-row'>

    <div className='lg:w-10/12 w-full flex flex-col lg:gap-5 gap-1 justify-center lg:justify-center lg:items-start py-10 items-center h-[50vh] lg:h-full z-20'>
      <h1 className='text-3xl uppercase text-white font-[TacticSans-bold] 2xl:text-3xl lg:text-2xl text-sm'>  Vouchers & Discounts</h1>
      <img src={Collab} className='lg:h-[15vh] h-8' alt='' />
      <img src={Central} className='lg:h-[15vh] h-8' alt='' />
      <div className='text-white'>
      <p className='font-[TacticSans-bold] text-center lg:text-base text-xs 2xl:text-xl'>Stay tuned for some sick collabs dropping soon.</p>
      </div>
      
      
      <Carousel 
      responsive={responsive}
      arrows={false}
      customTransition="transform 300ms ease-in-out"
      centerMode={true}
        customButtonGroup={<ButtonGroup />} className='flex w-full   z-20'>
      <div className='text-white ml-2 py-2'>
      <img   className='w-28 lg:w-36' src={Foodpanda} alt=''/>
      <div className='mt-2 text-black'>
      <h1 className='lg:text-xl 2xl:text-xl text-xs '>Foodpanda</h1>
      <h6 className='text-xs text-[8px] 2xl:text-base font-sans'>Panda Pro (10 free deliveries)
      
      </h6>
      </div>    
      </div>
      <div className='text-white ml-2 py-2'>
      <img   className='w-28 lg:w-36 ' src={Careem} alt=''/>
      <div className='mt-2 text-black'>
      <h1 className='lg:text-xl text-xs 2xl:text-2xl '>Careem</h1>
      <h6 className='text-xs text-[8px] 2xl:text-sm font-sans'>30% Discount for ROX customers
      
      </h6>
      </div>
      </div>
      <div className='text-white ml-2 py-2'>
      <img   className='w-28 lg:w-36 ' src={Daraz} alt=''/>
      <div className='mt-2 text-black'>
      <h1 className='lg:text-xl text-xs 2xl:text-xl'>Daraz</h1>
      <h6 className='text-xs text-[8px] 2xl:text-sm font-sans'>50% Off for ROX Customers
      
      </h6>
      </div>
      </div>
      <div className='text-white ml-2 py-2'>
      <img   className='w-28 lg:w-36 ' src={Golootloo} alt=''/>
      <div className='mt-2 text-black'>
      <h1 className='lg:text-xl text-xs 2xl:text-xl'>Golootloo</h1>
      <h6 className='text-[8px] 2xl:text-sm text-xs font-sans'>Free Subscription for Rs. 200
      
      </h6>
      </div>
      </div>

      </Carousel>
      </div>
      <div className='h-[50vh] lg:static relative flex justify-center'>
      <div className=' z-10 absolute mt-2 bottom-0 lg:right-0 '>
      <motion.img initial='hidden'
      animate='visible'
      variants={slideVariants}
      whileHover={{ scale: 1.1, cursor: "pointer", transition: { delay: 0.2, ease: easeIn } }}
       className='lg:h-[90vh] object-contain h-[40vh]' src={Slide} alt='' />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Vouchers
