import React from 'react';
import axios from 'axios';

import ProductOverview from './widgets/product-overview/productOverview.js';
import QuestionsAnswers from './widgets/questions-answers/questionsAnswers.js';
import RatingsReviews from './widgets/ratings-reviews/ratingsReviews.js';
import RelatedProducts from './widgets/related-products/relatedProducts.js';

import StarRating from './components/starRating.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      currentProduct: {},
      rating: 3.3
    }

    this.getProductById = this.getProductById.bind(this);
    this.getProductById(37312);
  }

  // componentDidMount() {
  //   this.getProductById(37312);
  // }

  getProductById(id) {
    axios({
      method: 'GET',
      url: `/products/${id}`
    })
      .then(({ data }) => {
        this.setState({
          currentProduct: data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      // <>
      //   <ProductOverview />
      //   <RelatedProducts />
      //   <QuestionsAnswers />
      <>
        <button onClick={() => { this.getProductById(37312); }}>37312</button>
        <button onClick={() => { this.getProductById(37313); }}>37313</button>
        <button onClick={() => { this.getProductById(37314); }}>37314</button>
        <button onClick={() => { this.getProductById(37315); }}>37315</button>
        <RatingsReviews product={this.state.currentProduct} />
      </>
      // </>
    );
  }
}

export default App;