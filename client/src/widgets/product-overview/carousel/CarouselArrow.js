import React from "react";

const CarouselArrow = (props) => {
  return (
    <div className="arrow">
      <div className="left" onClick={props.leftArrowClick}>
        <i
          className="fa-solid fa-arrow-left fa-xl"
          onClick={props.leftArrowClick}
        ></i>
      </div>
      <div onClick={props.rightArrowClick}>
        <i
          className="fa-solid fa-arrow-right fa-xl"
          onClick={props.rightArrowClick}
        ></i>
      </div>
    </div>
  );
};

export default CarouselArrow;
