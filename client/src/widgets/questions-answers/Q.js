import React, {useState, useEffect} from 'react';
import axios from 'axios';
import A from './A.js';
import _ from 'underscore';

const Q = (props) => {

  const [ACount, setACount] = useState(2);

  const [helpfulnessCount, setHelpfulnessCount] = useState(props.datum.question_helpfulness)

  const [helpfulClicked, setHelpfulClicked] = useState(false);

  // const helpfulOnClick = () => {
  //   if (localStorage.getItem('helpfulClicked' !== 'yes')) {
  //     helpfulnessPut(props.datum.question_id)
  //   };

  //   localStorage.setItem('helpulClicked', 'yes');
  // }

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

  // const helpfulnessPut = id => {
  //   axios({
  //     method: 'PUT',
  //     url: `/qa/questions/${id}/helpful`
  //   })
  //   .then(data => {
  //     console.log('helpful success ', data)
  //     setHelpfulnessCount(helpfulnessCount+1)


  //   })
  //   .catch(err => {
  //     console.log('ERROR IN Q ', err)
  //   });
  // }

  return (
    <div>
      Q: {props.datum.question_body}
      <div>
        Helpful
        <button onClick={() => helpfulnessPut(props.datum.question_id)}>
          Yes? {helpfulnessCount}
        </button>
      </div>

      <button onClick={() => setACount(ACount + 1)}>
        Add Answer {ACount}
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
      <br></br>
      <br></br>
    </div>
  )



  // return (
  //   <div>
  //     Q: {props.datum.question_body}
  //     <div>
  //       Helpful
  //       <button onClick={() => helpfulnessPut(props.datum.question_id)}>
  //         Yes? {helpfulnessCount}
  //       </button>
  //     </div>

  //     <button onClick={() => setACount(ACount + 1)}>
  //       Add Answer {ACount}
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
  //     <br></br>
  //     <br></br>
  //   </div>
  // )

}



export default Q;

// NEED TO IMPLEMENT LOCAL STORAGE TO LIMIT HELPFULNESS VOTES TO ONE PER USER PER QUESTION

// PUT /qa/questions/:question_id/helpful


// I think this goes here because this is where the As are propagated... A is where they are formed.

// By default only two answers will show. The rest should be hidden. If more than two answers exist for the question, a link to “See more answers” should display below the list. Clicking on this link should expand the area below the question and display the remainder of the list.


