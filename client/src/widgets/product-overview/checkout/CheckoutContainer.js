import React, { useState, useEffect, useContext }  from "react";

import SelectSize from "./SelectSize.js";
import ProdContext from "../context/productOverview-context";

const CheckoutContainer = () => {
  const ctx = useContext(ProdContext);
  const [skus, setSkus] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    if (ctx.currentStyle.skus) {
      setSkus(formatSkus(ctx.currentStyle.skus));
    }
  }, [ctx.currentStyle]);

  const sizeToCartHandler = (skuObj) => {
    setCart(skuObj);
    console.log("ssH: ", skuObj);
  };

  const formatSkus = (skusObj) => {
    const skusArray = [];
    for (let sku in skusObj) {
      const formattedSku = {
        sku_id: sku,
        quantity: ctx.currentStyle.skus[sku].quantity,
        size: ctx.currentStyle.skus[sku].size,
      };
      skusArray.push(formattedSku);
    }
    return skusArray;
  };

  return (
    <div>
      <SelectSize skus={skus} sizeToCartHandler={sizeToCartHandler}/>
    </div>
  );
};

export default CheckoutContainer;
