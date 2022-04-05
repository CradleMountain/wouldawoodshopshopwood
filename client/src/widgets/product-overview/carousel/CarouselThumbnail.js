import React, { useContext } from "react";

import ProdContext from "../context/productOverview-context.js";

const CarouselThumbnail = (props) => {
  const ctx = useContext(ProdContext);

  const thumbnailClickHandler = () => {
    ctx.carouselIndexChangeHandler(props.index);
  };

  return (
    <div className="carouselThumbnail"
      onClick={thumbnailClickHandler}>
      <img
        className="carouselThumbnailImage"
        src={props.photoObj.thumbnail_url}
      />
    </div>
  );
};

export default CarouselThumbnail;
