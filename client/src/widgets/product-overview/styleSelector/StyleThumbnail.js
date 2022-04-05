import React, { useContext } from "react";

import ProdContext from "../productOverview-context.js";

const StyleThumbnail = (props) => {
  const ctx = useContext(ProdContext);

  const thumbnailClickHandler = () => {
    ctx.styleChangeHandler(props.styleObj.style_id);
  };
  let renderCheck = ctx.currentStyle === props.styleObj.style_id;

  return (
    <div className="stylesThumbnail" onClick={thumbnailClickHandler}>
      {renderCheck && <div><i class="fa-regular fa-circle-check fa-lg"></i></div>}
      <img
        className="stylesThumbnailImage"
        src={props.styleObj.photos[0].thumbnail_url}
      />
    </div>
  );
};

export default StyleThumbnail;

{/* <div className="stylesThumbnail" onClick={thumbnailClickHandler}>
{ctx.currentStyle === props.styleObj.style_id && (
  <i class="fa-regular fa-circle-check fa-lg"></i>
)} */}
