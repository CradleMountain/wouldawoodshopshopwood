import React from "react";

const NumberListItem = (props) => {

  const clickHandler = () => {
    props.quantitySelectHandler(props.num);
  };

  return (
    <li className="po-list-item" onClick={clickHandler}>
      {props.num}
    </li>
  );
};

export default NumberListItem;
