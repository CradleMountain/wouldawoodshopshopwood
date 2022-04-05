import React, { useState, useEffect } from 'react';

import Review from './review.js';

const ReviewList = ({reviews, max, load}) => {
  const [list, setList] = useState(reviews);
  useEffect(() => {
    setList(reviews);
  }, [reviews]);

  const clickHandler = (e) => {
    e.preventDefault();
    load((result) => {
      setList(list.concat(result));
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