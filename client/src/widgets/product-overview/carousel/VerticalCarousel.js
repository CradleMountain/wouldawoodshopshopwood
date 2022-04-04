import React, { useContext } from "react";

import ProdContext from "../productOverview-context.js";
import CarouselThumbnail from './CarouselThumbnail.js';

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

  const selectedStyle = props.productStyles.filter((product) => {
    return product.style_id === props.currentStyle;
  });

  return (
    <div className="verticalCarousel">
      <div
        className="verticalInner"
        style={{ transform: `translateY(-${ctx.carouselIndex * 20}%)` }}
      >
        {selectedStyle.length > 0 &&
          selectedStyle[0].photos.map((photoObj, index) => {
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
  );
};

export default VerticalCarousel;
