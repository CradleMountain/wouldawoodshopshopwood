import React, { useContext, useEffect } from "react";

import ProdContext from "../context/productOverview-context";
import StarRating from "../../../components/starRating.js";

const StyleDescription = (props) => {
  const ctx = useContext(ProdContext);

  return (
    <div>
      <div>
        <StarRating rating={props.rating} />
      </div>
      <p className="po-category">
        {props.currentProduct.category.toUpperCase()}
      </p>
      <p className="po-name">{props.currentProduct.name}</p>
      <span className="po-span">
        {ctx.currentStyle.style_id && (
          <p
            className={
              ctx.currentStyle.sale_price ? "po-sale po-price" : "po-price"
            }
          >{`$${ctx.currentStyle.original_price}`}</p>
        )}
        {ctx.currentStyle.style_id && ctx.currentStyle.sale_price && (
          <p className="po-price">{`$${ctx.currentStyle.sale_price}`}</p>
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
