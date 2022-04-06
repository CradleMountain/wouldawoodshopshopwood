import React, { Fragment, useContext } from "react";

import ProdContext from "../context/productOverview-context";
import VerticalCarousel from "./VerticalCarousel.js";
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
    if (ctx.carouselIndex < ctx.currentStyle.photos.length - 1) {
      ctx.carouselIndexChangeHandler(ctx.carouselIndex + 1);
    }
  };

  // const selectedStyle = props.productStyles.filter((product) => {
  //   return product.style_id === ctx.currentStyle;
  // });

  return (
    <Fragment>
      {ctx.carouselIndex > 0 && (
        <ArrowIcon
          icon={"arrow"}
          direction={"left"}
          clickHandler={leftArrowClick}
        />
      )}
      <div className="carouselContainer">
        <VerticalCarousel
          productStyles={props.productStyles}
          currentProduct={props.currentProduct}
        />
        <div className="horizontalCarousel">
          <div
            className="horizontalInner"
            style={{ transform: `translateX(-${ctx.carouselIndex * 100}%)` }}
          >
            {ctx.currentStyle.style_id &&
              ctx.currentStyle.photos.map((photoObj, index) => {
                return (
                  <CarouselItem photoObj={photoObj} key={index} index={index} />
                );
              })}
          </div>
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
    </Fragment>
  );
};

export default MainCarousel;
