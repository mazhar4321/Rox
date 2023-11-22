// import React from 'react'
// import Turbo1 from '../../assets/turbo1-title.webp'
// import GetNow from '../../assets/get-now-yellow-icon.png'
// import PlansCard from '../../components/Cards/PlansCard'

// function Plans() {
//     return (
//         <div className='h-screen w-full relative'>
//        <div className='lg:flex mt-10 justify-center items-center relative w-full hidden  mx-auto my-auto z-20  h-screen'>

//         <div className='absolute top-0 mx-auto my-auto flex justify-center  bg-[#eae282] 2xl:w-fit w-2/3 border border border-white py-10  px-20 rounded-md flex-col gap-4 items-center'>

//             <h1 className='bg-[#2b2c3e] rounded-lg text-white w-fit px-4 py-2 justify-center num-stroke text-lg'>Rs: 1300</h1>
//             <img className='w-fit h-[12vh]' src={Turbo1} alt='' />
//             <div className='flex'>
//                 <div className='px-5'>
//                     <h1 className='text-6xl num-stroke text-white'>25</h1>
//                     <h6 className='text-sm text-center'>GB Data      </h6>
//                 </div>
//                 <div className='w-[1px] h-12 py-4 my-1 bg-white'/>
//                 <div  className='px-5'>
//                     <h1 className='text-6xl num-stroke text-white'>2500     </h1>
//                     <h6 className='text-sm text-center' >All Ntwork Mins      </h6>
//                 </div>
//                 <div className='w-[1px] h-12 py-4 my-1 bg-white'/>
//                 <div  className='px-5'>
//                     <h1 className='text-6xl num-stroke text-white'>2500      </h1>
//                     <h6 className='text-sm text-center'>SMS </h6>
//                 </div>
//             </div>
//             <div>
//                 <div className="reveal-now bg-[#2b2c3e] flex items-center ">
//                     <h6 className="uppercase text-white text-2xl get-now">Get Now</h6>
//                     <img src={GetNow} alt="" />
//                 </div>
//                 <button className='border font-bold border-white p-3 rounded-lg mt-5  items-center flex justify-center mx-auto'> Terms & Conditions
//                 </button>
//             </div>
//         </div>
//         <div className='absolute top-10 ml-20 box-shadow-green  mx-auto my-auto flex justify-center  bg-[#56ad8b]  2xl:w-fit w-2/3  border border-white py-10  px-20 rounded-md flex-col gap-4 items-center'>

//             <h1 className='bg-[#2b2c3e] rounded-lg text-white w-fit px-4 py-2 justify-center num-stroke text-lg'>Rs: 1300</h1>
//             <img className='w-fit h-[12vh]' src={Turbo1} alt='' />
//             <div className='flex'>
//                 <div className='px-5'>
//                     <h1 className='text-6xl num-stroke text-white'>25</h1>
//                     <h6 className='text-sm text-center'>GB Data      </h6>
//                 </div>
//                 <div className='w-[1px] h-12 py-4 my-1 bg-white'/>
//                 <div  className='px-5'>
//                     <h1 className='text-6xl num-stroke text-white'>2500     </h1>
//                     <h6 className='text-sm text-center' >All Ntwork Mins      </h6>
//                 </div>
//                 <div className='w-[1px] h-12 py-4 my-1 bg-white'/>
//                 <div  className='px-5'>
//                     <h1 className='text-6xl num-stroke text-white'>2500      </h1>
//                     <h6 className='text-sm text-center'>SMS </h6>
//                 </div>
//             </div>
//             <div>
//                 <div className="reveal-now bg-[#2b2c3e] flex items-center ">
//                     <h6 className="uppercase text-white text-2xl get-now">Get Now</h6>
//                     <img src={GetNow} alt="" />
//                 </div>
//                 <button className='border font-bold border-white p-3 rounded-lg mt-5  items-center flex justify-center mx-auto'> Terms & Conditions
//                 </button>
//             </div>
//         </div>
//         <div className='absolute top-16 ml-36 box-shadow-green  mx-auto my-auto flex justify-center  bg-[#86358a]  2xl:w-fit w-2/3  border border-white py-10  px-20 rounded-md flex-col gap-4 items-center'>

