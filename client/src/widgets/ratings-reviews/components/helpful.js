import React from 'react';
import axios from 'axios';

const Helpful = ({id, yes}) => {
  const rateHelpful = () => {
    axios({
      method: 'PUT',
      url: `/reviews/${id}/helpful`
    })
    .catch((err) => {
      console.error(err);
    });
  };

  return (
    <div className="rr-review-helpful">
      <span>Was this review helpful? </span>
      <span className="help-option" onClick={rateHelpful}>Yes ({yes}) </span>
      <span className="help-option">No (0)</span>
    </div>
  );
};

export default Helpful;