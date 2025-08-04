import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const FadeComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className='flex flex-col items-center'>
      <button
        className='mb-4 p-2 bg-blue-500 text-white rounded'
        onClick={() => setVisible(!visible)}
      >
        Toggle Fade
      </button>

      <AnimatePresence>
        {visible && (
          <motion.div
            className='p-4 bg-gray-200 text-black rounded'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            Hello World, I'm JayT
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FadeComponent;
