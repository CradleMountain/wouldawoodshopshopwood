import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import "regenerator-runtime/runtime";

import { ProductOverviewContextProvider } from "./productOverview-context.js";
import MainCarousel from "./carousel/MainCarousel.js";
import VerticalCarousel from "./carousel/VerticalCarousel.js";
import api from "./apiHelpers.js";

const ProductOverview = (props) => {
  const [currentProduct, setCurrentProduct] = useState([]);
  const [productStyles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(null);

  useEffect(() => {
    getProductData(props.currentProduct);
    getProductStyle(props.currentProduct);
  }, []);

  const getProductStyle = async (productId) => {
    const productStyles = await api.get(`/${productId}/styles`);
    console.log("productStyle: ", productStyles.data.results);
    setStyles(productStyles.data.results);
    setCurrentStyle(productStyles.data.results[0].style_id);
  };

  const getProductData = async (productId) => {
    const productData = await api.get(`/${productId}`);
    console.log("productData: ", productData.data);
    setCurrentProduct(productData.data);
  };

  return (
    <ProductOverviewContextProvider>
      <MainCarousel
        productStyles={productStyles}
        currentProduct={currentProduct}
        currentStyle={currentStyle}
      />
      <VerticalCarousel
        productStyles={productStyles}
        currentProduct={currentProduct}
        currentStyle={currentStyle}
      />
    </ProductOverviewContextProvider>
  );
};

export default ProductOverview;
