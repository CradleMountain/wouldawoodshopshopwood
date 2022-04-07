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
