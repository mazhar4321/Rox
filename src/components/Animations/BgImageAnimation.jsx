import { motion } from 'framer-motion';
import RRR from '../../assets/rrr.png'
import OOO from '../../assets/ooo.png'
import XXX from '../../assets/xxx.png'

const BgImageAnimation = () => {
    const imageVariants = {
      initial: { x: 0 },
    //   animateRRR: { x: '1000%', transition: { duration: 30, repeat: Infinity } },
    //   animateOOO: { x: '-1000%', transition: { duration: 30, repeat: Infinity } },
    };
  
    return (
      <div className='flex flex-col gap-1 justify-center absolute left-0 top-36 z-10'>
        <div className='flex space-x-1 whitespace-nowrap'>
          {[...Array(10)].map((_, index) => (
            <motion.img
              key={index}
              className='h-[18vh] '
              src={RRR}
              alt=''
              variants={imageVariants}
              initial='initial'
              animate='animateRRR'
            />
          ))}
        </div>
        <div className='flex space-x-1 whitespace-nowrap	'>
          {[...Array(10)].map((_, index) => (
            <motion.img
              key={index}
              className='h-[18vh]	'
              src={OOO}
              alt=''
              variants={imageVariants}
              initial='initial'
              animate='animateOOO'
            />
          ))}
        </div>
        <div className='flex space-x-1 '>
          {[...Array(10)].map((_, index) => (
            <motion.img
              key={index}
              className='h-[18vh] whitespace-nowrap	'
              src={XXX}
              alt=''
              variants={imageVariants}
              initial='initial'
              animate='animateRRR'
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default BgImageAnimation;