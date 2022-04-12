import React from 'react';
import axios from 'axios';

const Image = ({ url, styles = "", onClick = () => {} }) => {
  if (url.match('^http') && !url.includes('localhost')) {
    return <img src={url} className={styles} onClick={onClick} />;
  } else {
    return null;
  }
};

export default Image;