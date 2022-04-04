import React, { useState } from "react";


const ProdContext = React.createContext({
  carouselIndex: 0,
  currentStyle: 0,
});

export const ProductOverviewContextProvider = (props) => {

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(null);

  const carouselIndexChangeHandler = (index) => {
    setCarouselIndex(index);
  };
  const styleChangeHandler = (id) => {
    setCurrentStyle(id);
    console.log('stylechange to : ', id);
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