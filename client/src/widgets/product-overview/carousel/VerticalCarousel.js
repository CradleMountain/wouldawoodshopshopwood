import React, { useContext } from "react";

import ProdContext from "../productOverview-context.js";
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
    if (ctx.carouselIndex < selectedStyle[0].photos.length - 1) {
      ctx.carouselIndexChangeHandler(ctx.carouselIndex + 1);
    }
  };

  // const selectedStyle = props.productStyles.filter((product) => {
  //   return product.style_id === ctx.currentStyle;
  // });

  return (
    <div>
      {ctx.carouselIndex > 0 && (
        <ArrowIcon direction={"up"} clickHandler={upArrowClick} />
      )}
      <div className="verticalCarousel">
        <div
          className="verticalInner"
          style={{ transform: `translateY(-${ctx.carouselIndex * 20}%)` }}
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
      <ArrowIcon direction={"down"} clickHandler={downArrowClick} />
    </div>
  );
};

export default VerticalCarousel;
