import React, {useState, useEffect} from 'react';

const A = (props) => {

  return (
    <div>
      <div>
        A: {props.answer.body}
      </div>
      <div>
        by: {props.answer.answerer_name}, {props.answer.date}
      </div>
    </div>
  )


}

export default A;


// SELLER TAG UNFINISHED!!!