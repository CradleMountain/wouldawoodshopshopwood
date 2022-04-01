import axios from 'axios';
import React from 'react';
import Q from './Q';

class QList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {test: []}

    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
    // console.log('QLIST STATE ', this.state)
  }

  getQuestions () {
    axios({
      method: 'GET',
      url: `/qa/questions/?product_id=37312`
    })
      .then((data) => {
        console.log('DATA', data)
        // this.setState({
        //   test: data
        // })
      })
      .catch((err) => {
        console.error(err);
      });
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


