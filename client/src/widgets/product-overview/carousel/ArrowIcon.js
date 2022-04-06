import React from 'react';

const ArrowIcon = (props) => {
  return (
    <div className="arrow">
      <div className={props.direction} onClick={props.clickHandler}>
      <i
          className={`fa-solid fa-arrow-${props.direction} fa-xl`}
          onClick={props.clickHandler}
        ></i>
      </div>
    </div>
  )
};

export default ArrowIcon;