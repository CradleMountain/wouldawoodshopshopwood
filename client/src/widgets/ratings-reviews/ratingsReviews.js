import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RatingBreakdown from './components/ratingBreakdown.js';
import ProductBreakdown from './components/productBreakdown.js';
import ReviewList from './components/reviewList.js'
import Sorter from './components/sorter.js';
import ReviewForm from './components/reviewForm.js';
import SearchBar from './components/searchBar.js';

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

  const getReviews = (productId, count = listMax) => {
    return axios({
      method: 'GET',
      url: '/reviews',
      params: {
        'product_id': productId,
        'page': 1,
        'count': count,
        'sort': sort
      }
    })
      .then(({ data }) => {
        // console.log('Data:', data);
        return data;
      })
      .catch((err) => {
        return err;
      })
  };

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

  const [metadata, setMetadata] = useState({});
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState('relevant');
  const [write, setWrite] = useState(false);
  const [listMax, setListMax] = useState(100);
  const [filterMax, setFilterMax] = useState(100);
  const [searchFilter, setSearchFilter] = useState(null);
  const [ratingFilter, setRatingFilter] = useState(() => {
    var state = {};
    for (var i = 1; i < 6; i++) {
      state[i] = true;
    }
    return state;
  });

  useEffect(() => {
    setFilterMax(filterList(reviews).length);
  }, [ratingFilter]);

  useEffect(() => {
    if (props.product.id) {
      getReviews(props.product.id, 100)
      .then((data) => {
        setReviews(data.results);
        setListMax(data.results.length);
        setFilterMax(filterList(data.results).length);
      })
      .then(() => {
        return getMetadata(props.product.id)
          .then((data) => {
            setMetadata(data);
          });
      })
      .catch((err) => {
        console.error(err);
      });
    }
  }, [props.product, sort]);

  if (metadata.product_id) {
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
            <SearchBar filter={searchFilter} setFilter={setSearchFilter}/>
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