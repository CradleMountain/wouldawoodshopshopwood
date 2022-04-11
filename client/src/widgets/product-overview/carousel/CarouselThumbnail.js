import React, { useContext } from "react";

import ProdContext from "../context/productOverview-context.js";

const CarouselThumbnail = (props) => {
  const ctx = useContext(ProdContext);

  const thumbnailClickHandler = () => {
    ctx.carouselIndexChangeHandler(props.index);
  };

  return (
    <div
      className={
        props.index === ctx.carouselIndex
          ? "po-carousel-thumbnail po-highlight"
          : "po-carousel-thumbnail"
      }
      onClick={thumbnailClickHandler}
    >
      <img
        className="po-carousel-thumbnail-image"
        src={props.photoObj.thumbnail_url}
      />
    </div>
  );
};

export default CarouselThumbnail;
