import React, { useState } from 'react'
import X from '../../assets/x.svg'
import FB from '../../assets/fb.svg'
import Insta from '../../assets/insta.svg'
import Youtube from '../../assets/utube.svg'
import Tictok from '../../assets/tickot.svg'
import SocialBar from '../../assets/social-bdr.png'
import JazzLogo from '../../assets/jazz-logo.png'
import Modal from '../Modal'
import TermsConditionApplyNow from '../Modal/TermsConditionApplyNow'

function Footer() {
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
  return (
    <div  className='container mx-auto py-4'>
      <div className='flex lg:justify-between justify-center flex-wrap my-2 text-xs font-bold items-center uppercase'>
      <h1 className='hidden lg:block'>WHY ROX</h1>
      <h1 className='hidden lg:block'>VOUCHERS & DISCOUNTS</h1>
      <h1 className='hidden lg:block'>REFERRALS & Loyality</h1>
      <h1 className='hidden lg:block'>Your Data Plans</h1>
      <h1 className='hidden lg:block'>Faqs</h1>
      <h1 className='hidden lg:block'>Apply Now</h1>
      <div className=' flex lg:gap-10 gap-1 px-5 py-2 relative'>
      <img className='absolute left-0 top-0 h-12 w-full' src={SocialBar} alt='' />
      <h1 className='text-xs'>Rox To <br/> Know Us</h1>
      <div className='flex gap-4'>
      <img src={X} className='w-6' alt='' />
      <img src={FB} className='w-fit' alt='' />
      <img src={Insta} className='w-6' alt='' />
      <img src={Youtube}  className='w-6' alt='' />
      <img src={Tictok}  className='w-6' alt='' />
      </div>
      </div>
      <div className='flex gap-5 items-center hidden lg:block'>
      <h1>Powered By:</h1>
      <img className='w-16' src={JazzLogo} alt='' />
      </div>
      </div>
      <div className='flex lg:gap-10 flex-col lg:flex-row items-center gap-2 mt-4 lg:mt-0 text-xs font-extrabold'>
      <h1 className='text-center'>© COPYRIGHT 2023 ROX, ALL RIGHTS RESERVED.</h1>
      <h1 className='cursor-pointer uppercase' onClick={()=> handleModalOpen(<TermsConditionApplyNow/>)}>Terms & Conditions.</h1>
      </div>


      <Modal
      isOpen={isModalOpen}
      onClose={handleModalClose}
      content={modalContent}
    />
    </div>
  )
}

export default Footer
