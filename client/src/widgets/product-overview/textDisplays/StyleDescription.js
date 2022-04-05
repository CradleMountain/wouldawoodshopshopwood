import React, { useContext, useEffect } from "react";

import ProdContext from "../productOverview-context";

const StyleDescription = (props) => {
  const ctx = useContext(ProdContext);

  return (
    <div>
      <p>{props.currentProduct.category}</p>
      <p>{props.currentProduct.name}</p>
      <span>
        {ctx.currentStyle.style_id && (
          <p
            className={ctx.currentStyle.sale_price ? "sale" : ""}
          >{`$${ctx.currentStyle.original_price}`}</p>
        )}
        {ctx.currentStyle.style_id && ctx.currentStyle.sale_price && (
          <p>{`$${ctx.currentStyle.sale_price}`}</p>
        )}
      </span>
    </div>
  );
};

export default StyleDescription;
