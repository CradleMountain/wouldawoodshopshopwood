import React from "react";

const ArrowIcon = (props) => {

  return (
    <div className="po-arrow-container">
      <div
        className={`po-${props.direction} ${props.alt}`}
        onClick={props.clickHandler}
      >
        <i
          className={`fa-solid fa-${props.icon}-${props.direction} fa-xl`}
          onClick={props.clickHandler}
        ></i>
      </div>
    </div>
  );
};

export default ArrowIcon;
