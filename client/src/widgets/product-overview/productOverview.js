import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  Fragment,
} from "react";

import axios from "axios";
import "regenerator-runtime/runtime";

//import { ProductOverviewContextProvider } from "./productOverview-context.js";
import ProdContext from "./context/productOverview-context.js";
import MainCarousel from "./carousel/MainCarousel.js";
import VerticalCarousel from "./carousel/VerticalCarousel.js";
import ProductDescription from "./textDisplays/ProductDescription.js";
import StyleDescription from "./textDisplays/StyleDescription.js";
import StyleSelector from "./styleSelector/StyleSelector.js";
import CheckoutContainer from "./checkout/CheckoutContainer.js";
import api from "./apiHelpers.js";

const ProductOverview = (props) => {
  const ctx = useContext(ProdContext);

  const [productStyles, setStyles] = useState([]);

  useEffect(() => {
    getProductStyle(props.currentProduct.id);
  }, []);

  const getProductStyle = useCallback(async (productId) => {
    try {
      const productStyles = await api.get(`/${productId}/styles`);
      setStyles(productStyles.data.results);
      ctx.styleChangeHandler(productStyles.data.results.filter(style => style['default?'])[0]);
      console.log(props.currentProduct);
      console.log(productStyles.data.results);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="overviewContainer">
      <MainCarousel
        productStyles={productStyles}
        currentProduct={props.currentProduct}
      />
      <VerticalCarousel
        productStyles={productStyles}
        currentProduct={props.currentProduct}
      />
      <div className="outOfTheWay">
        <StyleDescription
          productStyles={productStyles}
          currentProduct={props.currentProduct}
        />

        <ProductDescription currentProduct={props.currentProduct} />
        <StyleSelector
          productStyles={productStyles}
          currentProduct={props.currentProduct}
        />
        <CheckoutContainer />
      </div>
    </div>
  );
};

export default ProductOverview;
//        currentStyle={currentStyle}
