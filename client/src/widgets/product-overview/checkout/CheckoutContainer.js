import React, { useState, useEffect, useContext } from "react";

import { some } from "underscore";

import SelectSize from "./SelectSize.js";
import SelectQuantity from "./SelectQuantity.js";
import AddToCartButton from "./AddToCartButton.js";
import StarButton from "./StarButton.js";
import ProdContext from "../context/productOverview-context";
import api from "../apiHelpers.js";

const CheckoutContainer = () => {
  const ctx = useContext(ProdContext);
  const [skus, setSkus] = useState([]);
  const [cart, setCart] = useState(null);
  const [quantityNums, setQuantityNums] = useState(null);
  const [inStock, setInStock] = useState(true);
  const [sizeMessage, setSizeMessage] = useState("SELECT SIZE");
  const [addToCartMessage, setAddToCartMessage] = useState("ADD TO BAG");
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    ctx.currentStyle.skus && setSkus(formatSkus(ctx.currentStyle.skus));
    setCart(null);
    setQuantityNums(null);
    setSizeMessage("SELECT SIZE");
    setAddToCartMessage("ADD TO BAG");
    setSize(null);
    setQuantity(null);
    ctx.sizeDropToggleHandler(false);
  }, [ctx.currentStyle]);


  const sizeSelectHandler = (skuObj) => {
    ctx.sizeDropToggleHandler(!ctx.sizeDropToggle);
    setQuantity(null);
    setSize(skuObj.size);
    setCart(skuObj);
    createNumsArray(skuObj);
  };

  const quantityToCartHandler = (num) => {
    setCart({
      ...cart,
      purchaseQuantity: num,
    });
    setQuantity(num);
  };

  const addToCartHandler = () => {
    if (!cart) {
      ctx.sizeDropToggleHandler(true);
      setSizeMessage("PLEASE SELECT SIZE");
    } else {
      api.postCart(cart);

      setSizeMessage("SELECT SIZE")
      setAddToCartMessage("ITEM ADDED TO CART");
      setTimeout(() => {
        setAddToCartMessage("ADD TO BAG");
        setSize(null);
        setQuantity(null);
        setCart(null);
      }, 3000)

    }
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
    return some(skusArray, (sku) => sku.quantity > 0);
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
      formattedSku.quantity > 0 && skusArray.push(formattedSku);
    }
    setInStock(validateInStock(skusArray));
    return skusArray;
  };



  return (
    <div className="po-checkout-container">
      <SelectSize
        size={size}
        skus={skus}
        sizeSelectHandler={sizeSelectHandler}
        sizeMessage={sizeMessage}
      />
      <SelectQuantity
        quantity={quantity}
        cart={cart}
        quantityNums={quantityNums}
        quantityToCartHandler={quantityToCartHandler}
      />
      {inStock && (
        <AddToCartButton
          addToCartMessage={addToCartMessage}
          addToCartHandler={addToCartHandler}
        />
      )}
      <StarButton />
    </div>
  );
};

export default CheckoutContainer;
