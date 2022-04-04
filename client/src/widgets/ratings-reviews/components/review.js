import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import StarRating from '../../../components/starRating.js';
import Helpful from './helpful.js';

const Review = ({ review }) => {
  console.log(review);
  const [reviewText, setReviewText] = useState(review.body.slice(0, 250));
  var response = (
    <div className="rr-review-response">
      <span>Response from seller</span>
      <p>{review.response}</p>
    </div>
  );
  return (
    <div className="rr-review">
      <StarRating rating={review.rating} />
      <span> {review.reviewer_name}</span>
      <span> {moment(review.date).format('MMMM DD, YYYY')}</span>
      <p className="rr-review-summary">{review.summary}</p>
      <div className="rr-review-body">
        <p>{reviewText}</p>
        {reviewText.length > 250 ? (<span onClick={() => setReviewText(review.body)}>Show more</span>) : null}
        <div className="rr-review-images"></div>
      </div>
      {review.recommend ? (<div>
        <FontAwesomeIcon icon={faCheck}/>
        <span> I recommend this product</span>
      </div>) : null}
      {review.response ? response : null}
      <Helpful id={review.review_id} yes={review.helpfulness}/>
    </div>
  );
};

export default Review;