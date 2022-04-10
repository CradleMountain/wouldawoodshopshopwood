import React from "react";

import ProdContext from "../context/productOverview-context";

const AddToCartButton = (props) => {
  const clickHandler = () => {
    props.addToCartHandler();
  };

  return (
    <div
      className="po-drop-down-container po-add-to-cart"
      onClick={clickHandler}
    >
      <p>{props.addToCartMessage}</p> <i className="fa-solid fa-plus fa-lg"></i>
    </div>
  );
};

export default AddToCartButton;