//             <h1 className='bg-[#2b2c3e] rounded-lg text-white w-fit px-4 py-2 justify-center num-stroke text-lg'>Rs: 1300</h1>
//             <img className='w-fit h-[12vh]' src={Turbo1} alt='' />
//             <div className='flex'>
//                 <div className='px-5'>
//                     <h1 className='text-6xl num-stroke text-white'>25</h1>
//                     <h6 className='text-sm text-center'>GB Data      </h6>
//                 </div>
//                 <div className='w-[1px] h-12 py-4 my-1 bg-white'/>
//                 <div  className='px-5'>
//                     <h1 className='text-6xl num-stroke text-white'>2500     </h1>
//                     <h6 className='text-sm text-center' >All Ntwork Mins      </h6>
//                 </div>
//                 <div className='w-[1px] h-12 py-4 my-1 bg-white'/>
//                 <div  className='px-5'>
//                     <h1 className='text-6xl num-stroke text-white'>2500      </h1>
//                     <h6 className='text-sm text-center'>SMS </h6>
//                 </div>
//             </div>
//             <div>
//                 <div className="reveal-now bg-[#2b2c3e] flex items-center ">
//                     <h6 className="uppercase text-white text-2xl get-now">Get Now</h6>
//                     <img src={GetNow} alt="" />
//                 </div>
//                 <button className='border font-bold border-white p-3 rounded-lg mt-5  items-center flex justify-center mx-auto'> Terms & Conditions
//                 </button>
//             </div>
//         </div>
//         <div className='absolute top-24 ml-56 box-shadow-green  mx-auto my-auto flex justify-center  bg-[#67519d]  2xl:w-fit w-2/3  border border-white py-10  px-20 rounded-md flex-col gap-4 items-center'>

//             <h1 className='bg-[#2b2c3e] rounded-lg text-white w-fit px-4 py-2 justify-center num-stroke text-lg'>Rs: 1300</h1>
//             <img className='w-fit lg:h-[12vh] ' src={Turbo1} alt='' />
//             <div className='flex'>
//                 <div className='px-5'>
//                     <h1 className='lg:text-6xl text-xs num-stroke text-white'>25</h1>
//                     <h6 className='text-sm text-center'>GB Data      </h6>
//                 </div>
//                 <div className='w-[1px] h-12 py-4 my-1 bg-white'/>
//                 <div  className='px-5'>
//                     <h1 className='text-6xl num-stroke text-white'>2500     </h1>
//                     <h6 className='text-sm text-center' >All Ntwork Mins      </h6>
//                 </div>
//                 <div className='w-[1px] h-12 py-4 my-1 bg-white'/>
//                 <div  className='px-5'>
//                     <h1 className='text-6xl num-stroke text-white'>2500      </h1>
//                     <h6 className='text-sm text-center'>SMS </h6>
//                 </div>
//             </div>
//             <div>
//                 <div className="reveal-now bg-[#2b2c3e] flex items-center ">
//                     <h6 className="uppercase text-white text-2xl get-now">Get Now</h6>
//                     <img src={GetNow} alt="" />
//                 </div>
//                 <button className='border font-bold border-white p-3 rounded-lg mt-5  items-center flex justify-center mx-auto'> Terms & Conditions
//                 </button>
//             </div>
//         </div>

//         </div>
//         <div className='lg:hidden  flex justify-start items-start relative z-30 h-screen'>
//         <PlansCard className= "bg-[#eae282] rounded-md px-4 py-4 z-30 absolute top-0 w-[80%]" />
//         <PlansCard className= " bg-[#56ad8b] rounded-md px-4 py-4 z-30 absolute top-10 left-3 w-[80%]" />
//         <PlansCard className= "bg-[#86358a] rounded-md px-4 py-4 z-30 absolute top-20 left-6 w-[80%]" />
//         <PlansCard className= "bg-[#67519d] rounded-md px-4 py-4 z-30 absolute top-32 left-10 w-[80%]" />
//         </div>
//         </div>
//     )
// }

