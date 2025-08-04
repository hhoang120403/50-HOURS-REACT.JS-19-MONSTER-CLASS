import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cards } from '../../utils/data';
import Card from './Card';

const ScrollCarousel = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <div ref={targetRef} className='relative h-[300vh] bg-neutral-900'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <motion.div className='flex gap-4' style={{ x }}>
          {cards.map((card, index) => (
            <Card card={card.url} idx={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollCarousel;
