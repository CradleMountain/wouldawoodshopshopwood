import React from "react";

import { ProductOverviewContextProvider } from "./productOverview-context.js";
import ProductOverview from '../productOverview.js';

const ContextWrapper = (props) => {
  return (
    <ProductOverviewContextProvider>
      <ProductOverview currentProduct={props.currentProduct} />
    </ProductOverviewContextProvider>
  );
};

export default ContextWrapper;