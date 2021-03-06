import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid, faStarHalfStroke as faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';


const OneFourthStar = styled(FontAwesomeIcon)`
  clip-path: polygon(40% 0%, 40% 100%, 0% 100%, 0% 0%);
`;

const ThreeFourthStar = styled(FontAwesomeIcon)`
  clip-path: polygon(60% 0%, 60% 100%, 0% 100%, 0% 0%);
`;

const LayeredStar = ({ fraction }) => {
  if (fraction === 0) {
    return <FontAwesomeIcon icon={faStarRegular} fixedWidth />;
  } else if (fraction === 4) {
    return <FontAwesomeIcon icon={faStarSolid} fixedWidth />;
  } else {
    if (fraction === 1) {
      var top = <OneFourthStar icon={faStarSolid} />
    } else if (fraction === 2) {
      var top = <FontAwesomeIcon icon={faStarHalf} />
    } else if (fraction === 3) {
      var top = <ThreeFourthStar icon={faStarSolid} />
    }
    return (
      <span className="fa-layers fa-fw">
        {top}
        <FontAwesomeIcon icon={faStarRegular} />
      </span>
    );
  }
};

const StarRating = (props) => {
  const composeStars = (rating) => {
    var stars = [];
    for (var i = 1; i < 6; i++) {
      var quarter = 0;
      if (rating >= i) {
        quarter = 4;
      } else if (rating < i && Math.floor(rating) === i - 1) {
        var remainder = rating - i + 1;
        quarter = Math.round(remainder * 4);
      }
      stars.push(<LayeredStar key={i} fraction={quarter}/>)
    }
    return stars;
  }

  return (<span className="star-rating">{composeStars(props.rating)}</span>);
};

export default StarRating;