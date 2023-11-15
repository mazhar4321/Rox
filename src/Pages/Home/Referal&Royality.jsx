import React from 'react'
import slide from '../../assets/slide4-img.webp'
import Refer from '../../assets/ref.png'
import Thrive from '../../assets/thrive.png'
import Earn from '../../assets/earn.png'
import BtnIcon from '../../assets/icon-slide-4.png'
import RoundedIcon from '../../assets/slide-1-graphic-2.png'
import Globe from '../../assets/globe.png'
import PurpleGradient from '../../assets/gradient-purple.png'
import RRR from '../../assets/rrr.png'
import OOO from '../../assets/ooo.png'
import XXX from '../../assets/xxx.png'

function Referal() {
  return (
    <div className='relative h-screen '>
    <div className='absolute w-full h-full z-10 shade'>
    <img className='w-full h-full' src={PurpleGradient} alt=''/>
    </div>
    <div className='flex flex-col gap-1 justify-center absolute left-0 h-full z-10'>
    <div className='flex'>
    <img className=' h-[18vh]' src={RRR} alt=''/>
    <img className=' h-[18vh]' src={RRR} alt=''/>
    <img className=' h-[18vh]' src={RRR} alt=''/>
    <img className=' h-[18vh]' src={RRR} alt=''/>
    <img className=' h-[18vh]' src={RRR} alt=''/>
    <img className=' h-[18vh]' src={RRR} alt=''/>
    </div>
    <div className='flex'>
    <img className=' h-[18vh]' src={OOO} alt=''/>
    <img className=' h-[18vh]' src={OOO} alt=''/>
    <img className=' h-[18vh]' src={OOO} alt=''/>
    <img className=' h-[18vh]' src={OOO} alt=''/>
    <img className=' h-[18vh]' src={OOO} alt=''/>
    <img className=' h-[18vh]' src={OOO} alt=''/>
    </div>
    <div className='flex'>
    <img className=' h-[18vh]' src={XXX} alt=''/>
    <img className=' h-[18vh]' src={XXX} alt=''/>
    <img className=' h-[18vh]' src={XXX} alt=''/>
    <img className=' h-[18vh]' src={XXX} alt=''/>
    <img className=' h-[18vh]' src={XXX} alt=''/>
    <img className=' h-[18vh]' src={XXX} alt=''/>
    </div>
    </div>
    
    <img src={Globe} className='absolute top-28 left-1/3 w-28' alt='' />
    <div className='z-10 h-screen container relative justify-between flex flex-col lg:flex-row'>
    <div className=' z-10 absolute lg:left-24 left-5 bottom-0 lg:top-20 top-5 '>
    <img src={RoundedIcon} className='absolute top-48 w-28' alt='' />
    <img className='max-h-full' src={slide} alt='' />
    </div>
    <div className=' w-full  lg:py-20 py-10 uppercase h-full text-white justify-end flex flex-col lg:gap-5 gap-1 lg:items-end items-center '>
  
    <h1 className='text-start font-[TacticSans-bold] text-base text-[#87348a] lg:text-4xl z-10'>REFERRALS & LOYALTY   </h1>
    <div className='flex justify-between lg:items-end items-center z-10 flex-col'>
    <img src={Refer} className='w-fit h-8 lg:h-[18vh]' alt=' ' />
    <img src={Earn} className='w-fit h-8 lg:h-[18vh]' alt=' ' />
    <img src={Thrive} className='w-fit h-8 lg:h-[17vh]' alt=' ' />
    </div>
    <p className='mt-2 lg:text-right text-[#87348a] z-10 2xl:text-base text-xs text-center'>Refer friends to ROX, score big points for you and your squad!    </p>
    <div className='bg-[#eeea99] w-fit float-right mt-2 flex items-center gap-5 z-10 refer-now lg:py-1 py-0.5'>
    <h1 className='download-rox text-lg text-white 2xl:text-xl '>Refer Now</h1>
    <img src={BtnIcon} alt='' />
   
    </div>
    </div>
    </div>
    </div>
  )
}

export default Referal
