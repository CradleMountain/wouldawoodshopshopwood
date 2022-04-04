import React from "react";

const CarouselItem = (props) => {
  return (
    <div className="carouselItem">
      <img className="carouselImage" src={props.photoObj.url} />
    </div>
  );
};

export default CarouselItem;
