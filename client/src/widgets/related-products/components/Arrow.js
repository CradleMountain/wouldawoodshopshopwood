import React, { useState, useEffect } from "react";

const Arrow = (props) => {
  return (
    <div className="rp-arrow-container">
      <div className={`rp-${props.direction}`} onClick={props.clickHandler}>
        <i
          className={`fa-solid fa-${props.icon}-${props.direction} fa-xl`}
          onClick={props.clickHandler}
        ></i>
      </div>
    </div>
  );
};

export default Arrow;
