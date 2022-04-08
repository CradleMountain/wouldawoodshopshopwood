import React, { useState } from 'react';

import ProductCard from './productCard.js';
import Comparison from './comparison.js';

const RelatedList = ({ product, list }) => {
  const [showModal, setShowModal] = useState(false);
  const [related, setRelated] = useState({});

  const compare = (clickedProduct) => {
    console.log('CLICK ITS CAM JANSEN');
    setRelated(clickedProduct);
    setShowModal(true);
  };

  return (
    <>
      {showModal ? <Comparison product={product} related={related} close={() => { setShowModal(false); }}/> : null}
      <div className="rp-list-related">
        {list.map((product, i) => {
          return <ProductCard product={product} key={i} icon="fa-regular fa-star" onClick={compare} />;
        })}
      </div>
    </>
  );
};

export default RelatedList;