import React, { useEffect, useRef, useState } from 'react'
import Apply from '../../assets/apply.webp'
import Now from '../../assets/now.webp'
import Slide from '../../assets/slide3-img.webp'
import Slide1 from '../../assets/slide-2-graphic-1.png'
import Slide2 from '../../assets/slide-1-graphic-2.png'
import SliderGraphic from '../../assets/slide-1-graphic-3.png'
import GreyShadow from '../../assets/grey-form.png'
import Play from '../../assets/play.png'
import TermsConditionApplyNow from '../../components/Modal/TermsConditionApplyNow'
import Modal from '../../components/Modal'
import BgImageAnimation from '../../components/Animations/BgImageAnimation'
import AnimatedSection from '../../components/Animations/AnimateSection'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'

function ApplyNow() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const handleModalOpen = (contentComponent) => {
    setModalContent(contentComponent);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'
  };
  const handleModalClose = () => {
    setModalOpen(false);
    setModalContent(null); // Clear modal content on close
    document.body.style.overflow = 'auto'; 
  };
  const imgRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: imgRef,
    offset: ["0 1","1 1"]
  })

  const left = useTransform(scrollYProgress, [0.5, 1], ['-100%', '0%']);
  return (
    <div ref={imgRef} className=' flex w-full relative'>
    <div className='absolute lg:bottom-0 hidden lg:block'>
    <img className='w-full' src={GreyShadow} alt=''/>
    </div>
    <div className='absolute top-10 block lg:hidden'>
    <img className='w-full' src={GreyShadow} alt=''/>
    </div>
    <BgImageAnimation/>

    <div className='container mx-auto z-10 flex h-screen flex-col lg:flex-row justify-center'>
    <div className='lg:w-1/2 w-full lg:mt-0 mt-10 flex lg:flex-col flex-row gap-5 lg:justify-center justify-start mb-5'>
    <div className='flex lg:flex-col flex-row gap-5 w-full justify-center'>
    <motion.img
      style={{ x: left }}
      transition={{
        ease: [0.56, 0.34, 0.12, 1], // Adjust the easing function
        duration: 0.5, // Adjust the duration
        type: 'spring',
        damping: 15, mass: 0.27, stiffness: 55
      }}
      src={Apply}
      className='lg:h-fit lg:w-[70%] w-fit h-8'
      alt=''
    />
      <img src={Now}  className='lg:h-fit h-8 lg:w-[50%] w-fit lg:mt-2 mt-0' alt='' />
      </div>
      </div>
      <AnimatedSection className='lg:w-3/6 w-full flex flex-col lg:justify-center justify-end items-center mx-auto relative max-h-full form'>
      <div className='rounded-lg bg-[#86358a] p-10'>
      <form className='w-full '>
      <div className='w-full my-2'>
      <input  className='w-full bg-transparent border-b xl:text-lg text-xs border-white py-2 text-white outline-none' placeholder='First Name *' type='text' />
      </div>
      <div className='w-full my-2'>
      <input  className='w-full bg-transparent border-b xl:text-lg text-xs border-white py-2 text-white outline-none' placeholder='Last Name *' type='text' />
      </div>
      <div className='w-full my-2'>
      <input  className='w-full bg-transparent border-b xl:text-lg text-xs border-white py-2 text-white outline-none' placeholder='Email*' type='email' />
      </div>
      <div className='w-full my-2'>
      <input  className='w-full bg-transparent border-b xl:text-lg text-xs border-white py-2 text-white outline-none' placeholder='Mobile Number*' type='number' />
      </div>
      <div className='my-3'>
      <h1 className='text-white lg:text-base xl:text-lg text-xs'>is Your Phone e-Sim ready?</h1>
      </div>
      <div className='flex gap-2 my-1 text-white'>
      <input type='radio' className=' w-4'/> 
      <h1 className='text-white lg:text-base xl:text-lg text-xs'>Yes, I'm all set for e-SIM!</h1>
      </div>
      <div className='flex gap-2 my-1 text-white'>
      <input type='radio' className=' w-4'/> 
      <h1 className='text-white lg:text-base xl:text-xl text-xs'>No, I'm sticking with the physical SIM.</h1>
      </div>
      <div className='flex gap-2 my-1 text-white'>
      <input type='radio' className=' w-4'/> 
      <h1 className='text-white lg:text-base xl:text-xl text-xs'>Not sure, but I'm open to new vibes!</h1>
      </div>
      <div className='flex gap-2 my-1 items-center text-white'>
      <input type='checkbox' className='-mt-5 w-4 h-4 text-black'/> 
      <h1 className='text-white lg:text-base xl:text-xl mb-5 text-xs'>I agree to the <span onClick={()=> handleModalOpen(<TermsConditionApplyNow/>)}  className='underline cursor-pointer'>terms and conditions </span></h1>
      </div>

      <div className="reveal-now bg-[#2b2c3e] flex items-center  mx-auto w-fit">
      <h6 className="uppercase text-white lg:text-2xl text-lg get-now">Submit  </h6>
      <img className='lg:w-fit w-8 py-0.5' src={Play} alt=""/>
      </div>
      </form>
      
      </div>
      
    <img className='absolute bottom-0 lg:w-24 w-12 lg:right-0 left-0 z-20' src={Slide1} alt='' />
    <img className='absolute lg:top-14 top-0 lg:left-1/2 right-4 lg:w-24 w-12 z-20'  src={SliderGraphic} alt='' />
      </AnimatedSection>    
      </div>

      <Modal
      isOpen={isModalOpen}
      onClose={handleModalClose}
      content={modalContent}
    />
    </div>
  )
}

export default ApplyNow