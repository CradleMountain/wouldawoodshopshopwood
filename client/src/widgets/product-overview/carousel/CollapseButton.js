import React from "react";

const CollapseButton = (props) => {
  return (
    <div className="po-expand-button-container">
      <div onClick={props.collapseHandler} className="po-expand-button">
        <i className="fa-solid fa-minimize fa-xl" onClick={props.collapseHandler}></i>
      </div>
    </div>
  );
};

export default CollapseButton;