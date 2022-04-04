import React from 'react';

import ProductBar from './productBar.js';

const ProductBreakdown = ({factors}) => {
  var bars = [];
  for (var factor in factors) {
    bars.push(
      <ProductBar key={factor} factor={factor} data={factors[factor]}/>
    );
  }
  return (
    <div className="product-breakdown">
      {bars}
    </div>
  );
};

export default ProductBreakdown;