import React, { useState, useEffect, useContext, useCallback, Fragment } from "react";

import axios from "axios";
import "regenerator-runtime/runtime";

//import { ProductOverviewContextProvider } from "./productOverview-context.js";
import ProdContext from "./productOverview-context.js";
import MainCarousel from "./carousel/MainCarousel.js";
import VerticalCarousel from "./carousel/VerticalCarousel.js";
import ProductDescription from "./productDescription/ProductDescription.js";
import StyleSelector from "./styleSelector/StyleSelector.js";
import api from "./apiHelpers.js";

const ProductOverview = (props) => {
  const ctx = useContext(ProdContext);

  //const [currentProduct, setCurrentProduct] = useState([]);
  const [productStyles, setStyles] = useState([]);
  //const [currentStyle, setCurrentStyle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //getProductData(props.currentProduct.id);
    getProductStyle(props.currentProduct.id);
  }, []);

  const getProductStyle = useCallback(async (productId) => {
    try {
      const productStyles = await api.get(`/${productId}/styles`);
      setStyles(productStyles.data.results);
      ctx.styleChangeHandler(productStyles.data.results[0].style_id);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  }, []);

  // const getProductData = async (productId) => {
  //   const productData = await api.get(`/${productId}`);
  //   console.log("productData: ", productData.data);
  //   setCurrentProduct(productData.data);
  // }

  return (
    <Fragment>
      <MainCarousel
        productStyles={productStyles}
        currentProduct={props.currentProduct}

      />
      <VerticalCarousel
        productStyles={productStyles}
        currentProduct={props.currentProduct}

      />
      <ProductDescription currentProduct={props.currentProduct} />
      <StyleSelector
        productStyles={productStyles}
        currentProduct={props.currentProduct}

      />
    </Fragment>
  );
};

export default ProductOverview;
//        currentStyle={currentStyle}