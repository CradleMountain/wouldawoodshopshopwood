import React, { useState, useEffect, useContext } from "react";

import ProdContext from "../context/productOverview-context";
import NumberListItem from "./NumberListItem.js";

const SelectQuantity = (props) => {
  const ctx = useContext(ProdContext);
  const [isToggled, setIsToggled] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(null);
    setIsToggled(false);
  }, [ctx.currentStyle]);

  const toggleQuantityList = () => {
    if (props.cart) {
      setIsToggled(!isToggled);
    }
  };

  const quantitySelectHandler = (num) => {
    toggleQuantityList();
    setQuantity(num);
    props.quantityToCartHandler(num);
  };

  return (
    <div
      className="po-drop-down-container po-quantity"
      onClick={toggleQuantityList}
    >
      <p>{props.cart ? quantity || 1 : "---"}</p>
      <div>
        {isToggled && (
          <ul className="po-drop-down-list">
            {props.quantityNums.map((num) => {
              return (
                <NumberListItem
                  num={num}
                  quantitySelectHandler={quantitySelectHandler}
                  key={num}
                />
              );
            })}
          </ul>
        )}
      </div>
      <i className="fa-solid fa-chevron-down"></i>
    </div>
  );
};

export default SelectQuantity;
