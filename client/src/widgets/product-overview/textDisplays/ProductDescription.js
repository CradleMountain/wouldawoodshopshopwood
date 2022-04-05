import React from "react";

const ProductDescription = (props) => {
  return (
    <section>
      <div>
        <p>{props.currentProduct.slogan}</p>
        <p>{props.currentProduct.description}</p>
      </div>
      <div>
        {props.currentProduct.features.map((feature, index) => {
          return (
            <div key={index}>
              <i className="fa-solid fa-check"></i>
              <p>{`${feature.value} ${feature.feature}`}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductDescription;
