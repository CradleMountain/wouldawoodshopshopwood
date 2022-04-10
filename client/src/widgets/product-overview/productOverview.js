import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  Fragment,
} from "react";

import axios from "axios";
import "regenerator-runtime/runtime";

import ProdContext from "./context/productOverview-context.js";
import MainCarousel from "./carousel/MainCarousel.js";
import ProductDescription from "./textDisplays/ProductDescription.js";
import StyleDescription from "./textDisplays/StyleDescription.js";
import StyleSelector from "./styleSelector/StyleSelector.js";
import CheckoutContainer from "./checkout/CheckoutContainer.js";
import ExpandedView from "./carousel/ExpandedView.js";
import api from "./apiHelpers.js";

const ProductOverview = (props) => {
  const ctx = useContext(ProdContext);

  const [productStyles, setStyles] = useState([]);
  const [showExpanded, setShowExpanded] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    getProductStyle(props.currentProduct.id);
    getRating(props.currentProduct.id)
  }, [props.currentProduct]);

  const getProductStyle = useCallback(async (productId) => {
    try {
      const productStyles = await api.get(`/${productId}/styles`);
      setStyles(productStyles.data.results);
      ctx.styleChangeHandler(
        productStyles.data.results.filter((style) => style["default?"])[0]
      );
    } catch (error) {
      console.error(error);
    }
  });

  const getRating = (id) => {
    api.getRatings(id)
      .then((ratings) => {
        var sum = 0;
        var total = 0;
        for (var rating in ratings) {
          sum += Number(rating) * Number(ratings[rating]);
          total += Number(ratings[rating]);
        }
        var result = Math.round((sum / total) * 10) * 0.1;
        setRating(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const expandHandler = () => {
    setShowExpanded(true);
  };

  const collapseHandler = () => {
    setShowExpanded(false);
  };

  return (
    <div className="po-overview-container">
      {showExpanded && (
        <ExpandedView
          productStyles={productStyles}
          currentProduct={props.currentProduct}
          collapseHandler={collapseHandler}
        />
      )}
      {!showExpanded && (
        <Fragment>
          <MainCarousel
            productStyles={productStyles}
            currentProduct={props.currentProduct}
            expandHandler={expandHandler}
          />
          <div className="po-styles-container">
            <StyleDescription
              productStyles={productStyles}
              currentProduct={props.currentProduct}
              rating={rating}
            />
            <StyleSelector
              productStyles={productStyles}
              currentProduct={props.currentProduct}
            />
            <CheckoutContainer />
          </div>
          <div className="po-description-container">
            <ProductDescription currentProduct={props.currentProduct} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ProductOverview;
