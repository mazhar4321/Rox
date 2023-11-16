import React from 'react'
import Apply from '../../assets/apply.png'
import Now from '../../assets/now.png'
import Slide from '../../assets/slide3-img.webp'
import Slide1 from '../../assets/slide-2-graphic-1.png'
import Slide2 from '../../assets/slide-1-graphic-2.png'
import GreenStart from '../../assets/star-green.png'
import GreenWhite from '../../assets/star-white.png'
import GreyShadow from '../../assets/grey.png'
import Play from '../../assets/play.png'
import RRR from '../../assets/rrr.png'
import OOO from '../../assets/ooo.png'
import XXX from '../../assets/xxx.png'
import BgImageAnimation from '../../components/Animations/BgImageAnimation'

function ApplyNow() {
  return (
    <div className=' flex w-full relative'>
    <div className='absolute w-full h-full z-10 shade'>
    <img className='w-full' src={GreyShadow} alt=''/>
    </div>
    <BgImageAnimation/>

    <img className='absolute top-36 w-24 right-20' src={Slide1} alt='' />
    <img className='absolute top-14 left-1/3' src={GreenStart} alt='' />
    <img className='absolute top-14 left-2/3' src={GreenWhite} alt='' />
    <img className='absolute top-10 right-10    ' src={GreenWhite} alt='' />
    <img className='absolute top-14 left-1/2 w-24'  src={Slide2} alt='' />
    <div className='container mx-auto z-10 flex h-screen flex-col lg:flex-row'>
    <div className='lg:w-1/2 w-full  flex lg:flex-col flex-row gap-5 justify-center mb-5'>
      <img src={Apply} className='lg:h-[15vh] w-fit h-8' alt='' />
      <img src={Now}  className='lg:h-[15vh] h-8 w-fit' alt='' />
     
      </div>
      <div className='lg:w-3/6 w-full flex flex-col justify-center  mx-auto  max-h-full form'>
      <div className='rounded-lg bg-[#86358a] p-10'>
      <form className='w-full '>
      <div className='w-full my-2'>
      <input  className='w-full bg-transparent border-b border-white py-2 2xl:py-4 text-white outline-none 2xl:text-3xl  ' placeholder='First Name *' type='text' />
      </div>
      <div className='w-full my-2'>
      <input  className='w-full bg-transparent border-b border-white py-2 2xl:py-4 text-white outline-none 2xl:text-3xl' placeholder='Last Name *' type='text' />
      </div>
      <div className='w-full my-2'>
      <input  className='w-full bg-transparent border-b border-white py-2 2xl:py-4 text-white outline-none 2xl:text-3xl' placeholder='Email*' type='email' />
      </div>
      <div className='w-full my-2'>
      <input  className='w-full bg-transparent border-b border-white py-2 2xl:py-4 text-white outline-none 2xl:text-3xl' placeholder='Mobile Number*' type='number' />
      </div>
      <div className='my-3 2xl:py-4'>
      <h1 className='text-white lg:text-2xl text-xs 2xl:text-4xl'>is Your Phone e-Sim ready?</h1>
      </div>
      <div className='flex gap-2 2xl:gap-6 my-2 text-white'>
      <input type='radio' className=' w-4 2xl:w-6'/> 
      <h1 className='text-white lg:text-xl text-xs 2xl:text-4xl'>Yes, I'm all set for e-SIM!</h1>
      </div>
      <div className='flex gap-2 2xl:gap-6 my-2 text-white'>
      <input type='radio' className=' w-4 2xl:w-6'/> 
      <h1 className='text-white lg:text-xl text-xs 2xl:text-4xl'>No, I'm sticking with the physical SIM.</h1>
      </div>
      <div className='flex gap-2 2xl:gap-6 my-2 text-white'>
      <input type='radio' className=' w-4 2xl:w-6'/> 
      <h1 className='text-white lg:text-xl text-xs 2xl:text-4xl'>Not sure, but I'm open to new vibes!</h1>
      </div>
      <div className='flex gap-2 my-2 2xl:gap-6 my-2 text-white'>
      <input type='checkbox' className='-mt-4 w-4 2xl:w-6'/> 
      <h1 className='text-white lg:text-xl mb-5 text-xs 2xl:text-4xl'>I agree to the terms and conditions</h1>
      </div>

      <div className="reveal-now bg-[#2b2c3e] flex items-center my-2 2xl:py-2 mx-auto w-fit">
      <h6 className="uppercase text-white lg:text-2xl 2xl:text-5xl text-lg get-now">Submit  </h6>
      <img className='w-8 lg:w-fit 2xl:w-16' src={Play} alt=""/>
      </div>
      </form>
      
      </div>
      </div>    
      </div>
    </div>
  )
}

export default ApplyNow
