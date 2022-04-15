import React, { useContext, useEffect } from "react";

import ProdContext from "../context/productOverview-context";
import StarRating from "../../../components/starRating.js";

const StyleDescription = (props) => {
  const ctx = useContext(ProdContext);

  const goToReviewsHandler = () => {
    document.getElementById('ratings-reviews').scrollIntoView();
  };

  return (
    <div>
      {props.numReviews > 0 && (
        <div className="po-stars-container" onClick={goToReviewsHandler}>
          <StarRating rating={props.rating} />
          <p className="po-stars-text" >{`Read all ${props.numReviews} reviews`}</p>
        </div>
      )}
      <p className="po-category">
        {props.currentProduct.category.toUpperCase()}
      </p>
      <p className="po-name">{props.currentProduct.name}</p>
      <span className="po-span">
        {ctx.currentStyle.style_id && (
          <p
            className={
              ctx.currentStyle.sale_price ? "po-original-price po-price" : "po-price"
            }
          >{`$${ctx.currentStyle.original_price}`}</p>
        )}
        {ctx.currentStyle.style_id && ctx.currentStyle.sale_price && (
          <p className="po-price po-sale-price">{`$${ctx.currentStyle.sale_price}`}</p>
        )}
      </span>
      <span className="po-span">
        <p className="po-style">STYLE ></p>
        <p>{ctx.currentStyle.name}</p>
      </span>
    </div>
  );
};

export default StyleDescription;
