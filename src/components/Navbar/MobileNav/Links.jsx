import { motion } from "framer-motion";
import ApplyNowButton from '../../../assets/apply-now.png';
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ scrollToId }) => {
  const items = ["Why Rox", "VOUCHER AND DISCOUNTS", "REFERAL AND ROYALITY", "OUR DATA PLANS", "Faqs", "Apply Now"];

  const handleClickNav = (content) => {
    const modifiedId = `${content.replace(/\s/g, '').trim()}`;
    scrollToId(modifiedId);
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          // href={`#${item.replace(/\s/g, '').trim()}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClickNav(item)}
        >
          {item === "Apply Now" ? <div
          className='cursor-pointer'>
          <img  
           className='w-40'
            src={ApplyNowButton} alt='' />
        </div> : item}
         
        </motion.a>
        
      ))}
      
    </motion.div>
  );
};

export default Links;