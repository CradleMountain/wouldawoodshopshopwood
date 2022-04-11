import React, {useState, useEffect} from 'react';

const A = (props) => {

  const [AHelpfulClicked, setAHelpfulClicked] = useState(false);

  const [AHelpfulnessCount, setAHelpfulnessCount] = useState(props.answer.helpfulness);

  const AHelpfulnessPUT = () => {
    setAHelpfulnessCount(AHelpfulnessCount+1)
    if (!AHelpfulClicked) {
      axios({
        method: 'PUT',
        url: `/qa/answers/${props.answer.id}/helpful`
      })
      .then(data => {
        console.log('AHelpfulnessPUT SUCCESS ', data.response)
        setHelpfulnessCount(helpfulnessCount+1)
      })
      .catch(err => {
        console.log('ERROR IN AHelpfulnessPUT ', err)
      });
    }
    setAHelpfulClicked(true);
  }




  return (
    <div>
      <div>
        A: {props.answer.body}
      </div>
      <div>
        by: {props.answer.answerer_name}, {props.answer.date}
      </div>
      <div>
        Helpful?
        <button onClick={AHelpfulnessPUT}>
          Yes {AHelpfulnessCount}
        </button>
      </div>
    </div>
  )


}

export default A;


// SELLER TAG UNFINISHED!!!