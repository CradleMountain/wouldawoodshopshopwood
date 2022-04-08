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

  const getReviews = (productId, sortBy = sort) => {
    return axios({
      method: 'GET',
      url: '/reviews',
      params: {
        'product_id': productId,
        'page': 1,
        'count': listMax,
        'sort': sortBy
      }
    })
      .then(({ data }) => {
        console.log('Data:', data);
        return data;
      })
      .catch((err) => {
        return err;
      })
  };

  // const getListMax = (productId) => {
  //   if (metadata.recommended !== undefined && productId) {
  //     var total = Number(metadata.recommended.true) + Number(metadata.recommended.false);
  //     return axios({
  //       method: 'GET',
  //       url: '/reviews',
  //       params: {
  //         'product_id': productId,
  //         page: 1,
  //         count: total,
  //         sort: sort
  //       }
  //     })
  //       .then(({data}) => {
  //         console.log('All results:', data.results);
  //         return filterList(data.results).length;
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   } else {
  //     return new Promise((reject) => reject(listMax));
  //   }
  // };

  const filterList = (currentList) => {
    var newList = [];
    for (var i = 0; i < currentList.length; i++) {
      var review = currentList[i];
      if (ratingFilter[review.rating]) {
        newList.push(review);
      }
    }
    return newList;
  };

  const [product, setProduct] = useState(props.product.id);
  const [metadata, setMetadata] = useState({});
  const [reviews, setReviews] = useState([]);
  // const [page, setPage] = useState(1);
  const [sort, setSort] = useState('relevant');
  const [write, setWrite] = useState(false);
  const [listMax, setListMax] = useState(100);
  const [filterMax, setFilterMax] = useState(100);
  const [ratingFilter, setRatingFilter] = useState(() => {
    var state = {};
    for (var i = 1; i < 6; i++) {
      state[i] = true;
    }
    return state;
  });

  // useEffect(() => {
  //   setPage(1);
  // }, [props.product, sort]);

  // useEffect(() => {
  //   getListMax(product)
  //     .then((max) => {
  //       setListMax(max);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [product, sort]);

  useEffect(() => {
    setFilterMax(filterList(reviews).length);
  }, [ratingFilter]);

  useEffect(() => {
    getReviews(props.product.id, sort)
      .then((data) => {
        setReviews(data.results);
        setListMax(data.results.length);
        setFilterMax(filterList(data.results).length);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.product.id, sort]);

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

  if (product && metadata.product_id) {
    return (
      <>
        {write ? <ReviewForm show={setWrite} product={props.product} characteristics={metadata.characteristics} /> : null}
        <h2>Ratings &amp; Reviews</h2>
        <div className="ratings-reviews">
          <div className="rr-breakdowns">
            <RatingBreakdown metadata={metadata} product={props.product} filter={ratingFilter} setFilter={setRatingFilter}/>
            <ProductBreakdown factors={metadata.characteristics} />
          </div>
          <div className="rr-sort-stream">
            <Sorter sort={sort} select={setSort} />
            <ReviewList reviews={reviews} max={filterMax} filter={ratingFilter} filterList={filterList}/>
            <div className="rr-write-btn">
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