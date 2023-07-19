import  { useState } from 'react';
import './Slider.css'; 

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesData = [
    { id: 1, content: '' },
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <div className="slider">
      <div className="slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="slide-content">
            {slide.content}
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={prevSlide}>
        Prev
      </button>
      <button className="next-btn" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slider;
