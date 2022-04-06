import React, { useState, useEffect, useContext } from "react";

import ProdContext from "../context/productOverview-context";
import SizeListItem from "./SizeListItem.js";

const SelectSize = (props) => {
  const ctx = useContext(ProdContext);

  const [size, setSize] = useState(null);

  useEffect(() => {
    setSize(null);
    ctx.sizeDropToggleHandler(false);
  }, [ctx.currentStyle]);

  const toggleList = () => {
    ctx.sizeDropToggleHandler(!ctx.sizeDropToggle);
  };

  const sizeSelectHandler = (skuObj) => {
    toggleList();
    setSize(skuObj.size);
    props.sizeToCartHandler(skuObj);
  };

  return (
    <div className="dropDownContainer">
      <div onClick={toggleList} className="dropDownButton">
        {size ? size : props.sizeMessage}
      </div>
      {ctx.sizeDropToggle && (
        <ul className="dropDownList">
          {props.skus.map((skuObj, index) => {
            if (skuObj.size) {
              return (
                <SizeListItem
                  skuObj={skuObj}
                  sizeSelectHandler={sizeSelectHandler}
                  key={index}
                />
              );
            }

          })}
        </ul>
      )}
    </div>
  );
};

export default SelectSize;
