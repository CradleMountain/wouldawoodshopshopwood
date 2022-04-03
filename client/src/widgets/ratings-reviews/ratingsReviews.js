import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RatingBreakdown from './components/ratingBreakdown.js';

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

  const [metadata, setMetadata] = useState();

  useEffect(() => {
    if (props.product.id && Number(metadata.product_id) !== props.product.id) {
      getMetadata(props.product.id)
      .then((data) => {
        setMetadata(data);
      })
      .catch((err) => {
        console.error(err);
      });
    }
  });

  return (
    <div className="ratings-reviews">
      <h2>Ratings &amp; Reviews</h2>
      <div className="rr-breakdowns">
        <RatingBreakdown metadata={metadata} product={props.product} />
      </div>
      <div className="rr-reviews"></div>
    </div>
  );
};

export default RatingsReviews;