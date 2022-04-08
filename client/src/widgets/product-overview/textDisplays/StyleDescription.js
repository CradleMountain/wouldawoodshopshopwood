import React, { useContext, useEffect } from "react";

import ProdContext from "../context/productOverview-context";

const StyleDescription = (props) => {
  const ctx = useContext(ProdContext);

  return (
    <div>
      <div>
        <p>Stars/Button Placeholder</p>
      </div>
      <p className="text category">
        {props.currentProduct.category.toUpperCase()}
      </p>
      <p className="text name">{props.currentProduct.name}</p>
      <span className="span">
        {ctx.currentStyle.style_id && (
          <p
            className={ctx.currentStyle.sale_price ? "sale price" : "price"}
          >{`$${ctx.currentStyle.original_price}`}</p>
        )}
        {ctx.currentStyle.style_id && ctx.currentStyle.sale_price && (
          <p className="price">{`$${ctx.currentStyle.sale_price}`}</p>
        )}
      </span>
      <span className="span">
        <p className="text style">STYLE ></p>
        <p className="styleName">{ctx.currentStyle.name}</p>
      </span>
    </div>
  );
};

export default StyleDescription;
