import React, { Fragment, useContext, useState } from "react";

import ProdContext from "../context/productOverview-context";
import VerticalCarousel from "./VerticalCarousel.js";
import CarouselItem from "./CarouselItem.js";
import ArrowIcon from "./ArrowIcon.js";
import ExpandButton from "../expandedView/ExpandButton.js";

const MainCarousel = (props) => {
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

  return (
    <Fragment>
      <div className="po-carousel-container">
        <VerticalCarousel
          productStyles={props.productStyles}
          currentProduct={props.currentProduct}
        />
        {ctx.carouselIndex > 0 && (
          <ArrowIcon
            icon={"arrow"}
            direction={"left"}
            alt={""}
            clickHandler={leftArrowClick}
          />
        )}
        <div className="po-horizontal-carousel">
          <div
            className="po-horizontal-inner"
            style={{ transform: `translateX(-${ctx.carouselIndex * 100}%)` }}
          >
            {ctx.currentStyle.style_id &&
              ctx.currentStyle.photos.map((photoObj, index) => {
                return (
                  <CarouselItem
                    photoObj={photoObj}
                    key={index}
                    index={index}
                    expandHandler={props.expandHandler}
                  />
                );
              })}
          </div>
        </div>
        {ctx.currentStyle.style_id &&
          ctx.carouselIndex < ctx.currentStyle.photos.length - 1 && (
            <ArrowIcon
              icon={"arrow"}
              direction={"right"}
              clickHandler={rightArrowClick}
            />
          )}
        <ExpandButton expandHandler={props.expandHandler} />
      </div>
    </Fragment>
  );
};

export default MainCarousel;
