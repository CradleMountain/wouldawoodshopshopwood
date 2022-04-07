import React from 'react';

import StyleThumbnail from './StyleThumbnail.js'

const StyleSelector = (props) => {

  return (
    <div className="fourRoundContainer">
      {props.productStyles.map((style, index) => {
        return <StyleThumbnail key={index} styleObj={style} />;
      })}
    </div>
  )
};

export default StyleSelector;