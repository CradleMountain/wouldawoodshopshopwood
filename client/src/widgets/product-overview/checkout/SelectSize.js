import React, { useState, useContext } from "react";

import ProdContext from "../context/productOverview-context";

const SelectSize = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleList = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="dropDownContainer">
      <div onClick={toggleList} className="dropDownHeader">
        ddHeader
      </div>
      {isToggled && (
        <div>
          <ul className="dropDownList">
            <li className="listItem">item</li>
            <li className="listItem">item</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectSize;
