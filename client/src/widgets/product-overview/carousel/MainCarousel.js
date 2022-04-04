import React, { useState, useEffect, useContext } from "react";

import ProdContext from "../productOverview-context";
import CarouselItem from "./CarouselItem.js";
import CarouselArrow from "./CarouselArrow.js";

const MainCarousel = (props) => {
  const ctx = useContext(ProdContext);
  //const [index, setIndex] = useState(0);

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
    return product.style_id === props.currentStyle;
  });

  return (
    <div>
      <div className="carousel">
        <CarouselArrow
          leftArrowClick={leftArrowClick}
          rightArrowClick={rightArrowClick}
        />
        <div
          className="inner"
          style={{ transform: `translateX(-${ctx.carouselIndex * 100}%)` }}
        >
          {selectedStyle.length > 0 &&
            selectedStyle[0].photos.map((photoObj, idx) => {
              return (
                <CarouselItem
                  photoObj={photoObj}
                  key={Math.random()}
                  idx={idx}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
