import React, {useState, useEffect} from 'react';

import CarouselItem from './CarouselItem.js';

const MainCarousel = (props) => {

  const [index, setIndex] = useState(0);


  return (
    <div className="carousel">
      <div className="inner" style={{ transform: `translateX(-${index * 100}%)` }} >
        {props.products.map(product => {
          return <CarouselItem imageUrl={product} key={Math.random()} />
        })}
      </div>
    </div>
  );
};

export default MainCarousel;


