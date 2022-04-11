import React, {useState, useEffect} from 'react';
import axios from 'axios';
import A from './A.js';
import ModalWrapper from '../../components/modal.js';
import AddA from './AddA.js';

const Q = (props) => {

  const [addingAnswer, setAddingAnswer] = useState(false)

  const [ACount, setACount] = useState(2);

  const [helpfulnessCount, setHelpfulnessCount] = useState(props.datum.question_helpfulness)

  const [helpfulClicked, setHelpfulClicked] = useState(false);

  const [reportClicked, setReportClicked] = useState(false);

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

  // const QPOST = (body, name, email) => {

  //   axios({
  //     method: 'POST',
  //     url: '/qa/questions',
  //     data: {
  //       body: body,
  //       name: name,
  //       email: email,
  //       product_id: props.currentProduct.id
  //     }
  //   })
  //   .then(res => {
  //     console.log('QPOST SUCCESS', res)
  //   })
  //   .catch(err => {
  //     console.log('FAIL QPOST', err)
  //   })
  // }


  return (
    <div>
      Q: {props.datum.question_body}
      <div>
        Helpful?
        <button onClick={() => helpfulnessPut(props.datum.question_id)}>
          Yes {helpfulnessCount}
        </button>
        <br></br>
        <button onClick={QReportPUT}>
          Report
        </button>
      </div>

      <button onClick={() => setAddingAnswer(true)}>
        Add Answer
      </button>
      <div>
        {Object.keys(props.datum.answers).map((key, i) => {
          if (i < ACount) {
            return(
                <A answer={props.datum.answers[key]}/>
            )
          }
        })}
      </div>
      <div>
        <button onClick={() => setACount(ACount+1)}>
          See more answers
        </button>
      </div>
      <br></br>

      {addingAnswer &&
        <ModalWrapper backClick={() => {}}>
          <AddA question_body={props.datum.question_body} product_name={props.currentProduct.name}/>
        </ModalWrapper>
      }
      <br></br>
    </div>
  )
}



export default Q;

// NEED TO IMPLEMENT LOCAL STORAGE TO LIMIT HELPFULNESS VOTES TO ONE PER USER PER QUESTION

// PUT /qa/questions/:question_id/helpful


// I think this goes here because this is where the As are propagated... A is where they are formed.

// By default only two answers will show. The rest should be hidden. If more than two answers exist for the question, a link to “See more answers” should display below the list. Clicking on this link should expand the area below the question and display the remainder of the list.


// return (
//   <div>
//     Q: {props.datum.question_body}
//     <div>
//       Helpful?
//       <button onClick={() => helpfulnessPut(props.datum.question_id)}>
//         Yes {helpfulnessCount}
//       </button>
//     </div>

//     <button onClick={() => setAddingAnswer(true)}>
//       Add Answer
//     </button>
//     <div>
//       {Object.keys(props.datum.answers).map((key, i) => {
//         if (i < ACount) {
//           return(
//               <A answer={props.datum.answers[key]}/>
//           )
//         }
//       })}
//     </div>
//     <div>
//       <button onClick={() => setACount(ACount+1)}>
//         See more answers
//       </button>
//     </div>
//     <br></br>

//     {addingAnswer &&
//       <ModalWrapper backClick={() => {}}>
//         <AddA question_body={props.datum.question_body} product_name={props.currentProduct.name}/>
//       </ModalWrapper>
//     }
//     <br></br>
//   </div>
// )