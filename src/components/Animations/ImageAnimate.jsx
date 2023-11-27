import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
function ImageAnimate({children}) {

    
  const imgRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: imgRef,
    offset: ["0 1","1 1"]
  })

  const bottom = useTransform(scrollYProgress , [0 , 1] ,[0.5,  1])
  return (
    <motion.div ref={imgRef} style={{ scale: bottom,  }}>
      {children}
    </motion.div>
  )
}

export default ImageAnimate
