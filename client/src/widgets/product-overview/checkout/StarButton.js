import React from "react";

const StarButton = (props) => {
  const clickHandler = () => {
    console.log("I am a star!");
  };

  return (
    <div className="dropDownContainer star">
      <i className="fa-regular fa-star fa-lg"></i>
      {/* <div className="dropDownButton" onClick={clickHandler}>
        <p>/p>
      </div> */}
    </div>
  );
};

export default StarButton;
