import React, { useContext } from "react";

import ProdContext from "../context/productOverview-context.js";
import CarouselThumbnail from "./CarouselThumbnail.js";
import ArrowIcon from "./ArrowIcon.js";

const VerticalCarousel = (props) => {
  const ctx = useContext(ProdContext);

  const upArrowClick = () => {
    if (ctx.carouselIndex > 0) {
      ctx.carouselIndexChangeHandler(ctx.carouselIndex - 1);
    }
  };

  const downArrowClick = () => {
    if (ctx.carouselIndex < ctx.currentStyle.photos.length - 1) {
      ctx.carouselIndexChangeHandler(ctx.carouselIndex + 1);
    }
  };

  return (
    <div className="po-outer-vertical-container">
      {ctx.carouselIndex > 0 ? (
        <ArrowIcon
          icon={"chevron"}
          direction={"up"}
          clickHandler={upArrowClick}
        />
      ) : (
        <div className="po-expanded-arrow-container" />
      )}
      <div className="po-vertical-carousel">
        <div
          className="po-vertical-inner"
          style={{

            transform: `translateY(-${75 * (ctx.carouselIndex - 6)}px)`,
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
        </div>
      </div>
      {ctx.currentStyle.photos &&
        ctx.carouselIndex < ctx.currentStyle.photos.length - 1 && (
          <ArrowIcon
            icon={"chevron"}
            direction={"down"}
            clickHandler={downArrowClick}
          />
        )}
    </div>
  );
};

export default VerticalCarousel;
