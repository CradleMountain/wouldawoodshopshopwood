import React, { useState, useEffect, useContext } from "react";

import { some } from 'underscore';

import SelectSize from "./SelectSize.js";
import SelectQuantity from "./SelectQuantity.js";
import AddToCartButton from "./AddToCartButton.js";
import ProdContext from "../context/productOverview-context";

const CheckoutContainer = () => {
  const ctx = useContext(ProdContext);
  const [skus, setSkus] = useState([]);
  const [cart, setCart] = useState(null);
  const [quantityNums, setQuantityNums] = useState(null);
  const [inStock, setInStock] = useState(true);

  useEffect(() => {
    // if (ctx.currentStyle.skus) {
    //   setSkus(formatSkus(ctx.currentStyle.skus));
    // }
    ctx.currentStyle.skus && setSkus(formatSkus(ctx.currentStyle.skus));
    ;
    setCart(null);
    setQuantityNums(null);
  }, [ctx.currentStyle]);

  const sizeToCartHandler = (skuObj) => {
    setCart(skuObj);
    createNumsArray(skuObj)
  };

  const quantityToCartHandler = (num) => {
    setCart({
      ...cart,
      purchaseQuantity: num,
    });
  };

  const addToCartHandler = () => {
    console.log(cart)
  };

  const createNumsArray = (skuObj) => {
    const numsArray = [];
    const maxNum = skuObj.quantity < 15 ? skuObj.quantity : 15;
    for (let i = 1; i <= maxNum; i++) {
      numsArray.push(i);
    }
    setQuantityNums(numsArray);
  };

  const validateInStock = (skusArray) => {
    return some(skusArray, sku => sku.quantity > 0)
  };

  const formatSkus = (skusObj) => {
    const skusArray = [];
    for (let sku in skusObj) {
      const formattedSku = {
        sku_id: sku,
        quantity: ctx.currentStyle.skus[sku].quantity,
        size: ctx.currentStyle.skus[sku].size,
        purchaseQuantity: 1,
      };
      skusArray.push(formattedSku);
    }
    setInStock(validateInStock(skusArray));
    return skusArray;
  };

  return (
    <div>
      <SelectSize skus={skus} sizeToCartHandler={sizeToCartHandler} />
      <SelectQuantity
        cart={cart}
        quantityNums={quantityNums}
        quantityToCartHandler={quantityToCartHandler}
      />
      {inStock && <AddToCartButton addToCartHandler={addToCartHandler} />}
    </div>
  );
};

export default CheckoutContainer;
