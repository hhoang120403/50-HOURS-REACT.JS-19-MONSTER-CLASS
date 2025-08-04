import { motion } from 'framer-motion';

const SpinningIcon = () => {
  return (
    <motion.img
      src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQPoUHeRkDe7ln8xsvOX8YFTIIOiEBjOvU4WgJXG_vkzSWuaaeI'
      className='w-20 h-20 object-cover rounded-full'
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
    />
  );
};

export default SpinningIcon;
