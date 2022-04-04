import React from 'react';

import Review from './review.js';

const ReviewList = (props) => {
  return (
     <div className="rr-reviews">
       <Review review={props.reviews[0]}/>
     </div>
  );
};

export default ReviewList;