import React from 'react';

const StarRating = (props) => {
  var stars = [];
  for (var i = 1; i < 6; i++) {
    if (props.rating >= i) {
      stars.push(<i className="icon fa-solid fa-star"></i>);
    } else if (props.rating < i && Math.floor(props.rating) === i - 1) {
      var remainder = props.rating - i + 1;
      var quarter = Math.round(remainder * 4);
      if (quarter === 1) {
        stars.push(<span className="fa-layers fa-fw">
          <i className="icon fa-solid fa-star one-fourth"></i>
          <i className="icon fa-regular fa-star"></i>
          </span>);
      } else if (quarter === 3) {
        stars.push(<span className="fa-layers fa-fw">
          <i className="icon fa-solid fa-star three-fourths"></i>
          <i className="icon fa-regular fa-star"></i>
          </span>);
      } else {
        stars.push(<i className="icon fa-solid fa-star-half-stroke"></i>);
      }
    } else {
      stars.push(<i className="icon fa-regular fa-star"></i>);
    }
  }
  return (<span className="star-rating">{stars}</span>);
};

export default StarRating;