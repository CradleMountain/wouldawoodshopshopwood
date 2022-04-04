import React, { useState } from "react";


const ProdContext = React.createContext({
  carouselIndex: 0
});

export const ProductOverviewContextProvider = (props) => {

  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselIndexChangeHandler = (index) => {
    setCarouselIndex(index);
  };

  return (
    <ProdContext.Provider
      value={{
        carouselIndex: carouselIndex,
        carouselIndexChangeHandler: carouselIndexChangeHandler,
      }}
    >
      {props.children}
    </ProdContext.Provider>
  );
};

export default ProdContext;