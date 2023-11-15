import React from 'react'
import X from '../../assets/x.svg'
import FB from '../../assets/fb.svg'
import Insta from '../../assets/insta.svg'
import Youtube from '../../assets/utube.svg'
import Tictok from '../../assets/tickot.svg'
import SocialBar from '../../assets/social-bdr.png'
import JazzLogo from '../../assets/jazz-logo.png'

function Footer() {
  return (
    <div  className='container mx-auto py-4'>
      <div className='flex justify-between flex-wrap my-2 text-xs font-bold items-center'>
      <h1>WHY ROX</h1>
      <h1>VOUCHERS & DISCOUNTS</h1>
      <h1>REFERRALS & Loyality</h1>
      <h1>Your Data Plans</h1>
      <h1>Faqs</h1>
      <h1>Apply Now</h1>
      <div className=' flex gap-10 px-5 py-2 relative'>
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
      <div className='flex gap-5 items-center'>
      <h1>Powered By:</h1>
      <img className='w-16' src={JazzLogo} alt='' />
      </div>
      </div>
      <div className='flex gap-10 text-xs font-extrabold'>
      <h1>© COPYRIGHT 2023 ROX, ALL RIGHTS RESERVED.</h1>
      <h1>Terms & Conditions.</h1>
      </div>
    </div>
  )
}

export default Footer
