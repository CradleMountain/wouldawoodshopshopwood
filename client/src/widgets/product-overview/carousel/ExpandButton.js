import React from "react";

const ExpandButton = (props) => {
  return (
    <div className="po-expand-button-container">
      <div onClick={props.expandHandler} className="po-expand-button">
        <i className="fa-solid fa-expand fa-xl" onClick={props.expandHandler}></i>
      </div>
    </div>
  );
};

export default ExpandButton;
