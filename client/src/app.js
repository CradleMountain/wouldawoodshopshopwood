import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import ContextWrapper from "./widgets/product-overview/context/ContextWrapper.js";
import QuestionsAnswers from "./widgets/questions-answers/questionsAnswers.js";
import RatingsReviews from "./widgets/ratings-reviews/ratingsReviews.js";
import RelatedProducts from "./widgets/related-products/relatedProducts.js";
import NavBar from "./widgets/navigation-bar/navBar.js";

const App = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductById(37311);
  }, []);

  const getProductById = (id) => {
    axios({
      method: "GET",
      url: `/products/${id}`,
    })
      .then((data) => {
        console.log(data.data);
        setCurrentProduct(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Fragment>
      <NavBar />
      <div className="widgets-main">
        {Object.keys(currentProduct).length !== 0 && (
          <ContextWrapper currentProduct={currentProduct} />
        )}
        <RelatedProducts product={currentProduct} getProductById={getProductById}/>
        <QuestionsAnswers currentProduct={currentProduct} />
        <RatingsReviews product={currentProduct} />
      </div>
    </Fragment>
  );
};

export default App;














// import React from 'react';
// // import ReactDOM from 'react-dom';
// import axios from 'axios';

// import ProductOverview from './widgets/product-overview/productOverview.js';
// import QuestionsAnswers from './widgets/questions-answers/questionsAnswers.js';
// import RatingsReviews from './widgets/ratings-reviews/ratingsReviews.js';
// import RelatedProducts from './widgets/related-products/relatedProducts.js';

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       products: [],
//       currentProduct: {}
//     }

//     this.getProductById = this.getProductById.bind(this);
//   }

//   componentDidMount() {
//     this.getProductById(37313);
//   }

//   getProductById(id) {
//     axios({
//       method: 'GET',
//       url: `/products/${id}`
//     })
//       .then(({data}) => {
//         this.setState({
//           currentProduct: data
//         })
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }

//   render() {
//     return (

//         <QuestionsAnswers currentProduct={this.state.currentProduct} />

//     );
//   }

//   // render() {
//   //   return (
//   //     <>
//   //       <ProductOverview />
//   //       <RelatedProducts />
//   //       <QuestionsAnswers />
//   //       <RatingsReviews />
//   //     </>
//   //   );
//   // }
// }

// export default App;
