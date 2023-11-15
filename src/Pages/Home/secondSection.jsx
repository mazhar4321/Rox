import React from 'react'
import slide2 from '../../assets/slide2-img.webp'
import Roxn from '../../assets/rox-n.png'
import Roll from '../../assets/roll.png'
import GooglePlay from '../../assets/google-play.png'
import AppStore from '../../assets/app-store.png'
import SliderGraphic from '../../assets/slide-1-graphic-3.png'
import SliderGraphic2 from '../../assets/slide-2-graphic-1.png'
import SliderGraphic3 from '../../assets/slide-2-graphic-3.png'

import YellowGradient from '../../assets/gradiant-yellow.png'
import BgImageAnimation from '../../components/Animation/BgImageAnimation'

function SecondSection() {
  return (
    <div className='relative h-screen'>
    <div className='absolute w-full h-full z-10 shade'>
    <img className='w-full h-full' src={YellowGradient} alt=''/>
    </div>
    <BgImageAnimation/>
    
    <div>
  
    <img className='absolute bottom-10 left-1/2' src={SliderGraphic3} alt='' />
    </div>
    <div className='container mx-auto '>
    <div className=' z-10 h-screen relative justify-between flex flex-col lg:flex-row'>
    <div className='  z-10 absolute lg:-bottom-10 lg:top-40 top-10 lg:left-0 w-full  z-10'>
    <img className='  max-h-full' src={slide2} alt=''/>
    <img className='absolute top-60 z-20 w-24 -left-3' src={SliderGraphic} alt='' />
    <img className='absolute top-80 left-[580px] z-20 w-24 ' src={SliderGraphic2} alt='' />
    </div>
    <div className='w-full h-full float-right lg:py-20 py-10 uppercase text-white flex flex-col justify-end items-center lg:justify-center gap-1 lg:gap-5 lg:items-end '>
      <h1 className='xl:text-xl 2xl:text-4xl text-white text-end font-[TacticSans-bold] text-xl z-10'>Why Rox?</h1>
      <div className='z-10'>
      <img className='w-fit lg:h-[15vh] h-8' src={Roxn} alt=''/>
      </div>
      <div className=' z-10'>
      <img className='w-fit lg:h-[15vh] h-8' src={Roll} alt=''/>
      </div>
      <div className='font-[TacticSans-bold]  text-xs text-end z-10 flex items-end justify-end'>
      <p className='xl:text-xs lg:w-1/2 w-full text-[10px] text-center  2xl:text-base'>ROX is a subscription-based digital lifestyle brand that
      lets you enjoy the best of both worlds. We’re the digital
      essentials toolkit you need to enjoy the real
      online experience.</p>
      </div>
      <div className=' z-20'>
      <h3  className='text-center download-rox  items-center 2xl:text-xl font-[TacticSans-bold] green-stroke lg:mr-10 mr-0'>DOWNLOAD & ROX NOW</h3>
      </div>
      <div className='flex gap-5 z-10'>
      <img className='h-8 lg:h-12' src={AppStore} alt='' />
      <img className='h-8 lg:h-12' src={GooglePlay} alt='' />
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default SecondSection
