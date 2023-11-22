import React from 'react'

function ImageAnimation({children, className}) {
  return (
    <motion.div
          className={className}
          initial='hidden'
          animate='visible'
          variants={slideVariants}
          whileHover={{ scale: 1.1, cursor: "pointer", transition: { delay: 0.2, ease: easeIn } }}
        >
        {children}
        </motion.div>
  )
}

export default ImageAnimation
