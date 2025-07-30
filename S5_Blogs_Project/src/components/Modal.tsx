import type { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className='fixed inset-0 bg-black flex opacity-50 items-center justify-center'>
      <div className='bg-white p-4 rounded-lg sha relative'>{children}</div>
      <button
        onClick={onClose}
        className='absolute top-2 right-2 text-gray-500'
      >
        X
      </button>
    </div>
  );
};
export default Modal;
