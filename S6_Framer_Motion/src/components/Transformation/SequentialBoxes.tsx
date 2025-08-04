import { motion } from 'framer-motion';

const SequentialBoxes = () => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className='bg-teal-500 w-20 h-20 m-2'
          animate={{ x: 100 }}
          transition={{ duration: 0.5, delay: (i + 1) * 0.5 }}
        ></motion.div>
      ))}
    </div>
  );
};
export default SequentialBoxes;
