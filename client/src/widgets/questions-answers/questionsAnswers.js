import React from 'react';
import QSearch from './QSearch.js';
import QList from './QList.js';
import MoreQs from './MoreQs.js';
import AddQ from './AddQ.js';


class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Questions and Answers</div>
        <br></br>
        <QSearch />
        <br></br>
        <QList />
        <br></br>
        <MoreQs /><AddQ />
      </div>
    );
  }
}

export default QuestionsAnswers;


