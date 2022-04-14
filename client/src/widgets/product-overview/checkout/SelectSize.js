import React, { useContext } from "react";

import ProdContext from "../context/productOverview-context";
import SizeListItem from "./SizeListItem.js";

const SelectSize = (props) => {
  const ctx = useContext(ProdContext);

  const toggleList = () => {
    ctx.sizeDropToggleHandler(!ctx.sizeDropToggle);
  };

  return (
    <div
      className="po-drop-down-container po-size"
      tabIndex="0"
      onClick={toggleList}
    >
      <p>{props.size ? props.size : props.sizeMessage}</p>
      <div>
        {ctx.sizeDropToggle && (
          <ul className="po-drop-down-list">
            {props.skus.map((skuObj, index) => {
              if (skuObj.size) {
                return (
                  <SizeListItem
                    skuObj={skuObj}
                    sizeSelectHandler={props.sizeSelectHandler}
                    key={index}
                  />
                );
              }
            })}
          </ul>
        )}
      </div>
      <i className="fa-solid fa-chevron-down"></i>
    </div>
  );
};

export default SelectSize;
