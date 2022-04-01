import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

import ProductOverview from './widgets/product-overview/productOverview.js';
import QuestionsAnswers from './widgets/questions-answers/questionsAnswers.js';
import RatingsReviews from './widgets/ratings-reviews/ratingsReviews.js';
import RelatedProducts from './widgets/related-products/relatedProducts.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      currentProduct: {}
    }

    this.getProductById = this.getProductById.bind(this);
  }

  componentDidMount() {
    this.getProductById(37312);
  }

  getProductById(id) {
    axios({
      method: 'GET',
      url: `/products/${id}`
    })
      .then(({data}) => {
        this.setState({
          currentProduct: data
        })
      })
      .catch((err) => {
        console.error(err);
      });
  }


  render() {
    return (

        <QuestionsAnswers />

    );
  }

  // render() {
  //   return (
  //     <>
  //       <ProductOverview />
  //       <RelatedProducts />
  //       <QuestionsAnswers />
  //       <RatingsReviews />
  //     </>
  //   );
  // }
}

export default App;