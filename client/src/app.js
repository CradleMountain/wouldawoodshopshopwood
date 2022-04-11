import React from 'react';
import axios from 'axios';

import ProductOverview from './widgets/product-overview/productOverview.js';
import QuestionsAnswers from './widgets/questions-answers/questionsAnswers.js';
import RatingsReviews from './widgets/ratings-reviews/ratingsReviews.js';
import RelatedProducts from './widgets/related-products/relatedProducts.js';
import NavBar from './widgets/navigation-bar/navBar.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      currentProduct: {}
    };

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
      <>
        <NavBar currentProduct={this.state.currentProduct.name} setProduct={this.getProductById}/>
        <div className="widgets-main">
          {/* <ProductOverview /> */}
          {/* <RelatedProducts product={this.state.currentProduct}/> */}
          {/* <QuestionsAnswers /> */}
          <RatingsReviews product={this.state.currentProduct} />
        </div>
      </>
    );
  }
}

export default App;
