import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RelatedCarousel from './components/RelatedCarousel.js';
import OutfitList from './components/outfitList.js';

const RelatedProducts = ({ product, getProductById }) => {
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
          setRelated(data);
          console.log(data)
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [product]);

  if (related[0]) {
    return (
      <div className="related-products">
        <RelatedCarousel product={product} list={related} getProductById={getProductById}/>
        <OutfitList />
      </div>
    );
  } else {
    return (<div className="related-products"></div>);
  }
};

export default RelatedProducts;