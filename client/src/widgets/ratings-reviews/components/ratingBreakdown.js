import React, { useState, useEffect } from 'react';
import StarRating from '../../../components/starRating.js';

import RatingBar from './ratingBar.js';

const RatingBreakdown = (props) => {
  const countFilters = (list = props.filter) => {
    var count = 0;
    for (var key in list) {
      if (list[key]) {
        count++;
      }
    }
    return count;
  };

  const resetFilter = () => {
    var newState = {};
    for (var i = 1; i < 6; i++) {
      newState[i] = true;
    }
    return newState;
  };

  const [filterCount, setFilterCount] = useState(() => {
    return countFilters();
  });

  useEffect(() => {
    setFilterCount(countFilters());
  }, [props.filter]);

  const handleClick = (stars) => {
    var newState = {};
    if (filterCount === 5) {
      for (var i = 1; i < 6; i++) {
        newState[i] = false;
      }
      newState[stars] = true;
    } else {
      for (var key in props.filter) {
        newState[key] = props.filter[key]
      }
      newState[stars] = !newState[stars]
    }

    if (countFilters(newState) === 0) {
      newState = resetFilter();
    }
    props.setFilter(newState);
  };

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
      return result.toString().slice(0, 3);
    }
  };
  var average = averageRating(props.metadata.ratings);
  var numAvg = Number(average);

  var total = 0;
  var bars = [];
  var ratings = props.metadata.ratings;
  if (ratings) {
    for (var rating in ratings) {
      total += Number(ratings[rating]);
    }
    bars = ([1,2,3,4,5]).map((rating) => {
      var selected = '';
      if (filterCount < 5 && props.filter[rating]) {
        selected = "select-filter";
      }
      return <RatingBar rating={rating} qty={Number(ratings[rating]) || 0} total={total} key={rating} onClick={() => { handleClick(rating); }} selected={selected} />
    });
    var recs = props.metadata.recommended;
    var recPct = Math.round(Number(recs.true) / (Number(recs.false) + Number(recs.true)) * 100);
  }

  var filterLabel = '';
  for (var key in props.filter) {
    if (props.filter[key]) {
      filterLabel += key + ', ';
    }
  }
  filterLabel = filterLabel.slice(0, filterLabel.length - 2);

  return (
    <div className="rr-rating-breakdown">
      <div>
        <StarRating rating={numAvg || 3} />
        <span>{total} reviews</span>
        <div className="rr-rb-avg-num">{average || 3.0}</div>
      </div>
      <div className="rr-rb-header">Rating Breakdown</div>
      {filterCount < 5
        ? <div>
          <span>Showing results for: </span>
          <span>{filterLabel} stars</span>
          <br/>
          <span className="rr-clickable" onClick={() => { props.setFilter(resetFilter()); }}>Remove all filters</span>
        </div>
        : <span>Filter reviews by rating:</span>}
      <div className="rr-rb-bars">{bars}</div>
      <div>Recommended by {recPct || 70}% of reviews</div>
    </div>
  );
};

export default RatingBreakdown;