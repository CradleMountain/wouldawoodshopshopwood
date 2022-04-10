import React, { useState } from "react";

import ProductCard from "./productCard.js";
import Comparison from "./comparison.js";
import Arrow from "./Arrow.js";

const RelatedCarousel = ({ product, list, getProductById }) => {
  const [showModal, setShowModal] = useState(false);
  const [related, setRelated] = useState({});
  const [carouselIndex, setCarouselIndex] = useState(0);

  const compare = (clickedProduct) => {
    console.log("CLICK ITS CAM JANSEN");
    setRelated(clickedProduct);
    setShowModal(true);
  };

  const leftArrowClick = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    }
  };
  const rightArrowClick = () => {
    if (carouselIndex < list.length - 1) {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  return (
    <div className="rp-carousel-container">
      {carouselIndex > 0 && (
        <Arrow
          icon={"arrow"}
          direction={"left"}
          clickHandler={leftArrowClick}
        />
      )}

      <div className="rp-horizontal-carousel">
        <div
          className={
            list.length < 5 ? "rp-horizontal-inner-alt" : "rp-horizontal-inner"
          }
          style={{ transform: `translateX(-${carouselIndex * 17}%)` }}
        >
          {list.map((product, i) => {
            return (
              <ProductCard
                product={product}
                key={i}
                icon="fa-regular fa-star"
                onClick={compare}
                getProductById={getProductById}
              />
            );
          })}
        </div>
      </div>
      {list.length > 5 && list.length - carouselIndex > 5 && (
        <Arrow
          icon={"arrow"}
          direction={"right"}
          clickHandler={rightArrowClick}
        />
      )}

      {/* {showModal ? (
        <Comparison
          product={product}
          related={related}
          close={() => {
            setShowModal(false);
          }}
        />
      ) : null} */}
    </div>
  );
};

export default RelatedCarousel;
