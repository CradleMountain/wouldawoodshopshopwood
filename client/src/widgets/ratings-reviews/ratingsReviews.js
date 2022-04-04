import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RatingBreakdown from './components/ratingBreakdown.js';
import ProductBreakdown from './components/productBreakdown.js';

const RatingsReviews = (props) => {
  const getMetadata = (productId) => {
    return axios({
      method: 'GET',
      url: `/reviews/meta`,
      params: {
        'product_id': productId
      }
    })
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  }

  const [metadata, setMetadata] = useState({});

  if (props.product.id && Number(metadata.product_id) !== props.product.id) {
    getMetadata(props.product.id)
      .then((data) => {
        setMetadata(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (metadata.product_id) {
    return (
      <div className="ratings-reviews">
        <h2>Ratings &amp; Reviews</h2>
        <div className="rr-breakdowns">
          <RatingBreakdown metadata={metadata} product={props.product} />
          <ProductBreakdown factors={metadata.characteristics} />
        </div>
        <div className="rr-reviews"></div>
      </div>
    );
  } else {
    return (<div className="ratings-reviews"></div>)
  }
};

export default RatingsReviews;