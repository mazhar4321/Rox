import React, { useRef } from 'react'
import DataPlans from './DataPlans'
import Plans from './Plans'
import { useScroll } from 'framer-motion';

const Dataplan = () => {
    const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  });
  return (
    <div className='main'>
    <div ref={container}>
      <DataPlans/>
      <Plans/>
    </div>
    </div>
  )
}

export default Dataplan
