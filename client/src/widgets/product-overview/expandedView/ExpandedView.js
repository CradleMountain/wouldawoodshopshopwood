import React, { Fragment, useContext, useState } from "react";

import ProdContext from "../context/productOverview-context";
import VerticalCarousel from "../carousel/VerticalCarousel.js";
import EnlargedCarouselItem from "./EnlargedCarouselItem.js";
import IconCarousel from "./iconCarousel";
import CollapseButton from "./CollapseButton.js";

const ExpandedView = (props) => {
  const ctx = useContext(ProdContext);

  return (
    <Fragment>
      <div
        className="po-expanded-view-backdrop"
        onClick={props.collapseHandler}
      />
      <div className="po-expanded-view-container">
        <div className="po-horizontal-carousel">
          <div
            className="po-horizontal-inner"
            style={{ transform: `translateX(-${ctx.carouselIndex * 100}%)` }}
          >
            {ctx.currentStyle.style_id &&
              ctx.currentStyle.photos.map((photoObj, index) => {
                return (
                  <EnlargedCarouselItem
                    photoObj={photoObj}
                    key={index}
                    index={index}
                  />
                );
              })}
          </div>
        </div>
        <IconCarousel  />

        <CollapseButton collapseHandler={props.collapseHandler} />
      </div>
    </Fragment>
  );
};

export default ExpandedView;
