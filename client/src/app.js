import React from "react";
import axios from "axios";

import ContextWrapper from "./widgets/product-overview/context/ContextWrapper.js";
import QuestionsAnswers from "./widgets/questions-answers/questionsAnswers.js";
import RatingsReviews from "./widgets/ratings-reviews/ratingsReviews.js";
import RelatedProducts from "./widgets/related-products/relatedProducts.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      currentProduct: {},
    };

    this.getProductById = this.getProductById.bind(this);
  }

  componentDidMount() {
    this.getProductById(37311);
  }

  getProductById(id) {
    axios({
      method: "GET",
      url: `/products/${id}`,
    })
      .then(({ data }) => {
        this.setState({
          currentProduct: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <>
        {Object.keys(this.state.currentProduct).length !== 0 && (
          <ContextWrapper currentProduct={this.state.currentProduct} />
        )}
        {/* <RelatedProducts />
        <QuestionsAnswers />
        <RatingsReviews /> */}
      </>
    );
  }
}

export default App;
