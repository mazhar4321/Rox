// import React, { useEffect, useState } from 'react'
// import Logo from '../../assets/logo.png'
// import ApplyNowButton from '../../assets/apply-now.png'
// import './style.css'

// const Navbar = () => {
//     const [show, setShow] = useState(false)
//     const controlNavbar = () => {
//         if (window.scrollY > 250 ) {
//             setShow(true)
//         }else{
//           setShow(false)
//         }
//     }
  
//     useEffect(() => {
//         window.addEventListener('scroll', controlNavbar)
//         return () => {
//             window.removeEventListener('scroll', controlNavbar)
//         }
//     }, [])
//   return (
    
//     <div

//       className={`active ${show && 'hidden'} navbar fixed top-0 right-0 left-0 w-full hidden'`}>
//     <div className='container mx-auto py-4 flex justify-between items-center'>
//     <div>
//        <img className='w-24' src={Logo} alt=''/>
//        </div>
//        <div className='flex    uppercase text-white cursor-pointer font-[TacticSans-bold]'>
//        <h1 className='purple-stroke font-[TacticSans-bold] border-r border-white px-4'>why rox</h1>
//        <h1 className='purple-stroke border-r border-white px-4'>Voucher and discounts </h1>
//        <h1 className='purple-stroke border-r border-white px-4'>referal and royality</h1>
//        <h1 className='purple-stroke border-r border-white px-4'>our data plans</h1>
//        <h1 className='purple-stroke border-r border-white px-4'>faqs</h1>
//        </div>
//        <div className='cursor-pointer'>
//        <img className='w-40' src={ApplyNowButton} alt=''/>
//        </div>
//        </div>
//     </div>
//   )
// }

// export default Navbar



import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import ApplyNowButton from '../../assets/apply-now.png';
import Arrow from '../../assets/arrow-header.png';
import './style.css';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Sidebar from './MobileNav/MobileNav';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setHidden(window.scrollY > 150);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const {scrollY} = useScroll()
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previoys = scrollY.getPrevious()
    console.log(previoys)
    if(latest > previoys && latest > 150){
      setHidden(true)
    }else{
      setHidden(false)
    }
  })

  const items = ["Why Rox", "VOUCHER AND DISCOUNTS", "REFERAL AND ROYALITY ", "OUR DATA PLANS ", "Faqs"];
  const renderNavLink = (content) => {
    const scrollToId = `${content.replace(/\s/g, '').trim()}`;

    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <ul key={content}>
        <li className='purple-stroke border-r border-white px-4' onClick={handleClickNav}>
          {content}
        </li>
      </ul>
    );
  };

  return (
    <div>
    <motion.div
  variants={{
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut', stiffness: 100 } },
    hidden: { y: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeIn', stiffness: 100 } },
  }}
  animate={hidden ? 'hidden' : 'visible'}
  className='navbar fixed top-0 right-0 left-0 w-full h-12 lg:h-fit z-30 hidden lg:block z-50'
>
      <div className='container mx-auto py-4 flex justify-between items-center lg:flex'>
        <div className='cursor-pointer' onClick={()=> document.getElementById('Hero').scrollIntoView({ behavior: 'smooth' })}>
          <img className='w-24' src={Logo} alt='' />
        </div>
        <div className='flex uppercase text-white cursor-pointer font-[TacticSans-bold]'>
          {items.map((nav) => renderNavLink(nav))}
        </div>
        <div className='cursor-pointer' onClick={()=> document.getElementById('ApplyNow').scrollIntoView({ behavior: 'smooth' })}>
          <img className='w-40' src={ApplyNowButton} alt='' />
        </div>
      </div>
    </motion.div>
    <motion.div
    variants={{
      visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut', stiffness: 100 } },
      hidden: { y: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeIn', stiffness: 100 } },
    }}
    animate={hidden ? 'hidden' : 'visible'}
    className='navbar fixed top-0 right-0 left-0 w-full h-12 lg:h-fit z-50'>
    <div className='flex justify-between relative  px-5 py-2.5 lg:hidden'>
        <Sidebar />
        <div className='cursor-pointer' onClick={()=> document.getElementById('Hero').scrollIntoView({ behavior: 'smooth' })}>
          <img className='w-20' src={Logo} alt='' />
        </div>
        <div className=''>
          <img className='w-fit' src={Arrow} alt='' />
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Navbar;