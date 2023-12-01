import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function TextAnimate({text, className , style}) {
    // const texts = text.split(" ");

    const textAnimation = {
      hidden:{
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y:0,
           transition:{
            duration : 0.5
           }
      }
    }
  const textArray = Array.isArray(text) ? text : [text]
    const ref = useRef(null)
    const isInView = useInView(ref, {amount: 0.5})
  return (
    <motion.div ref={ref} style={style} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{
      staggerChildren: 0.1
    }} aria-hidden className={className}>
    {textArray.map((line) =>(
<span className="block">
      {line.split(" ").map((el, i) => (
        <span className="inline-block overflow-hidden">
        {el.split("").map((char)=>(
          <motion.span className="inline-block overflow-hidden" variants={textAnimation}>
          {char}
          </motion.span>
        ))}
        <span className="inline-block">&nbsp;</span>
        </span>
        ))}
        </span>
        ))}
    </motion.div>
  );
}

export default TextAnimate;