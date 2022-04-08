import React from 'react';

const CarouselItem = (props) => {

  return (
    <div className="carouselItem" >
      <img className='carouselImage' src={props.imageUrl} />
    </div>
  );
};

export default CarouselItem;