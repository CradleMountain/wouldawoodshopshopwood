import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import StarRating from '../../../components/starRating.js';
import ReviewImages from './reviewImages.js';
import Helpful from './helpful.js';

const Review = ({ review, keyword }) => {
  //console.log(review);
  const [reviewText, setReviewText] = useState(review.body.slice(0, 250));
  useEffect(() => {
    setReviewText(review.body.slice(0, 250));
  }, [review]);

  const highlightKeyword = (text) => {
    var spans = [];
    var findKeyword = (str) => {
      if (str.toLowerCase().includes(keyword.toLowerCase())) {
        var index = str.toLowerCase().indexOf(keyword.toLowerCase());
        spans.push(<span key={spans.length}>{str.slice(0, index)}</span>);
        spans.push(<span className="keyword" key={spans.length}>{str.slice(index, index + keyword.length)}</span>);
        findKeyword(str.slice(index + keyword.length));
      } else {
        spans.push(<span key={spans.length}>{str}</span>);
      }
    }
    findKeyword(text);
    return spans;
  };

  var summary = review.summary;
  var body = reviewText;

  if (keyword) {
    summary = highlightKeyword(summary);
    body = highlightKeyword(body);
  }

  return (
    <div className="rr-review">
      <StarRating rating={review.rating} />
      <span> {review.reviewer_name}</span>
      <span> {moment(review.date).format('MMMM DD, YYYY')}</span>
      <p className="rr-review-summary">{summary}</p>
      <div className="rr-review-body">
        <p>{body}{reviewText.length <= 250 && review.body.length > 250
          ? (<span className="rr-showmore rr-clickable" onClick={() => setReviewText(review.body)}>... Show more</span>)
          : null}
        </p>
        <ReviewImages images={review.photos} />
      </div>
      {review.recommend ? (<div>
        <FontAwesomeIcon icon={faCheck} />
        <span>I recommend this product</span>
      </div>) : null}
      {review.response
        ? <div className="rr-review-response">
          <span>Response from seller</span>
          <p>{review.response}</p>
        </div>
        : null}
      <Helpful id={review.review_id} yes={review.helpfulness} />
    </div>
  );
};

export default Review;