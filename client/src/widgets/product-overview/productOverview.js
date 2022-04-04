import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import 'regenerator-runtime/runtime';

import MainCarousel from "./carousel/MainCarousel.js";
import api from "./apiHelpers.js";

const ProductOverview = (props) => {
  const [currentProduct, setCurrentProduct] = useState([]);
  const [productStyles, setStyles] = useState([]);

  useEffect(() => {
    console.log('props.currentProduct: ', props.currentProduct)
    getProductData(props.currentProduct);
    getProductStyle(props.currentProduct);
  }, []);

  const getProductStyle = async (productId) => {
    const productStyles = await api.get(`/${productId}/styles`);
    console.log('productStyle: ', productStyles.data.results);
    setStyles(productStyles.data.results);
  };

  const getProductData = async (productId) => {
    const productData = await api.get(`/${productId}`);
    console.log('productData: ', productData.data)
    setCurrentProduct(productData.data);
  };

  return (
    <div>
      {/* <MainCarousel styles={styles} currentProduct={currentProduct} /> */}
    </div>
  );
};

export default ProductOverview;
