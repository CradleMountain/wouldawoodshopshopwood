import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Q from './Q';

// I think this is the accordion component

const QList = (props) => {

  const [feedCount, setFeedCount] = useState(4);


  // return (
  //   <Q />
  // )
  return (
    props.data.map((datum, i) => {
      if (i < feedCount) {
        return (
          <Q datum={datum}/>
        )
      }
    })
  )
  // <br></br>
  // <MoreQs /><AddQ />
}

    // this.state = {
    //   id: 55,
    //   questions: []
    // }

    // this.getQuestions = this.getQuestions.bind(this);



  // getQuestions () {
  //   axios({
  //     method: 'GET',
  //     url: `/qa/questions/?product_id=37313`
  //   })
  //     .then((data) => {
  //       this.setState({
  //         questions: data.data.results
  //       })
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  // getQuestions () {
  //   axios({
  //     method: 'GET',
  //     url: `/qa/questions/?product_id=${this.props.currentProduct.id}`
  //   })
  //     .then((data) => {
  //       this.setState({
  //         questions: data.data.results
  //       })
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  // componentDidMount() {
  //   this.getQuestions();
  // }

  //   componentDidMount() {
  //     console.log('fuck ', this.props.currentProduct.id)
  //   this.setState({id: this.props.currentProduct.id})
  // }


//   render() {
//     return (
//       <div>
//         <Q />
//       </div>


//     );
//   }
// }

export default QList;


