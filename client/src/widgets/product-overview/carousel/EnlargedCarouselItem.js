import React from "react";

const EnlargedCarouselItem = (props) => {
  return (
    <div className="po-enlarged-carousel-item">
      <img className="carouselImage" src={props.photoObj.url} />
    </div>
  );
};

export default EnlargedCarouselItem;