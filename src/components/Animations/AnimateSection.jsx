import React, { useEffect, useRef } from 'react';
import { motion, spring, useAnimation, useInView } from 'framer-motion';

const AnimatedSection = ({ children, className }) => {

  const mainControl = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
//   useEffect(()=>{
//    if(isInView){
//     mainControl.start("visible")
//    }
//    else{
//     mainControl.mount("visible")
//    }
//   },[isInView])
  return (
    <motion.div ref={ref} className={className}
    variants={{
        hidden: { opacity:0 , y: 75},
        visible: {opacity:1, y:0}
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    //   whileInView="visible"
       transition={{
        duration: 0.5,
        delay: 0.25,
      }} 
      >
      {children}
    </motion.div>
  );
};

export default AnimatedSection