import React from 'react';
import CrossBtn from '../../assets/cross-btn.png'
import { motion } from 'framer-motion';

function Modal({ isOpen, onClose, content }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
    { isOpen &&
    <motion.div initial={{
      opacity: 0
    }}
    animate={{
      opacity:1,
      transition:{
        duration: 0.3
      }
    }}
    exit={{
      opacity : 0,
      transition:{
        duration: 0.3
      }
    }}
    className="modal-overlay">
      
      <motion.div 
      initial={{
        scale: 0,
        opacity: 0
        
      }}
      animate={{
        scale: 1,
        opacity: 1,
        transition:{
          delay: 0.3,
          duration: 0.3
        }
      }}
      exit={{
        scale:0,
        transition:{
          duration: 0.3
        }
      }}
      className="modal-content px-5">
        <span className="close-button " onClick={onClose}>
          <img src={CrossBtn} alt='' />
        </span>
        <motion.div initial={{
          opacity:0,
          x: 100
        }}
        animate={{
          x:0,
          opacity: 1,
          transition:{
            duration: 0.3,
            delay:0.3
          }
        }}
        >
        {content}
        </motion.div>
      </motion.div>
    </motion.div>
}
    </>
  );
}

export default Modal;