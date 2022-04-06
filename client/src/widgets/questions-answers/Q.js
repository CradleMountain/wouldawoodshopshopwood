import React, {useState, useEffect} from 'react';

const Q = (props) => {

  const [ACount, setACount] = useState(1);

  return (
    <div>
      Q: {props.datum.question_body}
      <button>
        Helpful
      </button>
      <button onClick={() => setACount(ACount + 1)}>
        Add Answer {ACount}
      </button>
      <div>

      </div>
      <br></br>
    </div>
  )


  // props.data.map(datum => {
  //   return (
  //     <div>Q</div>
  //   )
  // })
}

export default Q;

