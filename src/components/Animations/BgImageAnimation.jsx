import { motion } from 'framer-motion';
import RRR from '../../assets/rrr.png'
import OOO from '../../assets/ooo.png'
import XXX from '../../assets/xxx.png'

const BgImageAnimation = () => {
    // const imageVariants = {
    //   initial: { x: 0 },
    // //   animateRRR: { x: '1000%', transition: { duration: 30, repeat: Infinity } },
    // //   animateOOO: { x: '-1000%', transition: { duration: 30, repeat: Infinity } },
    // };
    const sliderVariants = {
      initial: {
        x: 0,
      },
      animatexxx: {
        x: "-100%",
        transition: {
          repeat: Infinity,
          repeatType:"mirror",
          duration: 16,
        },
      },
      animateooo: {
        x: "100%",
        transition: {
          repeat: Infinity,
          repeatType:"mirror",
          duration: 16,
        },
      },
    };
  
    return (
      <div className='flex flex-col gap-1 justify-center absolute left-0 top-[30vh]  lg:top-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        <div className='flex space-x-1 whitespace-nowrap  w-full'>
          {[...Array(10)].map((_, index) => (
            <motion.img
              key={index}
              className='lg:h-[16vh] h-[12vh]'
              src={RRR}
              alt=''
              variants={sliderVariants}
              initial='initial'
              animate='animatexxx'
            />
          ))}
        </div>
        <div className='flex space-x-1 whitespace-nowrap	'>
          {[...Array(10)].map((_, index) => (
            <motion.img
              key={index}
              className='lg:h-[16vh] h-[12vh]	'
              src={OOO}
              alt=''
              variants={sliderVariants}
              initial='initial'
              animate='animateooo'
            />
          ))}
        </div>
        <div className='flex space-x-1 '>
          {[...Array(10)].map((_, index) => (
            <motion.img
              key={index}
              className='lg:h-[16vh] h-[12vh] whitespace-nowrap	'
              src={XXX}
              alt=''
              variants={sliderVariants}
              initial='initial'
              animate='animatexxx'
            />
          ))}
        </div>
      </div>
      // <motion.div
      //   className="slidingTextContainer"
      //   variants={sliderVariants}
      //   initial="initial"
      //   animate="animate"
      // >
      //   Writer Content Creator Influencer
      // </motion.div>
    );
  };
  
  export default BgImageAnimation;