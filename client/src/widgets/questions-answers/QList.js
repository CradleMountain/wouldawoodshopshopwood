import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Q from './Q';

const QList = (props) => {

  const [feedCount, setFeedCount] = useState(4);

  

  return (
    props.data.map((datum, i) => {
      if (i <= feedCount) {
        return (
          <Q currentProduct={props.currentProduct} datum={datum}/>
        )
      }
    })
  )
}


export default QList;


