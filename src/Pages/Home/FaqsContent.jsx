import React, { useEffect, useRef, useState } from 'react'
import FaqImg from '../../assets/faqs.png'
import ModalIcon from '../../assets/modal-icon.png'
import Modal from '../../components/Modal';
import AccountSetupContent from '../../components/Modal/AccountSetupContent';
import ReadyToRox from '../../components/Modal/ReadyToRox';
import PlansAndSetup from '../../components/Modal/PlansAndSetup';
import ReadyToRox3 from '../../components/Modal/ReadyToRox3';
import AnimatedSection from '../../components/Animations/AnimateSection';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function FaqsContent() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isPast50Percent, setIsPast50Percent] = useState(false);
  const handleModalOpen = (contentComponent) => {
    setModalContent(contentComponent);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'
  };
  const handleModalClose = () => {
    setModalOpen(false);
    setModalContent(null);
    document.body.style.overflow = 'auto';
  };

  // const ref = useRef(null)
  // const isInViewshadw = useInView(ref, { amount: 0.8, threshold: 0.3, triggerOnce: true });
  // const isInViewModal = useInView(ref, {amount: 0.9,   },)
  const [isAnimating, setAnimating] = useState(false);
  const [ref, isInView] = useInView({
    threshold: 0, // Trigger when fully in view
    rootMargin: '0px 0px -30% 0px'
  });
 
  useEffect(() => {
    
    if(isInView ){
   setAnimating(true)
    }
    else{
      setAnimating(false)
    }

  }, [isInView]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight ) {
        setIsPast50Percent(true);
      } else {
        setIsPast50Percent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const imgAnimation = {  
    hidden:{
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    }
  }
  const modalAnimation = {
    hidden:{
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    }
  }
 

  return (
    <div ref={ref}  className='z-30 flex justify-end w-full flex-col justify-end items-end'>
      <div className='lg:w-1/2 w-full overflow-hidden'>
        <motion.img variants={imgAnimation} initial="hidden"  animate={isAnimating && isPast50Percent ? "visible" : "hidden"}   transition={{duration: 0.5}} className='lg:w-[25vw] w-40 px-4 py-2' src={FaqImg} alt='' />
      </div>
      <motion.div
       variants={modalAnimation} initial="hidden"
        animate={isAnimating && isPast50Percent ? "visible" : "hidden"} 
        transition={{duration : 0.5, delay:0.3, ease: "easeOut"}} className=' w-full flex justify-end'>
        <div className='border-1 faqs-content border-[#86358a] uppercase  rounded-md lg:w-1/2 w-full py-5 border z-30 bg-[#2b2c3e] overflow-y-scroll h-[65vh]'>

          <div className='border-b  border-[#86358a]'>
            <div onClick={() => handleModalOpen(<AccountSetupContent />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
              <h1 className='text-lg lg:text-[1vw]'>Ready To Rox</h1>
              <img className='w-8 lg:w-8' src={ModalIcon} alt='' />
            </div>
          </div>
          <div className=' py-2 border-t border-b  border-[#86358a]'>
            <div onClick={() => handleModalOpen(<ReadyToRox />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
              <h1 className='text-lg lg:text-[1vw]'>Account Setup</h1>
              <img className='w-8 lg:w-8' src={ModalIcon} alt='' />
            </div>
          </div>
          <div className=' py-2 border-t border-b  border-[#86358a]'>
            <div onClick={() => handleModalOpen(<PlansAndSetup />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
              <h1 className='text-lg lg:text-[1vw]'>Plans and Perks</h1>
              <img className='w-8 lg:w-8' src={ModalIcon} alt='' />
            </div>
          </div>
          <div className=' py-2 border-t border-b  border-[#86358a]'>
            <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 3" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
              <h1 className='text-lg lg:text-[1vw]'>Lets break it down</h1>
              <img className='w-8 lg:w-8' src={ModalIcon} alt='' />
            </div>
          </div>
          <div className=' py-2 border-t border-b  border-[#86358a]'>
            <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 4" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
              <h1 className='text-lg lg:text-[1vw]'>Why Rox</h1>
              <img className='w-8 lg:w-8' src={ModalIcon} alt='' />
            </div>
          </div>
          <div className=' py-2 border-t border-b  border-[#86358a]'>
            <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 5" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
              <h1 className='text-lg lg:text-[1vw]'>OffBoarding</h1>
              <img className='w-8 lg:w-8' src={ModalIcon} alt='' />
            </div>
          </div>
          <div className=' py-2 border-t border-b  border-[#86358a]'>
            <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 6" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
              <h1 className='text-lg lg:text-[1vw]'>Port in</h1>
              <img className='w-8 lg:w-8' src={ModalIcon} alt='' />
            </div>
          </div>
          <div className=' py-2 border-t border-b  border-[#86358a]'>
            <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 7" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
              <h1 className='text-lg lg:text-[1vw]'>Sim Delivery</h1>
              <img className='w-8 lg:w-8' src={ModalIcon} alt='' />
            </div>
          </div>
          <div className=' py-2 border-t border-b  border-[#86358a]'>
            <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 8" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
              <h1 className='text-lg lg:text-[1vw]'>esim activation</h1>
              <img className='w-8 lg:w-8' src={ModalIcon} alt='' />
            </div>
          </div>
          <div className=' py-2 border-t border-b  border-[#86358a]'>
            <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 9" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
              <h1 className='text-lg lg:text-[1vw]'>Value added services</h1>
              <img className='w-8 lg:w-8' src={ModalIcon} alt='' />
            </div>
          </div>
          <div className=' py-2 border-t border-b  border-[#86358a]'>
            <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 10" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
              <h1 className='text-lg lg:text-[1vw]'>Roaming and IDD</h1>
              <img className='w-8 lg:w-8' src={ModalIcon} alt='' />
            </div>
          </div>
          <div className=' py-2 border-t border-b  border-[#86358a]'>
            <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 11" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
              <h1 className='text-lg lg:text-[1vw]'>Contact us</h1>
              <img className='w-8 lg:w-8' src={ModalIcon} alt='' />
            </div>
          </div>
        </div>
       
      </motion.div>

      <Modal
      isOpen={isModalOpen}
      onClose={handleModalClose}
      content={modalContent}
    />
    </div>
  )
}

export default FaqsContent
