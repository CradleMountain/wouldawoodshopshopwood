import React from 'react';
import StarRating from '../../../components/starRating.js';

const RatingBreakdown = (props) => {
  // props.rating
  // props.reviewCount
  return (
    <div className="rr-rating-breakdown">
      {JSON.stringify(props.metadata)}
    </div>
  );
};

export default RatingBreakdown;