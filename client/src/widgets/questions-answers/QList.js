import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Q from './Q';

const QList = (props) => {

  return (
    props.data.map((datum, i) => {
      if (i <= props.feedCount && (props.searchTerm.length < 3 || datum.question_body.toLowerCase().includes(props.searchTerm.toLowerCase()))) {
        return (
          <Q key={i} currentProduct={props.currentProduct} datum={datum}/>
        )
      }
    })
  )
}

export default QList;


