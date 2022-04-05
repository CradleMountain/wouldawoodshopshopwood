import React, { useState } from "react";


const ProdContext = React.createContext({
  carouselIndex: 0,
  currentStyle: {},
});

export const ProductOverviewContextProvider = (props) => {

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentStyle, setCurrentStyle] = useState({});

  const carouselIndexChangeHandler = (index) => {
    setCarouselIndex(index);
  };
  const styleChangeHandler = (styleObj) => {
    setCurrentStyle(styleObj);
  };

  return (
    <ProdContext.Provider
      value={{
        carouselIndex: carouselIndex,
        carouselIndexChangeHandler: carouselIndexChangeHandler,
        currentStyle: currentStyle,
        styleChangeHandler: styleChangeHandler,
      }}
    >
      {props.children}
    </ProdContext.Provider>
  );
};

export default ProdContext;