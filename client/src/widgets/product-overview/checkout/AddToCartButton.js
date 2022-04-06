import React from "react";

import ProdContext from "../context/productOverview-context";

const AddToCartButton = (props) => {

  const clickHandler = () => {
    props.addToCartHandler();
  };

  return (
    <div className="dropDownContainer">
      <div className="dropDownButton" onClick={clickHandler}>
        Add To Cart
      </div>
    </div>
  );
};

export default AddToCartButton;
