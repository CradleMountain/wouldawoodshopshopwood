import React, { useState, useEffect, useContext } from "react";

import ProdContext from "../context/productOverview-context";
import api from "../apiHelpers.js";

const StarButton = (props) => {
  const ctx = useContext(ProdContext);
  const [isStar, setIsStar] = useState(false);

  const clickHandler = () => {
    setIsStar(!isStar);
  };

  return (
    <div
      className="po-drop-down-container po-star"
      tabIndex="0"
      onClick={clickHandler}
    >
      {isStar && (
        <div>
          <i className="fa-solid fa-star fa-lg"></i>
        </div>
      )}
      {!isStar && (
        <div>
          <i className="fa-regular fa-star fa-lg"></i>
        </div>
      )}
    </div>
  );
};

export default StarButton;
