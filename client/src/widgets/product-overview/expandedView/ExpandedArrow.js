import React from "react";

const ExpandedArrow = (props) => {
  return (
    <div className="po-icon-item" onClick={props.clickHandler}>
      <i
        className={`fa-solid fa-${props.icon}-${props.direction} fa-xl`}
        onClick={props.clickHandler}
      ></i>
    </div>
  );
};

export default ExpandedArrow;
