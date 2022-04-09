import React, { useState, useEffect, useContext } from "react";

import ProdContext from "../context/productOverview-context";

const StarButton = (props) => {
  const ctx = useContext(ProdContext);
  const [isStar, setIsStar] = useState(false);

  const clickHandler = () => {
    setIsStar(!isStar);
  };

  return (
    <div className="dropDownContainer star" onClick={clickHandler}>
      {isStar && <div><i className="fa-solid fa-star fa-lg"></i></div>}
      {!isStar && <div><i className="fa-regular fa-star fa-lg"></i></div>}
      {/* <div className="dropDownButton" onClick={clickHandler}>
        <p>/p>
      </div> */}
    </div>
  );
};

export default StarButton;
