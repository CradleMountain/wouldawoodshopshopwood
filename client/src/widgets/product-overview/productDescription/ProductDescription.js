import React from "react";

const ProductDescription = (props) => {

  console.log(props.currentProduct)

  let content = (
    <section>
    <div>
      <p>Slogan</p>
      <p>Description Paragraph</p>
    </div>
    <div>
      <p>some feature</p>
      <p>another feature</p>
    </div>
  </section>
  )
  return (
    <>{content}</>
  );
};

export default ProductDescription;
