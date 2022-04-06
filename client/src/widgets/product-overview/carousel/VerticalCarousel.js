import React, { useContext, useState, useEffect } from "react";

import ProdContext from "../context/productOverview-context.js";
import CarouselThumbnail from "./CarouselThumbnail.js";
import ArrowIcon from "./ArrowIcon.js";

const VerticalCarousel = (props) => {
  const ctx = useContext(ProdContext);

  const [shiftCarousel, setShiftCarousel] = useState(0);

  useEffect(() => {
    if (ctx.currentStyle.photos) {
      ctx.currentStyle.photos.length - ctx.carouselIndex > 7
        ? setShiftCarousel(1)
        : setShiftCarousel(0);

    }
  }, [ctx.carouselIndex]);

  const upArrowClick = () => {
    if (ctx.carouselIndex > 0) {
      ctx.carouselIndexChangeHandler(ctx.carouselIndex - 1);
    }
  };

  const downArrowClick = () => {
    if (ctx.currentStyle.photos.length - ctx.carouselIndex > 7) {
      ctx.carouselIndexChangeHandler(ctx.carouselIndex + 1);
    }
  };

  return (
    <div className="verticalCarousel">
      {ctx.carouselIndex > 0 && (
        <ArrowIcon
          icon={"chevron"}
          direction={"up"}
          clickHandler={upArrowClick}
        />
      )}
      <div
        className="verticalInner"
        style={{
          transform: `translateY(-${
            ctx.carouselIndex * 14.28 * shiftCarousel
          }%)`,
        }}
      >
        {ctx.currentStyle.style_id &&
          ctx.currentStyle.photos.map((photoObj, index) => {
            return (
              <CarouselThumbnail
                photoObj={photoObj}
                key={index}
                index={index}
              />
            );
          })}
        {ctx.currentStyle.photos &&
          ctx.carouselIndex < ctx.currentStyle.photos.length - 1 && (
            <ArrowIcon
              icon={"chevron"}
              direction={"down"}
              clickHandler={downArrowClick}
            />
          )}
      </div>
    </div>
  );
};

export default VerticalCarousel;
