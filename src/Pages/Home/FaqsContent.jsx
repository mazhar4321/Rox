import React, { useEffect, useState } from 'react'
import FaqImg from '../../assets/faqs.webp'
import ModalIcon from '../../assets/modal-icon.png'
import Modal from '../../components/Modal';
import AccountSetupContent from '../../components/Modal/AccountSetupContent';
import ReadyToRox from '../../components/Modal/ReadyToRox';
import PlansAndSetup from '../../components/Modal/PlansAndSetup';
import ReadyToRox3 from '../../components/Modal/ReadyToRox3';

function FaqsContent() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const handleModalOpen = (contentComponent) => {
    setModalContent(contentComponent);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'
  };
  const handleModalClose = () => {
    setModalOpen(false);
    setModalContent(null);
    document.body.style.overflow = 'auto';  // Clear modal content on close
  };
  
  return (
    <div className='z-30 flex justify-end w-full flex-col justify-end items-end'>
    <div className='lg:w-1/2 w-full'>
    <img className='lg:w-64 w-40 px-4 py-2' src={FaqImg} alt='' />
    </div>
    <div className=' w-full flex justify-end'>
    <div className='border-1 faqs-content border-[#86358a]  rounded-md lg:w-1/2 w-full py-5 border z-30 bg-[#2b2c3e] overflow-y-scroll h-[70vh]'>
    
      <div className=' py-2 border-b  border-white'>
        <div onClick={() => handleModalOpen(<AccountSetupContent />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
          <h1 className='text-lg 2xl:text-2xl'>Ready To Rox</h1>
          <img className='w-8 2xl:w-12' src={ModalIcon} alt='' />
        </div>
      </div>
      <div className=' py-4 border-t border-b  border-white'>
        <div onClick={() => handleModalOpen(<ReadyToRox />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
          <h1 className='text-lg 2xl:text-2xl'>Account Setup</h1>
          <img className='w-8 2xl:w-12' src={ModalIcon} alt='' />
        </div>
      </div>
      <div className=' py-4 border-t border-b  border-white'>
        <div onClick={() => handleModalOpen(<PlansAndSetup />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
          <h1 className='text-lg 2xl:text-2xl'>Plans and Perks</h1>
          <img className='w-8 2xl:w-12' src={ModalIcon} alt='' />
        </div>
      </div>
      <div className=' py-4 border-t border-b  border-white'>
        <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 3" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
          <h1 className='text-lg 2xl:text-2xl'>Ready To Rox 3</h1>
          <img className='w-8 2xl:w-12' src={ModalIcon} alt='' />
        </div>
      </div>
      <div className=' py-4 border-t border-b  border-white'>
        <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 4" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
          <h1 className='text-lg 2xl:text-2xl'>Ready To Rox 4</h1>
          <img className='w-8 2xl:w-12' src={ModalIcon} alt='' />
        </div>
      </div>
      <div className=' py-4 border-t border-b  border-white'>
        <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 5" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
          <h1 className='text-lg 2xl:text-2xl'>Ready To Rox 5</h1>
          <img className='w-8 2xl:w-12' src={ModalIcon} alt='' />
        </div>
      </div>
      <div className=' py-4 border-t border-b  border-white'>
        <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 6" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
          <h1 className='text-lg 2xl:text-2xl'>Ready To Rox 6</h1>
          <img className='w-8 2xl:w-12' src={ModalIcon} alt='' />
        </div>
      </div>
      <div className=' py-4 border-t border-b  border-white'>
        <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 7" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
          <h1 className='text-lg 2xl:text-2xl'>Ready To Rox 7</h1>
          <img className='w-8 2xl:w-12' src={ModalIcon} alt='' />
        </div>
      </div>
      <div className=' py-4 border-t border-b  border-white'>
        <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 8" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
          <h1 className='text-lg 2xl:text-2xl'>Ready To Rox 8</h1>
          <img className='w-8 2xl:w-12' src={ModalIcon} alt='' />
        </div>
      </div>
      <div className=' py-4 border-t border-b  border-white'>
        <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 9" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
          <h1 className='text-lg 2xl:text-2xl'>Ready To Rox 9</h1>
          <img className='w-8 2xl:w-12' src={ModalIcon} alt='' />
        </div>
      </div>
      <div className=' py-4 border-t border-b  border-white'>
        <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 10" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
          <h1 className='text-lg 2xl:text-2xl'>Ready To Rox 10</h1>
          <img className='w-8 2xl:w-12' src={ModalIcon} alt='' />
        </div>
      </div>
      <div className=' py-4 border-t border-b  border-white'>
        <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 11" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
          <h1 className='text-lg 2xl:text-2xl'>Ready To Rox 11</h1>
          <img className='w-8 2xl:w-12' src={ModalIcon} alt='' />
        </div>
      </div>
      <div className=' py-4 border-t border-b  border-white'>
        <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 12" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
          <h1 className='text-lg 2xl:text-2xl'>Ready To Rox 12</h1>
          <img className='w-8 2xl:w-12' src={ModalIcon} alt='' />
        </div>
      </div>
      <div className=' py-4 border-t border-b  border-white'>
        <div onClick={() => handleModalOpen(<ReadyToRox3 title="Sign up 13" />)} className='flex justify-between items-center text-2xl cursor-pointer font-semibold text-white px-5'>
          <h1 className='text-lg 2xl:text-2xl'>Ready To Rox 13</h1>
          <img className='w-8 2xl:w-12' src={ModalIcon} alt='' />
        </div>

       
      </div>
      </div>  
      <Modal
      isOpen={isModalOpen}
      onClose={handleModalClose}
      content={modalContent}
    />
    </div>
    </div>
  )
}

export default FaqsContent
