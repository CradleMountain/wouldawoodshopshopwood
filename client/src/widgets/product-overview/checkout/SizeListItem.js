import React from "react";

const SizeListItem = (props) => {
  const clickHandler = () => {
    props.sizeSelectHandler(props.skuObj);
  };

  return (
    <li className="po-list-item" tabIndex="0" onClick={clickHandler}>
      {props.skuObj.size}
    </li>
  );
};

export default SizeListItem;
