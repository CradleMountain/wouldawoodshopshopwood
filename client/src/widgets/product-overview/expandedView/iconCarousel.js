import React, { useContext } from "react";

import ProdContext from "../context/productOverview-context";
import IconItem from "./IconItem.js";
import ExpandedArrow from "./ExpandedArrow.js";

const IconCarousel = (props) => {
  const ctx = useContext(ProdContext);

  const leftArrowClick = () => {
    if (ctx.carouselIndex > 0) {
      ctx.carouselIndexChangeHandler(ctx.carouselIndex - 1);
    }
  };
  const rightArrowClick = () => {
    if (ctx.carouselIndex < ctx.currentStyle.photos.length - 1) {
      ctx.carouselIndexChangeHandler(ctx.carouselIndex + 1);
    }
  };
  const iconClickHandler = (index) => {
    ctx.carouselIndexChangeHandler(index);
  };

  return (
    <div className="po-icon-carousel">
      {ctx.carouselIndex > 0 ? (
        <ExpandedArrow
          icon={"arrow"}
          direction={"left"}
          clickHandler={leftArrowClick}
        />
      ) : (
        <div className="po-expanded-arrow-container" />
      )}
      {ctx.currentStyle.photos.map((photoObj, index) => {
        return (
          <IconItem
            index={index}
            key={index}
            iconClickHandler={iconClickHandler}
          />
        );
      })}
      {ctx.currentStyle.style_id &&
        ctx.carouselIndex < ctx.currentStyle.photos.length - 1 && (
          <ExpandedArrow
            icon={"arrow"}
            direction={"right"}
            clickHandler={rightArrowClick}
          />
        )}
    </div>
  );
};

export default IconCarousel;
