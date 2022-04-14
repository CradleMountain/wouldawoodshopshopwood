import React from "react";

import InnerImageZoom from "react-inner-image-zoom";
// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

const EnlargedCarouselItem = (props) => {
  return (
    <div className="po-expanded-carousel-item">
      <InnerImageZoom
        width={1000}
        height={1000}
        zoomScale={2.0}
        hideCloseButton={true}
        className="po-carousel-image"
        src={props.photoObj.url}
      />
    </div>
  );
};

export default EnlargedCarouselItem;
