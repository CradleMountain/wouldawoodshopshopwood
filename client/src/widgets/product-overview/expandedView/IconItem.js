import React, { useContext, useEffect, useState } from "react";

import ProdContext from "../context/productOverview-context";

const IconItem = (props) => {
  const ctx = useContext(ProdContext);
  const [indexMatch, setIndexMatch] = useState(false);

  const clickHandler = () => {
    props.iconClickHandler(props.index);
  };

  useEffect(() => {
    setIndexMatch(ctx.carouselIndex === props.index);
  }, [ctx.carouselIndex]);

  return (
    <div onClick={clickHandler} className="po-icon-item">
      {indexMatch && (
        <div>
          <i className="fa-solid fa-image fa-xl"></i>
        </div>
      )}
      {!indexMatch && (
        <div>
          <i onClick={clickHandler} className="fa-regular fa-image"></i>
        </div>
      )}
    </div>
  );
};

export default IconItem;
