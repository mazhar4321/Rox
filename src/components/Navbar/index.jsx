import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import ApplyNowButton from '../../assets/apply-now.png';
import './style.css';
import Sidebar from './MobileNan/MobileNav';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

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
    <motion.div
  variants={{
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut', stiffness: 100 } },
    hidden: { y: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeIn', stiffness: 100 } },
  }}
  animate={hidden ? 'hidden' : 'visible'}
  className='navbar fixed top-0 right-0 left-0 w-full h-12 lg:h-fit z-30'
>
      <div className='container mx-auto py-4 flex justify-between items-center lg:flex'>
        <div>
          <img className='w-24' src={Logo} alt='' />
        </div>
        <div className='flex uppercase text-white cursor-pointer font-[TacticSans-bold]'>
          {items.map((nav) => renderNavLink(nav))}
        </div>
        <div className='cursor-pointer'>
          <img className='w-40' src={ApplyNowButton} alt='' />
        </div>
      </div>

      <div className='flex justify-center relative h-screen lg:hidden'>
        <Sidebar />
        <h1>Rox</h1>
      </div>
    </motion.div>
  );
};

export default Navbar;