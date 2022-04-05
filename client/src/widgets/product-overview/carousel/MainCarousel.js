import React, { useContext } from "react";

import ProdContext from "../productOverview-context";
import CarouselItem from "./CarouselItem.js";
import ArrowIcon from "./ArrowIcon.js";

const MainCarousel = (props) => {
  const ctx = useContext(ProdContext);

  const leftArrowClick = () => {
    if (ctx.carouselIndex > 0) {
      ctx.carouselIndexChangeHandler(ctx.carouselIndex - 1);
    }
  };
  const rightArrowClick = () => {
    if (ctx.carouselIndex < selectedStyle[0].photos.length - 1) {
      ctx.carouselIndexChangeHandler(ctx.carouselIndex + 1);
    }
  };

  const selectedStyle = props.productStyles.filter((product) => {
    return product.style_id === ctx.currentStyle;
  });

  return (
    <span className="carousel">
      {ctx.carouselIndex > 0 && (
        <ArrowIcon direction={"left"} clickHandler={leftArrowClick} />
      )}
      <div
        className="inner"
        style={{ transform: `translateX(-${ctx.carouselIndex * 100}%)` }}
      >
        {selectedStyle.length > 0 &&
          selectedStyle[0].photos.map((photoObj, index) => {
            return (
              <CarouselItem photoObj={photoObj} key={index} index={index} />
            );
          })}
      </div>
      {(selectedStyle.length > 0 && ctx.carouselIndex < selectedStyle[0].photos.length - 1) && (
        <ArrowIcon direction={"right"} clickHandler={rightArrowClick} />
      )}
    </span>
  );
};

export default MainCarousel;
