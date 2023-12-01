import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import "./style.css";
import ToggleButton from "./ToogleButton";
import Links from "./Links";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(0px at 20px 20px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const scrollToId = (content) => {
    const modifiedId = `${content.replace(/\s/g, '').trim()}`;
    // Add your scrollIntoView logic here
    document.getElementById(modifiedId).scrollIntoView({ behavior: "smooth" });
    setOpen(false)
  };
 

  return (
    <motion.div className="sidebar flex justify-center bg-white items-center lg:hidden" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links scrollToId={scrollToId} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;