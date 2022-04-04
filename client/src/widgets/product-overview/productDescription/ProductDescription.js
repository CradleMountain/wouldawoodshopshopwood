import React from "react";

const ProductDescription = (props) => {

  console.log(props.currentProduct)

  let content = (
    <section>
    <div>
      <p>{props.currentProduct.slogan}</p>
      <p>{props.currentProduct.description}</p>
    </div>
    <div>
      {props.currentProduct.features.map((feature, index) => {
        return <p key={index}>{`${feature.value} ${feature.feature}`}</p>
      })}
    </div>
  </section>
  )
  return (
    <>{content}</>
  );
};

export default ProductDescription;
