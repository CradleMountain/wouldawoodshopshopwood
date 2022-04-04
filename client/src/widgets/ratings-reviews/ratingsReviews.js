import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RatingBreakdown from './components/ratingBreakdown.js';
import ProductBreakdown from './components/productBreakdown.js';
import ReviewList from './components/reviewList.js'

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

  const getReviews = (productId) => {
    return axios({
      method: 'GET',
      url: '/reviews',
      params: {
        'product_id': productId,
        'page': 1,
        'count': 2,
        'sort': 'relevant'
      }
    })
      .then(({data}) => {
        return data;
      })
      .catch((err) => {
        return err;
      })
  };

  const [product, setProduct] = useState(props.product.id);
  const [metadata, setMetadata] = useState({});
  const [reviews, setReviews] = useState({});

  if (props.product.id && Number(metadata.product_id) !== props.product.id) {
    getMetadata(props.product.id)
      .then((data) => {
        setMetadata(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (props.product.id && product !== props.product.id) {
    getReviews(props.product.id)
      .then((data) => {
        setReviews(data.results);
        setProduct(Number(data.product));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (product) {
    return (
      <>
      <h2>Ratings &amp; Reviews</h2>
      <div className="ratings-reviews">
        <div className="rr-breakdowns">
          <RatingBreakdown metadata={metadata} product={props.product} />
          <ProductBreakdown factors={metadata.characteristics} />
        </div>
        <ReviewList reviews={reviews}/>
      </div>
      </>
    );
  } else {
    return (<div className="ratings-reviews"></div>)
  }
};

export default RatingsReviews;