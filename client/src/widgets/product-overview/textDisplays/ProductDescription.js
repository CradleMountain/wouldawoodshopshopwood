import React, { Fragment } from "react";

const ProductDescription = (props) => {
  return (
    <Fragment>
      <div className="po-product-text-container-left">
        <p className="po-product-slogan">{props.currentProduct.slogan}</p>
        <p className="po-product-description">
          {props.currentProduct.description}
        </p>
      </div>
      <div className="po-product-text-container-right">
        {props.currentProduct.features.map((feature, index) => {
          return (
            <div className="po-attribute-container" key={index}>
              <i className="fa-solid fa-check"></i>
              <p className="po-product-description">{`${feature.value} ${feature.feature}`}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProductDescription;
