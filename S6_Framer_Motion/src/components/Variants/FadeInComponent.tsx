import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const FadeInComponent = () => {
  return (
    <motion.div
      className='bg-blue-500 p-4 rounded shadow'
      variants={fadeInVariants}
      initial='hidden'
      animate='visible'
      transition={{ duration: 1 }}
    >
      <h2 className='text-white'>Fade In Component</h2>
    </motion.div>
  );
};

export default FadeInComponent;
