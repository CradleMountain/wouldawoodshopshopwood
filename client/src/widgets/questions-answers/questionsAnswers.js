import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QSearch from './QSearch.js';
import QList from './QList.js';
import MoreQs from './MoreQs.js';
import AddQ from './AddQ.js';

const QuestionsAnswers = (props) => {

  const [data, setData] = useState([]);

  const getQuestions = () => {
    axios({
      method: 'GET',
      url: `/qa/questions/?product_id=37313`
    })
      .then((data) => {
        var newState = [];
        var order = data.data.results.map(result => {
          return result.question_helpfulness
        })
        order.sort();
        order.forEach(rating => {
          data.data.results.forEach(result => {
            if (result.question_helpfulness === rating) {
              newState.push(result);
            }
          });
        });
        setData(data.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      <div>Questions and Answers</div>
      <br></br>
      <QSearch />
      <br></br>
      <QList  data={data}/>

    </div>
  );
};

export default QuestionsAnswers;



  // const [currentQuestion, setCurrentQuestion] = useState({});
  // const [secondStateVariable, setSecondStateVariable] = useState('');

  // const getQuestions = () => {
  //       axios({
  //         method: 'GET',
  //         url: `/qa/questions/?product_id=37313`
  //       })
  //         .then((data) => {
  //           console.log('getQuestions .then', data.data.results)
  //           setCurrentQuestion({
  //             questions: data.data.results
  //           });
  //         })
  //         .catch((err) => {
  //           console.error(err);
  //         });
  //     };



    // useEffect(() => {
    //   getQuestions();
    // });

  // useEffect(() => {
  //   console.log('fuck ', props.currentProduct.id);
  //   setCurrentQuestion({id: props.currentProduct.id});
  // }, [secondStateVariable]);


//// / / / / / /  / /



// class QuestionsAnswers extends React.Component {
//   constructor(props) {
//     super(props);

//     // this.state = {

//     // }

//     this.getQuestions = this.getQuestions.bind(this);
//   }


//   getQuestions () {
//     axios({
//       method: 'GET',
//       url: `/qa/questions/?product_id=37313`
//     })
//       .then((data) => {
//         this.setState({
//           questions: data.data.results
//         })
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }

//   componentDidMount() {
//     console.log('fuck ', this.props.currentProduct.id)
//     this.setState({id: this.props.currentProduct.id})
// }


//   render() {
//     return (
//       <div>
//         <div>Questions and Answers</div>
//         <br></br>
//         <QSearch />
//         <br></br>
//         <QList  currentProduct={this.props.currentProduct}/>
//         <br></br>
//         <MoreQs /><AddQ />
//       </div>
//     );
//   }
// }

// export default QuestionsAnswers;


// By default, on page load up to four questions should be displayed. Up to two answers should display for each question.

// The remaining questions or answers should be hidden until the user loads them using the “More Answered Questions” button

// Questions should appear in order of ‘helpfulness’, corresponding to how many users have indicated that the question was helpful.

// The list will contain all questions by default, but will have the potential to be filtered to a subset based on user searches

// If no questions have been submitted for this product, then the list will collapse, and the button to submit a new question (section 1.3.5) will appear near the top of the module.