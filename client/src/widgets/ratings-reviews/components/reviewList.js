import React, { useState, useEffect } from 'react';

import Review from './review.js';

const ReviewList = ({ reviews, max, filter, searchFilter, filterList }) => {
  const [list, setList] = useState(reviews.slice(0, 2));

  useEffect(() => {
    setList(filterList(reviews).slice(0, 2));
  }, [reviews, filter, searchFilter]);

  const clickHandler = (e) => {
    e.preventDefault();
    var start = list.length;
    var newList = list.concat(filterList(reviews).slice(start, start + 2));
    setList(newList);
  };

  return (
    <div className="rr-reviews">
      <div className="rr-reviews-list">
        {list.length > 0
          ? list.map((review, i) => { return <Review key={i} review={review} keyword={searchFilter}/>; })
          : <div className="rr-reviews-empty">0 results found</div>
        }
      </div>
      {list.length < max ? <button onClick={clickHandler}>More Reviews</button> : null}
    </div>
  );
};

export default ReviewList;