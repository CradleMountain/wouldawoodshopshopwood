import React, { useState, useEffect, useContext } from "react";

import ProdContext from "../context/productOverview-context.js";

const ArrowIcon = (props) => {
  const ctx = useContext(ProdContext);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (props.direction === "down" || props.direction === "right") {
      ctx.carouselIndex > 0 && setIsHidden(false);
    } else {
      ctx.currentStyle.photos.length - ctx.carouselIndex > 7 &&
        setIsHidden(false);
    }
  }, [ctx.carouselIndex]);

  return (
    // <div className={isHidden ? "arrow hidden" : "arrow"}>
    <div className="po-arrow-container">
      <div
        className={
          isHidden
            ? `${props.direction} po-hidden`
            : `po-${props.direction} ${props.alt}`
        }
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
