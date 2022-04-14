import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';

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
    <div className="qa-question">
      <span className="qa-question-title">
        A: {props.answer.body}
      </span>
      <div>
        by {props.answer.answerer_name}, {moment(props.answer.date).format('MMMM DD, YYYY')}
      </div>
      <div className="qa-help-report">
        {reportClicked ?
          "Reported" :
          <span className="qa-help-btn" onClick={reportPUT}>
            Report
          </span>
        }
        <span> | </span>
        <span>Helpful? </span>
        <span className="qa-help-btn" onClick={AHelpfulnessPUT}>
          Yes ({AHelpfulnessCount})
        </span>
      </div>
    </div>
  )
}

export default A;
