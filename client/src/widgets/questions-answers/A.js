import React, {useState, useEffect} from 'react';
import axios from 'axios';

const A = (props) => {

  const [reportClicked, setReportClicked] = useState(false);

  const [AHelpfulClicked, setAHelpfulClicked] = useState(false);

  const [AHelpfulnessCount, setAHelpfulnessCount] = useState(props.answer.helpfulness);

  const AHelpfulnessPUT = () => {

    if (!AHelpfulClicked) {
      setAHelpfulnessCount(AHelpfulnessCount+1)
      axios({
        method: 'PUT',
        url: `/qa/answers/${props.answer.id}/helpful`
      })
      .then(data => {
        console.log('AHelpfulnessPUT SUCCESS ', data)
      })
      .catch(err => {
        console.log('ERROR IN AHelpfulnessPUT ', err)
      });
    }
    setAHelpfulClicked(true);
  }

  const reportPUT = () => {
    setReportClicked(true);
    axios({
      method: 'PUT',
      url: `/qa/answers/${props.answer.id}/report`
    })
    .then(data => {
      console.log('reportPUT SUCCESS ', data)
    })
    .catch(err => {
      console.log('ERROR IN reportPUT ', err);
    });
  }

  return (
    <div>
      <div>
        A: {props.answer.body}
      </div>
      <div>
        by {props.answer.answerer_name}, {props.answer.date}
      </div>
      <div>
        Helpful?
        <button onClick={AHelpfulnessPUT}>
          Yes {AHelpfulnessCount}
        </button>
      </div>
      <div>
        {reportClicked ?
          "Reported" :
          <button onClick={reportPUT}>
            Report
          </button>
        }
      </div>
    </div>
  )
}

export default A;


// SELLER TAG UNFINISHED!!!