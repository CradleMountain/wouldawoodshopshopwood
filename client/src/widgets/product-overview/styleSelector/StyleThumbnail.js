import React, { useContext } from "react";

import ProdContext from "../context/productOverview-context.js";

const StyleThumbnail = (props) => {
  const ctx = useContext(ProdContext);

  const thumbnailClickHandler = () => {
    ctx.styleChangeHandler(props.styleObj);
  };
  let renderCheck = ctx.currentStyle.style_id === props.styleObj.style_id;

  return (
    <div className="po-style-thumbnail" onClick={thumbnailClickHandler}>
      {renderCheck && (
        <div className="po-check">
          <i
            className="fa-regular fa-circle-check fa-lg"
            alt="a clothing product for sale"
          ></i>
        </div>
      )}
      <img
        className="po-style-thumbnail-image"
        src={props.styleObj.photos[0].thumbnail_url}
      />
    </div>
  );
};

export default StyleThumbnail;
