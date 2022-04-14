import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QSearch from './QSearch.js';
import QList from './QList.js';
import MoreQs from './MoreQs.js';
import AddQ from './AddQ.js';
import ModalWrapper from '../../components/modal.js';


const QuestionsAnswers = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [addingQuestion, setAddingQuestion] = useState(false);
  const [feedCount, setFeedCount] = useState(2);

  const getQuestions = () => {
    axios({
      method: 'GET',
      url: `/qa/questions/?product_id=37322`,
      params: {
        count: 7,
        page: 1
      }
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
    <div className='questions-answers'>
      <div className="qa-header">Questions and Answers</div>
      <br></br>
      <QSearch setSearchTerm={setSearchTerm}/>
      <br></br>
      <div>
        <QList searchTerm={searchTerm} feedCount={feedCount} currentProduct={props.currentProduct} data={data}/>
      </div>
      <button onClick={() => setFeedCount(feedCount+1)}>More Answered Questions</button><button onClick={() => setAddingQuestion(!addingQuestion)}>Add a Question +</button>
      {addingQuestion &&
        <ModalWrapper backClick={() => {}}>
          <AddQ product_id={props.currentProduct.id} product_name={props.currentProduct.name} exitModal={exitModal}/>
        </ModalWrapper>
      }
    </div>
  );
};

export default QuestionsAnswers;
