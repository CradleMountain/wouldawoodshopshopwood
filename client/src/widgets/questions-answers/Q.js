import React, {useState, useEffect} from 'react';
import axios from 'axios';
import A from './A.js';
import ModalWrapper from '../../components/modal.js';
import AddA from './AddA.js';

const Q = (props) => {

  const [answersExpanded, setAnswersExpanded] = useState(false)

  const [addingAnswer, setAddingAnswer] = useState(false)

  const [ACount, setACount] = useState(2);

  const [helpfulnessCount, setHelpfulnessCount] = useState(props.datum.question_helpfulness)

  const [helpfulClicked, setHelpfulClicked] = useState(false);

  const [reportClicked, setReportClicked] = useState(false);

  const exitModal = () => {
    setAddingAnswer(false);
  }

  const moreAnswersElement = () => {
    if (Object.keys(props.datum.answers).length > 2 && !answersExpanded) {
      return (
        <button onClick={() => {setACount(7); setAnswersExpanded(true);}}>
          See more answers
        </button>
      )
    } else if (answersExpanded) {
      return (
        <button onClick={() => {setACount(2); setAnswersExpanded(false);} }>
          Collapse answers
        </button>
      )
    } else {
      return null;
    }
  }

  const helpfulnessPut = id => {
    if (!helpfulClicked) {
      axios({
        method: 'PUT',
        url: `/qa/questions/${id}/helpful`
      })
      .then(data => {
        console.log('helpful success ', data)
        setHelpfulnessCount(helpfulnessCount+1)
      })
      .catch(err => {
        console.log('ERROR IN Q ', err)
      });
    }
    setHelpfulClicked(true);
  }

  const QReportPUT = (e) => {
    e.preventDefault();
    setReportClicked(true);
    if (reportClicked === false) {
      axios({
        method: 'PUT',
        url: `/qa/questions/${props.datum.question_id}/report`
      })
      .then(res => {
        console.log('QReportPut', res)
      })
      .catch(err => {
        console.log('QReportPUT error', err)
      })
    } else {
      console.log('NEED TO switch button to static Reported')
    }
  }

  return (
    <div className="qa-question">
      <span className="qa-question-title">Q: {props.datum.question_body}</span>
      <div className="qa-help-report">
        {!reportClicked ?
          <span className="qa-report-btn" onClick={QReportPUT}>
            Report
          </span>
          : <span>Reported</span>
        }
        <span> | </span>
        <span>Helpful? </span>
        <span className="qa-help-btn" onClick={() => helpfulnessPut(props.datum.question_id)}>
          Yes ({helpfulnessCount})
        </span>
      </div>

      <button onClick={() => setAddingAnswer(true)}>
        Add Answer
      </button>
      <div>
        {Object.keys(props.datum.answers).map((key, i) => {
          if (i < ACount) {
            return (
                <A key={i} ATotal={Object.keys(props.datum.answers).length} answer={props.datum.answers[key]}/>
            )
          }
        })}
      </div>
      <div>
        {moreAnswersElement()}
      </div>
      <br></br>

      {addingAnswer &&
        <ModalWrapper styles="qa-AddQ-modal" backClick={() => {}}>
          <AddA question_id={props.datum.question_id} product_id={props.currentProduct.id} exitModal={exitModal} question_body={props.datum.question_body} product_name={props.currentProduct.name}/>
        </ModalWrapper>
      }
      <br></br>
    </div>
  )
}

export default Q;
