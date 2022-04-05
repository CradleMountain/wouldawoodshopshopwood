import React, { useState } from 'react';
import axios from 'axios';

const getAuthHelp = (review_id) => {
  return localStorage.getItem(review_id);
};

const setAuthHelp = (review_id, option) => {
  localStorage.setItem(review_id, option);
};

const Helpful = ({ id, yes }) => {
  const rateHelpful = () => {
    axios({
      method: 'PUT',
      url: `/reviews/${id}/helpful`
    })
    .then(() => {
      setAuthHelp(id, 'yes');
      setResponse('yes');
      setQty(qty + 1);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const [response, setResponse] = useState(() => { return getAuthHelp(id); });
  const [qty, setQty] = useState(yes - 1);
  var content = (
    <>
      <span>Was this review helpful? </span>
      <span className="help-option" onClick={rateHelpful}>Yes ({yes}) </span>
      <span className="help-option" onClick={() => { setAuthHelp(id, 'no'); setResponse('no'); } }>No (0)</span>
    </>
  );
  if (response) {
    content = (
      <span>{response === 'yes' ? `You and ${qty} others found this helpful` : 'You did not find this helpful'}</span>
    );
  }

  return (
    <div className="rr-review-helpful">
      {content}
    </div>
  );
};

export default Helpful;