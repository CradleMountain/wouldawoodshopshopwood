import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QSearch from './QSearch.js';
import QList from './QList.js';
import MoreQs from './MoreQs.js';
import AddQ from './AddQ.js';
import ModalWrapper from '../../components/modal.js';

const QuestionsAnswers = (props) => {

  const [data, setData] = useState([]);

  const [addingQuestion, setAddingQuestion] = useState(false);

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

  const exitModal = () => {
    setAddingQuestion(false);
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
      <QList currentProduct={props.currentProduct} data={data}/>
      <button>More Answered Questions</button><button onClick={() => setAddingQuestion(!addingQuestion)}>Add a Question +</button>
      {addingQuestion &&
        <ModalWrapper backClick={() => {}}>
          <AddQ product_id={props.currentProduct.id} product_name={props.currentProduct.name} exitModal={exitModal}/>
        </ModalWrapper>
      }
    </div>
  );
};

export default QuestionsAnswers;

// {addingQuestion &&
//   <ModalWrapper backClick={() => {}}>
//     <p>
//       hello modal
//     </p>
//   </ModalWrapper>
// }



//   <ModalWrapper backClick={() => {}}>
//   <p>
//     hello modal
//   </p>
// </ModalWrapper>