import React, { useContext } from "react";

import ProdContext from "../context/productOverview-context";

const IconItem = (props) => {
  const ctx = useContext(ProdContext);

  const clickHandler = () => {
    props.iconClickHandler(props.index)
  };

  return (
    <div onClick={clickHandler} className="po-icon-item">
      {ctx.carouselIndex === props.index && <div><i className="fa-solid fa-image fa-xl"></i></div>}
      {!ctx.carouselIndex === props.index && <div><i className="fa-regular fa-image"></i></div>}
    </div>
  );
};

export default IconItem;