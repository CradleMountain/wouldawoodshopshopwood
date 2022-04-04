import React, { useState, useEffect } from 'react';
import StarRating from '../../../components/starRating.js';

import RatingBar from './ratingBar.js';

const RatingBreakdown = (props) => {
  var averageRating = (ratings) => {
    var sum = 0;
    var qty = 0;
    for (var num in ratings) {
      sum += Number(num) * Number(ratings[num]);
      qty += Number(ratings[num]);
    }
    var result = Math.round(sum / qty * 10) * 0.1;
    if (Math.floor(result) === result) {
      return result.toString() + '.0';
    } else {
      return result.toString().slice(0,3);
    }
  };
  var average = averageRating(props.metadata.ratings);
  var numAvg = Number(average);

  var total = 0;
  var bars = [];
  var ratings = props.metadata.ratings;
  if (ratings) {
    for (var rating in ratings) {
      total += Number(props.metadata.ratings[rating]);
    }
    bars = Object.keys(props.metadata.ratings).map((rating) => {
      return <RatingBar rating={rating} qty={Number(props.metadata.ratings[rating])} total={total} key={rating} />
    });
    var recs = props.metadata.recommended;
    var recPct = Math.round(Number(recs.true) / (Number(recs.false) + Number(recs.true)) * 100);
  }

  return (
    <div className="rr-rating-breakdown">
      <div>
        <StarRating rating={numAvg || 3} />
        <span>{total} reviews</span>
        <div className="rr-rb-avg-num">{average || 3.0}</div>
      </div>
      <div className="rr-rb-bars">{bars}</div>
      <div>Recommended by {recPct || 70}% of reviews</div>
    </div>
  );
};

export default RatingBreakdown;