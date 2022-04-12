import React from "react";

const CarouselItem = (props) => {
  return (
    <div className="po-carousel-item">
      <img className="po-carousel-image" src={props.photoObj.url} />
    </div>
  );
};

export default CarouselItem;
