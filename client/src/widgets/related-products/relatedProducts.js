import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RelatedList from './components/relatedList.js';
import OutfitList from './components/outfitList.js';

const RelatedProducts = ({ product }) => {
  const getProduct = (productId) => {
    return axios({
      method: 'GET',
      url: `/products/${productId}`
    })
      .then(({ data }) => {
        return data;
      });
  };

  const getRelated = (productId) => {
    return axios({
      method: 'GET',
      url: `/products/${productId}/related`
    })
      .then(({ data }) => {
        var promises = [];
        for (var i = 0; i < data.length; i++) {
          promises.push(getProduct(data[i]));
        }
        return Promise.all(promises);
      })
  };

  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (product.id) {
      getRelated(product.id)
        .then((data) => {
          console.log('Related:', data);
          setRelated(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [product]);

  if (related[0]) {
    return (
      <div className="related-products">
        <RelatedList list={related}/>
        <OutfitList />
      </div>
    );
  } else {
    return (<div className="related-products"></div>);
  }
};

export default RelatedProducts;