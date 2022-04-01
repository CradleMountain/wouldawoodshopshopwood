import React from 'react';

const CarouselItem = (props) => {

console.log(props.imageUrl)

  return (
    <div className="carouselItem" >
      <img className='carouselImage' src={props.imageUrl} />
    </div>
  );
};

export default CarouselItem;