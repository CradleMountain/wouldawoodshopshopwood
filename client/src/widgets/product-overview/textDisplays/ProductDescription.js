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
          return <p key={index}>{`${feature.value} ${feature.feature}`}</p>;
        })}
      </div>
    </section>
  );
};

export default ProductDescription;
