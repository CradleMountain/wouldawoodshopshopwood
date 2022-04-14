import React, { useState, useEffect, useContext } from "react";

import ProdContext from "../context/productOverview-context";
import api from "../apiHelpers.js";


const StarButton = (props) => {
  const ctx = useContext(ProdContext);
  const [isStar, setIsStar] = useState(false);

  const clickHandler = () => {
    setIsStar(!isStar);
    api.getCart()
      .then(data => {
        console.log('Cart Data: ', {data})
      })
  };

  return (
    <div className="po-drop-down-container po-star" onClick={clickHandler}>
      {isStar && <div><i className="fa-solid fa-star fa-lg"></i></div>}
      {!isStar && <div><i className="fa-regular fa-star fa-lg"></i></div>}
      {/* <div className="dropDownButton" onClick={clickHandler}>
        <p>/p>
      </div> */}
    </div>
  );
};

export default StarButton;
