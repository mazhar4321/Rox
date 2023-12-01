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
import GetNow from '../../assets/get-now-yellow-icon.png'
import Wegot from '../../assets/we-got.webp'
import PlansImg from '../../assets/plans.webp'
import TermsAndConditions from '../Modal/TermsAndConditions'

function PlansCard({ onModalOpen, GBData, src,allnetworksmins,sms ,price, color,i}) {
  const getWidth = () => {
    const screenWidth = window.innerWidth;
    // Set the width to half of the screen width
    return screenWidth / 2 * 1.4;
  };
  const getHeight = () => {
    const screenWidth = window.innerHeight;
    // Set the width to half of the screen width
    return screenWidth / 2 * 1.5;
  };
  return (
    <div className='w-full z-30'>
    <div style={{width: getWidth()}} className='lg:hidden flex items-center flex-col z-30 py-[2vh] px-2 gap-4 justify-center '>
        <h1 style={{ textShadow: `2px 2px ${color}`, WebkitTextStroke: '0.3px white' }}
         className='bg-[#2b2c3e] rounded-lg text-white w-fit px-2 py-1 justify-center  text-[6vw]'>Rs: {price}</h1>
        <img className='w-fit' src={src} alt='' />
        <div className='flex flex-col justify-center items-center'>
          <div className='px-2'>
          <h1 style={{
            WebkitTextStrokeColor: color,
            WebkitTextStrokeWidth: '1px',
            color: 'white', // Make text transparent to show only the stroke
          }} className={`text-[8vw]  text-white`}>{GBData}</h1>
            <h6  className='text-[10px] text-center'>GB Data      </h6>
          </div>
          <div className='px-2'>
            <h1 style={{
              WebkitTextStrokeColor: color,
              WebkitTextStrokeWidth: '1px',
              color: 'white', // Make text transparent to show only the stroke
            }} className='text-[8vw] num-stroke text-white'>{allnetworksmins}  </h1>
            <h6 className='text-[10px] text-center' >All Ntwork Mins      </h6>
          </div>
          <div className='px-2'>
            <h1 style={{
              WebkitTextStrokeColor: color,
              WebkitTextStrokeWidth: '1px',
              color: 'white', // Make text transparent to show only the stroke
            }} className='text-[8vw] num-stroke text-white'>{sms} </h1>
            <h6 className='text-[10px] text-center'>SMS </h6>
          </div>
        </div>
        <div>
          <div className="reveal-now bg-[#2b2c3e] flex items-center w-fit mx-auto justify-center">
            <h6 className="uppercase text-white text-xs get-now">Get Now</h6>
            <img className='w-6' src={GetNow} alt="" />
          </div>
          <button onClick={()=> onModalOpen(<TermsAndConditions/>)} className='border font-bold border-white p-2 text-[10px] rounded-lg mt-3 items-center flex justify-center mx-auto'> Terms & Conditions
          </button>
        </div>
        </div>
    
    </div>
    
  )
}

export default PlansCard
