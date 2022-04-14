import React from 'react';
import axios from 'axios';

const Image = ({ url, styles = "", alt="Uploaded image", tabIndex="-1", onClick = () => {} }) => {
  if (url.match('^http') && !url.includes('localhost')) {
    return <img tabIndex={tabIndex} src={url} className={styles} onClick={onClick} alt={alt}/>;
  } else {
    return null;
  }
};

export default Image;