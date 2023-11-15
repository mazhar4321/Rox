import React, { useEffect, useState } from 'react'
import Logo from '../../assets/logo.png'
import ApplyNowButton from '../../assets/apply-now.png'
import './style.css'
import Sidebar from './MobileNan/MobileNav'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])
  return (
    <div>
      <Sidebar />
      <div

        className=' navbar fixed top-0 right-0 left-0 w-full hidden lg:block'>
        <div className='container mx-auto py-4 flex justify-between items-center '>
          <div>
            <img className='w-24' src={Logo} alt='' />
          </div>
          <div className='flex    uppercase text-white cursor-pointer font-[TacticSans-bold]'>
            <h1 className='purple-stroke font-[TacticSans-bold] border-r border-white px-4'>why rox</h1>
            <h1 className='purple-stroke border-r border-white px-4'>Voucher and discounts </h1>
            <h1 className='purple-stroke border-r border-white px-4'>referal and royality</h1>
            <h1 className='purple-stroke border-r border-white px-4'>our data plans</h1>
            <h1 className='purple-stroke border-r border-white px-4'>faqs</h1>
          </div>
          <div className='cursor-pointer'>
            <img className='w-40' src={ApplyNowButton} alt='' />
          </div>
        </div>

      </div>
    </div>

  )
}

export default Navbar
