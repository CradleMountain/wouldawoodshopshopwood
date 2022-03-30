import React from 'react';
import ReactDOM from 'react-dom';

import ProductOverview from './widgets/product-overview/productOverview.js';
import QuestionsAnswers from './widgets/questions-answers/questionsAnswers.js';
import RatingsReviews from './widgets/ratings-reviews/ratingsReviews.js';
import RelatedProducts from './widgets/related-products/relatedProducts.js';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <ProductOverview />
        <RelatedProducts />
        <QuestionsAnswers />
        <RatingsReviews />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
