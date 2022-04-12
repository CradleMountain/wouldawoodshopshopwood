import React from "react";

const EnlargedCarouselItem = (props) => {
  return (
    <div className="po-enlarged-carousel-item">
      <img className="po-carousel-image" src={props.photoObj.url} />
    </div>
  );
};

export default EnlargedCarouselItem;