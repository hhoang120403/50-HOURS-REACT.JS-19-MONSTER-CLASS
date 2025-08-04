import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { ChangeEvent } from 'react';

const RangeSlider = () => {
  // const scale = useMotionValue(1);
  const scale = useSpring(1);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(event.target.value));
  };

  return (
    <div>
      <motion.button className='box' style={{ scale }} />

      <div className='mt-[6rem]'>
        <input
          type='range'
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};
export default RangeSlider;
