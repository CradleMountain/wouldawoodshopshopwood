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

  console.log(props.styles)
  return (
    <div>
    <div className="carousel">
      <CarouselArrow leftArrowClick={leftArrowClick} rightArrowClick={rightArrowClick} />
      <div className="inner" style={{ transform: `translateX(-${index * 100}%)` }} >
        {props.styles.photos.map(photoObj => {
          return <CarouselItem imageUrl={photoObj.url} key={Math.random()} />
        })}
      </div>
    </div>
    </div>
  );
};

export default MainCarousel;


