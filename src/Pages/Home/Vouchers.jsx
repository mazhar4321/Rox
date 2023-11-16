import React from 'react'
import Collab from '../../assets/collab.png'
import Central from '../../assets/central.png'
import Foodpanda from '../../assets/foodpanda.png'
import Careem from '../../assets/careem.png'
import Daraz from '../../assets/daraz.png'
import Golootloo from '../../assets/golootloo.png'
import Slide from '../../assets/slide3-img.webp'
import Slide1 from '../../assets/slide-2-graphic-1.png'
import Slide2 from '../../assets/slide-1-graphic-2.png'
import GreenStart from '../../assets/star-green.png'
import GreenWhite from '../../assets/star-white.png'
import YellowGradient from '../../assets/gradiant-yellow.png'
import RRR from '../../assets/rrr.png'
import OOO from '../../assets/ooo.png'
import XXX from '../../assets/xxx.png'
function Vouchers() {
  return (
    <div className='flex w-full relative'>
    <div className='absolute w-full h-full z-10 shade'>
    <img className='w-full h-full' src={YellowGradient} alt=''/>
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

    <img className='absolute top-36 w-24 right-20' src={Slide1} alt='' />
    <img className='absolute top-14 left-1/3' src={GreenStart} alt='' />
    <img className='absolute top-14 left-2/3' src={GreenWhite} alt='' />
    <img className='absolute top-10 right-10    ' src={GreenWhite} alt='' />
    <img className='absolute top-14 left-1/2 w-24'  src={Slide2} alt='' />
    <div className='container flex  lg:py-0 w-full   h-screen  relative'>
    <div className='lg:w-2/3 w-full flex flex-col lg:gap-5 gap-1 justify-end lg:justify-center lg:items-start py-10 items-center h-full z-20'>
      <h1 className='text-3xl uppercase text-white font-[TacticSans-bold] 2xl:text-6xl lg:text-2xl text-sm'>  Vouchers & Discounts</h1>
      <img src={Collab} className='w-fit lg:h-[15vh] h-8' alt='' />
      <img src={Central} className='w-fit lg:h-[15vh] h-8' alt='' />
      <div className='text-white'>
      <p className='font-[TacticSans-bold] text-center lg:text-base text-xs 2xl:text-3xl'>Stay tuned for some sick collabs dropping soon.</p>
      </div>
      <div>
      <h3 className='discount-stroke text-white items-center  w-full flex justify-center lg:ml-10 ml-0 lg:text-2xl text-sm 2xl:text-4xl'>DISCOUNT VOUCHERS</h3>
      </div>
      <p className='font-[TacticSans-bold] text-center lg:text-base text-xs 2xl:text-3xl text-white'>Download App to  enjoy discount</p>
      <div className='flex  gap-2 2xl:gap-10 z-20'>
      <div className='text-white'>
      <img   className='w-28 lg:w-36 2xl:w-60' src={Foodpanda} alt=''/>
      <div className='mt-5'>
      <h1 className='lg:text-xl 2xl:text-3xl text-sm'>Foodpanda</h1>
      <h6 className='text-xs text-[10px] 2xl:text-base font-sans'>Panda Pro (10 free deliveries)
      
      </h6>
      </div>    
      </div>
      <div className='text-white'>
      <img   className='w-28 lg:w-36 2xl:w-60' src={Careem} alt=''/>
      <div className='mt-5'>
      <h1 className='lg:text-xl text-sm 2xl:text-3xl'>Careem</h1>
      <h6 className='text-xs text-[10px] 2xl:text-base font-sans'>30% Discount for ROX customers
      
      </h6>
      </div>
      </div>
      <div className='text-white'>
      <img   className='w-28 lg:w-36 2xl:w-60' src={Daraz} alt=''/>
      <div className='mt-5'>
      <h1 className='lg:text-xl text-sm 2xl:text-3xl'>Daraz</h1>
      <h6 className='text-xs text-[10px] 2xl:text-base font-sans'>50% Off for ROX Customers
      
      </h6>
      </div>
      </div>
      <div className='text-white'>
      <img   className='w-28 lg:w-36 2xl:w-60' src={Golootloo} alt=''/>
      <div className='mt-5'>
      <h1 className='lg:text-xl text-sm 2xl:text-3xl'>Golootloo</h1>
      <h6 className='text-[10px] 2xl:text-base font-sans'>Free Subscription for Rs. 200
      
      </h6>
      </div>
      </div>

      </div>
      </div>
      <div className=' z-10 absolute right-20 bottom-0  '>
      <img className='w-fit max-h-full 2xl:h-[90vh] lg:h-[90vh]' src={Slide} alt='' />
      </div>
      </div>
    </div>
  )
}

export default Vouchers
