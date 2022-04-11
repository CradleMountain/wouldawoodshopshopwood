import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Q from './Q';

const QList = (props) => {




  return (
    props.data.map((datum, i) => {
      if (i <= props.feedCount) {
        return (
          <Q currentProduct={props.currentProduct} datum={datum}/>
        )
      }
    })
  )
}


export default QList;


