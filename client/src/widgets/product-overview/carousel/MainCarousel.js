import React, {useState, useEffect} from 'react';

import CarouselItem from './CarouselItem.js';
import CarouselArrow from './CarouselArrow'

const MainCarousel = (props) => {

  const [index, setIndex] = useState(0);

  const leftArrowClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const rightArrowClick = () => {
    if (index < props.products.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div>
    <div className="carousel">
      <CarouselArrow leftArrowClick={leftArrowClick} rightArrowClick={rightArrowClick} />
      <div className="inner" style={{ transform: `translateX(-${index * 100}%)` }} >
        {props.products.map(product => {
          return <CarouselItem imageUrl={product} key={Math.random()} />
        })}
      </div>
    </div>
    </div>
  );
};

export default MainCarousel;


