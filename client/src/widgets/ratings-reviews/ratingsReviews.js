import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RatingBreakdown from './components/ratingBreakdown.js';
import ProductBreakdown from './components/productBreakdown.js';
import ReviewList from './components/reviewList.js'
import Sorter from './components/sorter.js';
import ReviewForm from './components/reviewForm.js';

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

  const getReviews = (productId, pg, sortBy = sort, count = 2) => {
    return axios({
      method: 'GET',
      url: '/reviews',
      params: {
        'product_id': productId,
        'page': pg,
        'count': count,
        'sort': sortBy
      }
    })
      .then(({data}) => {
        console.log('Data:', data);
        return data;
      })
      .catch((err) => {
        return err;
      })
  };

  const loadReviews = (cb) => {
    getReviews(product, page + 1)
      .then((data) => {
        cb(data.results);
        setPage(page + 1);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  const [product, setProduct] = useState(props.product.id);
  const [metadata, setMetadata] = useState({});
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('relevant');
  const [write, setWrite] = useState(false);

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
    getReviews(props.product.id, page)
      .then((data) => {
        setReviews(data.results);
        setProduct(Number(data.product));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (product && metadata.product_id) {
    return (
      <>
      {write ? <ReviewForm show={setWrite} product={props.product} factors={Object.keys(metadata.characteristics)}/> : null}
      <h2>Ratings &amp; Reviews</h2>
      <div className="ratings-reviews">
        <div className="rr-breakdowns">
          <RatingBreakdown metadata={metadata} product={props.product} />
          <ProductBreakdown factors={metadata.characteristics} />
        </div>
        <div className="rr-sort-stream">
          <Sorter sort={sort} select={setSort}/>
          <ReviewList reviews={reviews} load={(loadReviews)} max={Number(metadata.recommended.true) + Number(metadata.recommended.false)}/>
          <div>
            <button onClick={() => setWrite(true)}>Write a Review</button>
          </div>
        </div>
      </div>
      </>
    );
  } else {
    return (<div className="ratings-reviews"></div>)
  }
};

export default RatingsReviews;