import React from 'react';
import styled from 'styled-components';

const StyledBar = styled.div`
display: inline-block;
background-color: ${props => props.color || 'gray'};
height: 5px;
width: ${props => props.size || '0'}px;
border-radius: ${props => props.size > 0 && props.size < 150 ? props.round : '3px'};
`;

const RatingBar = ({rating, qty, total, onClick, selected}) => {
  var pct = qty/total;
  var size = Math.round(pct * 100);

  return (
    <span className={selected} onClick={onClick} tabIndex="0">
      {rating} Stars <span className="rr-rb-bar"><StyledBar size={size * 1.5} color="rgb(0, 160, 0)" round="3px 0 0 3px"/><StyledBar size={(100 - size) * 1.5} color="rgb(180, 180, 180)" round="0 3px 3px 0"/></span> {qty}
    </span>
    );
};

export default RatingBar;