import React, { useContext } from "react";

import ProdContext from "../context/productOverview-context";
import IconItem from "./IconItem.js";

const IconCarousel = (props) => {
  const ctx = useContext(ProdContext);

  return (
    <div className="po-icon-carousel">
      {ctx.currentStyle.photos.map((photoObj, index) => {
        return (
          <IconItem
            index={index}
            key={index}
            iconClickHandler={props.iconClickHandler}
          />
        );
      })}
    </div>
  );
};

export default IconCarousel;
