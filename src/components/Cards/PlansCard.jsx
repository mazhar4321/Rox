import React, { useState } from 'react'
import Emoji from '../../assets/emoji-yellow.png'
import Phone from '../../assets/phone-icon.png'
import Sms from '../../assets/message-icon.png'
import Free from '../../assets/foodpanda-icon.png'
import Careem from '../../assets/careem-icon.png'
import Foodpanda from '../../assets/foodpanda-icon.png'
import Golooto from '../../assets/golootlo.png'
import Play from '../../assets/play.png'
import TermsConditionApplyNow from '../Modal/TermsConditionApplyNow'
import Modal from '../Modal'

function PlansCard({className, onModalOpen}) {
  
  return (
    <div className='w-full'>
    <div className={className}>
      <div className='flex justify-between items-center'>
      <img  className="w-fit h-fit" src={Emoji} alt=''/>
      <div className='flex flex-col gap-0'>
      <h1 className='text-lg mb-0'>Turbo1</h1>
      <h1 className='text-sm'>30 Days</h1>
      </div>
      <div className='bg-[#2b2c3e] rounded-md px-2 flex flex-col gap-0'>
      <h1 className='text-[#eae282]'>Rs: 200</h1>
      <h1 className='line-through text-white text-sm text-center py-0 mt-0'>Rs: 100</h1>
      </div>
      </div>
      <div className='bg-white rounded-md mt-4 px-4'>
      <div className='flex justify-center items-center flex-col'>
      <h1 className='text-[#eae282] text-5xl'>50</h1>
      <h1>GB Data</h1>
      </div>
      <div className='my-4 border-b border-[#cdcccb]'>
      <div className='flex justify-between items-center '>
      <div className='flex gap-2'>
      <img className='w-fit h-fit' src={Phone} alt='' />
      <h6 className='text-xs'>All Network Calls</h6>
      </div>
      <h6 className='text-xs'>500 mins</h6>
      </div>
      <div className='flex justify-between items-center pb-4'>
      <div className='flex gap-2'>
      <img className='w-fit h-fit' src={Sms} alt='' />
      <h6 className='text-xs'>SMS</h6>
      </div>
      <h6 className='text-xs'>500 SMS</h6>
      </div>
      </div>
      <div className='pb-2'>
      <div className='flex gap-2 items-center'>
      <img className='w-fit h-fit' src={Free} alt='' />
      <h1 className='text-xs'>2 Free Services</h1>
      </div>
      <div className='flex gap-2 items-center'>
      <img className='w-fit h-fit' src={Foodpanda} alt='' />
      <h1 className='text-xs'>Free PandaPro Subscription</h1>
      </div>
      <div className='flex gap-2 items-center'>
      <img className='w-fit h-fit' src={Golooto} alt='' />
      <h1 className='text-xs'>Free Golootlo Subscription</h1>
      </div>
      <div className='flex gap-2 items-center'>
      <img className='w-fit h-fit' src={Careem} alt='' />
      <h1 className='text-xs'>10% off on Careem</h1>
      </div>
      <div className="reveal-now bg-[#2b2c3e] flex items-center my-2  mx-auto w-fit">
      <h6 className="uppercase text-white lg:text-2xl text-lg get-now">Submit  </h6>
      <img className='lg:w-fit w-8 py-0.5' src={Play} alt=""/>
      </div>
      <h6 onClick={()=> onModalOpen(<TermsConditionApplyNow/>)} className='text-xs text-black text-center'>Terms & Condition</h6>
      
      </div>
      </div>
      
    </div>
    
    </div>
    
  )
}

export default PlansCard
