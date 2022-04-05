import React, { useState, useEffect, useContext } from "react";

import ProdContext from "../context/productOverview-context";
import SizeListItem from "./SizeListItem.js";

const SelectSize = (props) => {
  const ctx = useContext(ProdContext);
  const [isToggled, setIsToggled] = useState(false);
  const [size, setSize] = useState(null);

  useEffect(() => {
    setSize(null);
  }, [ctx.currentStyle]);

  const toggleList = () => {
    setIsToggled(!isToggled);
  };

  const sizeSelectHandler = (skuObj) => {
    toggleList();
    setSize(skuObj.size);
    props.sizeToCartHandler(skuObj);
  };

  return (
    <div className="dropDownContainer">
      <div onClick={toggleList} className="dropDownButton">
        {size ? size : "Select Size"}
      </div>
      {isToggled && (
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
