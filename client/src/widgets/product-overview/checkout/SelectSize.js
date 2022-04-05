import React, { useState, useEffect, useContext } from "react";

import ProdContext from "../context/productOverview-context";
import SizeListItem from "./SizeListItem.js";

const SelectSize = (props) => {
  const ctx = useContext(ProdContext);

  const [isToggled, setIsToggled] = useState(false);
  const [skus, setSkus] = useState([]);

  useEffect(() => {
    if (ctx.currentStyle.skus) {
      setSkus(formatSkus(ctx.currentStyle.skus));
    }
  }, [ctx.currentStyle]);

  const toggleList = () => {
    setIsToggled(!isToggled);
  };

  const sizeSelectHandler = (skuObj) => {
    toggleList();
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
    <div className="dropDownContainer">
      <div onClick={toggleList} className="dropDownButton">
        Select Size
      </div>
      {isToggled && (
        <ul className="dropDownList">
          {skus.map((skuObj, index) => {
            return (
              <SizeListItem
                skuObj={skuObj}
                sizeSelectHandler={sizeSelectHandler}
                key={index}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SelectSize;
