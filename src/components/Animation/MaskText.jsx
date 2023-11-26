import { motion } from "framer-motion"

export function MaskText({phrases, className}) {

    const animation = {
      initial: {y: "100%"},
      enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
    }
  
  
    return(
      <div  className="">
        {
          phrases.map( (phrase, index) => {
            return <div key={index} className="overflow-hidden font-[TacticSans-bold]  text-xs text-end z-10 flex items-end justify-end">
              <motion.p className={className} custom={index} variants={animation} initial="initial" whileInView="enter" >{phrase}</motion.p>
            </div>
          })
        }
      </div>
    )
  }