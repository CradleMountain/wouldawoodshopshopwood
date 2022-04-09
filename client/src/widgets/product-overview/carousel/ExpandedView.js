import React, { Fragment, useContext, useState } from "react";

import ProdContext from "../context/productOverview-context";
import VerticalCarousel from "./VerticalCarousel.js";
import EnlargedCarouselItem from "./EnlargedCarouselItem.js";
import ArrowIcon from "./ArrowIcon.js";
import CollapseButton from "./collapseButton.js";


const ExpandedView = (props) => {
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

  const expandHandler = () => {
    setShowExpanded(true);
  };

  const collapseHandler = () => {
    setShowExpanded(false);
  };

  return (
    <Fragment>
      <div className="po-expanded-view-backdrop" onClick={collapseHandler} />
      <div className="po-expanded-view-container">
        {ctx.carouselIndex > 0 && (
          <ArrowIcon
            icon={"arrow"}
            direction={"left"}
            alt={"alt-left"}
            clickHandler={leftArrowClick}
          />
        )}
        <div className="horizontalCarousel">
          <div
            className="horizontalInner"
            style={{ transform: `translateX(-${ctx.carouselIndex * 100}%)` }}
          >
            {ctx.currentStyle.style_id &&
              ctx.currentStyle.photos.map((photoObj, index) => {
                return (
                  <EnlargedCarouselItem photoObj={photoObj} key={index} index={index} />
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
        <CollapseButton collapseHandler={props.collapseHandler} />
      </div>
    </Fragment>
  );
};

export default ExpandedView;
