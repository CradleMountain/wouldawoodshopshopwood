import React from 'react';
import styled from 'styled-components';

const StyledBar = styled.div`
display: inline-block;
background-color: ${props => props.color || 'gray'};
height: 5px;
width: ${props => props.size || '50'}px;
border-radius: ${props => props.round || '3px 0 0 3px'};
`;

const RatingBar = ({rating, qty, total}) => {
  var pct = qty/total;
  var size = Math.round(pct * 100);

  return (
    <span>
      {rating} Stars <StyledBar size={size} color="rgb(0, 160, 0)"/><StyledBar size={100 - size} color="rgb(180, 180, 180)" round="0 3px 3px 0"/> {qty}
    </span>
    );
};

export default RatingBar;