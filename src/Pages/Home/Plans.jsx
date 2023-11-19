// import React, { useEffect, useRef, useState } from 'react'
// import Turbo1 from '../../assets/turbo1-title.png'
// import GetNow from '../../assets/get-now-yellow-icon.png'
// import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

// function Plans() {
//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({
//       target: ref,
//       offset: [0.1, 0.9], // Adjusted offset values
//     });
  
//     const backgroundY1 = useTransform(scrollYProgress, [0, 0.2], ['100%', '0%']);
//     const backgroundY2 = useTransform(scrollYProgress, [0.2, 0.4], ['100%', '0%']);
//     const backgroundY3 = useTransform(scrollYProgress, [0.4, 0.6], ['100%', '0%']);
//     const backgroundY4 = useTransform(scrollYProgress, [0.6, 0.8], ['100%', '0%']);
  
//     return (
//       <div ref={ref} className='flex w-full mx-auto my-auto z-20 relative h-screen'>
//         <Cards
//           backgroundY={backgroundY1}
//           className="absolute top-10 mx-auto my-auto flex justify-center bg-green-500 2xl:w-fit w-2/3 border border border-white py-10 px-20 rounded-md flex-col gap-4 items-center"
//         />
//         <Cards
//           backgroundY={backgroundY2}
//           className="absolute top-20 left-10 mx-auto my-auto flex justify-center bg-[#eae282] 2xl:w-fit w-2/3 border border border-white py-10 px-20 rounded-md flex-col gap-4 items-center"
//         />
//         <Cards
//           backgroundY={backgroundY3}
//           className="absolute top-32 left-20 box-shadow-green mx-auto my-auto flex justify-center bg-[#86358a]  2xl:w-fit w-2/3  border border-white py-10 px-20 rounded-md flex-col gap-4 items-center"
//         />
//         <Cards
//           backgroundY={backgroundY4}
//           className="absolute top-48 left-32 box-shadow-green mx-auto my-auto flex justify-center bg-[#67519d]  2xl:w-fit w-2/3  border border-white py-10 px-20 rounded-md flex-col gap-4 items-center"
//         />
//       </div>
//     );
//   }
  
  
  
// export default Plans;


// function NextSection() {
//     return (
//       <div className="absolute bottom-0 left-0 right-0 text-center bg-gray-500 py-10">
//         {/* Content of the next section */}
//         <h2 className="text-white text-4xl">Next Section</h2>
//         <p className="text-white">Scroll down to proceed...</p>
//       </div>
//     );
//   }
  

// function Cards({className, backgroundY}){
    
//     return(
//         <div  >
//         <motion.div    className={className} style={{ y: backgroundY}} >

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
//         </motion.div>
//         </div>
//     )
// }








import React, { useRef } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { projects } from '../../data';
import Turbo1 from '../../assets/turbo1-title.png'
import GetNow from '../../assets/get-now-yellow-icon.png'
// import { projects } from '../../data.js'

const Plans = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <main ref={container} className='main'>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default Plans;


const Card = ({ i, title, description, src, url, color, progress, range, targetScale }) => {
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
        style={{backgroundColor: color, scale, 
          top:`calc(-5vh + ${i * 25}px)`
        }
        } 
        className="card box-shadow-green absolute top-10 mx-auto my-auto flex justify-center 2xl:w-fit w-2/3 border border border-white py-10 px-20 rounded-md flex-col gap-4 items-center"
      >
       <h1 className='bg-[#2b2c3e] rounded-lg text-white w-fit px-4 py-2 justify-center num-stroke text-lg'>Rs: 1300</h1>
            <img className='w-fit h-[12vh]' src={Turbo1} alt='' />
            <div className='flex'>
                <div className='px-5'>
                    <h1 className='text-6xl num-stroke text-white'>25</h1>
                    <h6 className='text-sm text-center'>GB Data      </h6>
                </div>
                <div className='w-[1px] h-12 py-4 my-1 bg-white'/>
                <div  className='px-5'>
                    <h1 className='text-6xl num-stroke text-white'>2500     </h1>
                    <h6 className='text-sm text-center' >All Ntwork Mins      </h6>
                </div>
                <div className='w-[1px] h-12 py-4 my-1 bg-white'/>
                <div  className='px-5'>
                    <h1 className='text-6xl num-stroke text-white'>2500      </h1>
                    <h6 className='text-sm text-center'>SMS </h6>
                </div>
            </div>
            <div>
                <div className="reveal-now bg-[#2b2c3e] flex items-center ">
                    <h6 className="uppercase text-white text-2xl get-now">Get Now</h6>
                    <img src={GetNow} alt="" />
                </div>
                <button className='border font-bold border-white p-3 rounded-lg mt-5  items-center flex justify-center mx-auto'> Terms & Conditions
                </button>
            </div>
        </motion.div>
        </div>
    );
  };