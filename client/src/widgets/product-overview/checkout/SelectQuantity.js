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
    <div className="dropDownContainer">
      <div onClick={toggleQuantityList} className="dropDownButton">
        {props.cart ? quantity || 1 : "-"}
      </div>
      {isToggled && (
        <ul className="dropDownList">
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
  );
};

export default SelectQuantity;
