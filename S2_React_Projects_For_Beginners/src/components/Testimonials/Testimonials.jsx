import { useState } from 'react';
import './index.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: 'Jane Doe',
    },
    {
      quote: 'I highly recommend this product to everyone!',
      author: 'John Smith',
    },
    {
      quote: 'This product has completely changed my life!',
      author: 'Bob Johnson',
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (curIndex) => (curIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(
      (curIndex) => (curIndex + testimonials.length + 1) % testimonials.length
    );
  };

  return (
    <div className='testimonials'>
      <div className='testimonials-quote'>
        {testimonials[currentIndex].quote}
      </div>
      <div className='testimonials-author'>
        {testimonials[currentIndex].author}
      </div>

      <div className='testimonials-nav'>
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};
export default Testimonials;
