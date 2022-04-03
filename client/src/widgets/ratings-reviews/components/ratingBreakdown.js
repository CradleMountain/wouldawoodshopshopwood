import React, { useState, useEffect } from 'react';
import StarRating from '../../../components/starRating.js';

const RatingBreakdown = (props) => {

  //console.log('Metadata:', props.metadata);
  var averageRating = (ratings) => {
    var sum = 0;
    var qty = 0;
    for (var num in ratings) {
      sum += Number(num) * Number(ratings[num]);
      qty += Number(ratings[num]);
    }
    var result = Math.round(sum / qty * 10) * 0.1;
    console.log(result);
    if (Math.floor(result) === result) {
      return result.toString() + '.0';
    } else {
      return result.toString();
    }
  };

  return (
    <div className="rr-rating-breakdown">
      <span className="rr-rb-rating-num">{averageRating(props.metadata.ratings)}</span>
    </div>
  );
};

export default RatingBreakdown;