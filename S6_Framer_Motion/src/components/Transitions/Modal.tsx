import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-col items-center'>
      <button
        className='mb-4 p-2 bg-teal-500 text-white rounded'
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 bg-black/50 flex justify-center items-center'
            onClick={(e) => e.stopPropagation()}
            initial={{ y: '-100vh' }}
            animate={{ y: '0vh' }}
            exit={{ y: '100vh' }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className='bg-white p-4 rounded'>
              <h2 className='text-lg font-bold text-black'>Modal Title</h2>
              <p className='text-black'>
                This is some random modal content here.
              </p>
              <button
                className='mt-4 p-2 bg-red-500 text-white rounded'
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Modal;