// export default Plans





import React, { useRef, useState } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { projects } from '../../data';
import Turbo1 from '../../assets/turbo1-title.png'
import GetNow from '../../assets/get-now-yellow-icon.png'
import PlansCard from '../../components/Cards/PlansCard'
import Wegot from '../../assets/we-got.webp'
import PlansImg from '../../assets/plans.webp'
import TermsAndConditions from '../../components/Modal/TermsAndConditions';
import Modal from '../../components/Modal';
// import { projects } from '../../data.js'

const Plans = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleModalOpen = (contentComponent) => {
    setModalContent(contentComponent);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalContent(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className='main'>
    <div className='lg:w-full cardContainer  lg:hidden w-full z-20  flex flex-col  gap-1 h-[100vh] py-5 lg:h-full'>
      <h1 className='lg:text-2xl 2xl:text-3xl text-lg uppercase text-white text-center mb-2 lg:mb-0'>  Our Data Plans</h1>
      <img className=' h-8 lg:h-[15vh]' src={Wegot} alt='' />
      <img className=" h-8 lg:h-[15vh]" src={PlansImg}  alt='' />
      <div className='text-black text-xs lg:text-base 2xl:text-xl text-center '>
      <p>No more buffering, lagging or <br className='block lg:hidden'/> ‘oye awaaz aa rahi hai?’      </p>
      <p>Our plans will keep you vibing <br className='block lg:hidden'/> all day, every day.      </p>
      </div>
     
      </div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.01;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            onModalOpen={handleModalOpen}
          />
        );
      })}
      
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        content={modalContent}
      />
    </main>
  );
};
export default Plans;


const Card = ({ i, GBData, src,allnetworksmins,sms ,price, color, progress, range, targetScale , onModalOpen}) => {
  const containerss = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerss,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={containerss} className="cardContainer">
      <motion.div
        style={{
          backgroundColor: color, scale,
          top: `calc(${i * 35}px)`,
          left: `calc( 5vh + ${i * 20}px)`
        }
        }
        className="card box-shadow-green ml-0 2xl:w-fit w-2/3 border border border-white py-10 px-20 rounded-md flex-col gap-4 items-center"
      >
      <div className='hidden md:flex items-center flex-col gap-4 justify-center'>
        <h1 className='bg-[#2b2c3e] rounded-lg text-white w-fit px-4 py-2 justify-center num-stroke text-lg'>Rs: {price}</h1>
        <img className=' h-[12vh]' src={src} alt='' />
        <div className='flex'>
          <div className='px-5'>
            <h1 className='text-6xl num-stroke text-white'>{GBData}</h1>
            <h6 className='text-sm text-center'>GB Data      </h6>
          </div>
          <div className='w-[1px] h-12 py-4 my-1 bg-white' />
          <div className='px-5'>
            <h1 className='text-6xl num-stroke text-white'>{allnetworksmins}  </h1>
            <h6 className='text-sm text-center' >All Ntwork Mins      </h6>
          </div>
          <div className='w-[1px] h-12 py-4 my-1 bg-white' />
          <div className='px-5'>
            <h1 className='text-6xl num-stroke text-white'>{sms} </h1>
            <h6 className='text-sm text-center'>SMS </h6>
          </div>
        </div>
        <div>
          <div className="reveal-now bg-[#2b2c3e] flex items-center ">
            <h6 className="uppercase text-white text-2xl get-now">Get Now</h6>
            <img src={GetNow} alt="" />
          </div>
          <button onClick={()=> onModalOpen(<TermsAndConditions/>)} className='border font-bold border-white p-3 rounded-lg mt-5  items-center flex justify-center mx-auto'> Terms & Conditions
          </button>
        </div>
        </div>
        <div className='block md:hidden'>
        <PlansCard onModalOpen={onModalOpen}/>
        </div>
      </motion.div>

    </div>
  );
};