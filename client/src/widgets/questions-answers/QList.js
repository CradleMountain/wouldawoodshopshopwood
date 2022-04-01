import axios from 'axios';
import React from 'react';
import Q from './Q';

class QList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    }

    this.getQuestions = this.getQuestions.bind(this);

  }

  getQuestions () {
    axios({
      method: 'GET',
      url: `/qa/questions/?product_id=37313`
    })
      .then((data) => {
        console.log('DATA', data.data.results)
        this.setState({
          questions: data.data.results
        })
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.getQuestions();
  }


  render() {
    return (
      <div>
        <Q />
      </div>


    );
  }
}

export default QList;


