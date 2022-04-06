import React, { useState } from "react";

const ProdContext = React.createContext({
  carouselIndex: 0,
  currentStyle: {},
  sizeDropToggle: false,
});

export const ProductOverviewContextProvider = (props) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentStyle, setCurrentStyle] = useState({});
  const [sizeDropToggle, setSizeDropToggle] = useState(false);

  const carouselIndexChangeHandler = (index) => {
    setCarouselIndex(index);
  };
  const styleChangeHandler = (styleObj) => {
    setCurrentStyle(styleObj);
  };
  const sizeDropToggleHandler = (bool) => {
    setSizeDropToggle(bool);
  };

  return (
    <ProdContext.Provider
      value={{
        carouselIndex: carouselIndex,
        carouselIndexChangeHandler: carouselIndexChangeHandler,
        currentStyle: currentStyle,
        styleChangeHandler: styleChangeHandler,
        sizeDropToggle: sizeDropToggle,
        sizeDropToggleHandler: sizeDropToggleHandler,
      }}
    >
      {props.children}
    </ProdContext.Provider>
  );
};

export default ProdContext;
