import React from 'react';
import styled from 'styled-components';

const factorPhrases = {
  Size: ['A size too small', 'A size too wide'],
  Width: ['Too narrow', 'Too wide'],
  Comfort: ['Uncomfortable', 'Perfect'],
  Quality: ['Poor', 'Perfect'],
  Length: ['Runs short', 'Runs long'],
  Fit: ['Runs tight', 'Runs long']
};

const FactorBar = styled.div`
display: inline-block;
background-color: rgb(180, 180, 180);
height: 5px;
width: ${props => props.size}px;
border-radius: ${props => props.round};
margin-left: ${props => props.margin || 0};
`;

const FactorPointer = styled.div`
  display: inline-block;
  position: relative;
  top: 1px;
  background-color: black;
  height: 8px;
  width: 6px;
  border-radius: 2px;
`;

const ProductBar = ({factor, data}) => {
  var point = 150 / data.value;
  return (
    <div className="rr-pr-factor">
      <div>{factor}</div>
      <div>
        <span>
          <FactorBar margin="20px" size={point - 3} round="3px 0 0 3px"/>
          <FactorPointer/>
          <FactorBar size={150 - point - 3} round="0 3px 3px 0"/>
        </span>
      </div>
      <div className="rr-pr-phrases">
        <div className="rr-pr-phrase-1">{factorPhrases[factor][0]}</div>
        <div className="rr-pr-phrase-2">{factorPhrases[factor][1]}</div>
      </div>
    </div>
  );
};

export default ProductBar;