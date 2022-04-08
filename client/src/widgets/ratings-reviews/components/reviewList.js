import React, { useState, useEffect } from 'react';

import Review from './review.js';

const ReviewList = ({reviews, max, load, filter, filterList}) => {
  const [list, setList] = useState(reviews);

  useEffect(() => {
    setList(filterList(reviews));
  }, [reviews]);

  useEffect(() => {
    setList(() => {
      var filterNew = filterList(reviews);
      var filterOld = filterList(list);
      return filterNew.length > filterOld.length ? filterNew : filterOld;
    });
  }, [filter]);

  const clickHandler = (e) => {
    e.preventDefault();
    load((result) => {
      setList(list.concat(filterList(result)));
    });
  };

  return (
     <div className="rr-reviews">
       <div className="rr-reviews-list">
        {list.map((review, i) => { return <Review key={i} review={review}/>; })}
       </div>
       {list.length < max ? <button onClick={clickHandler}>More Reviews</button> : null}
     </div>
  );
};

export default ReviewList;