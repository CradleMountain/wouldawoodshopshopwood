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

  const postInteraction = (element, widget, time) => {
    axios({
      method: 'POST',
      url: '/interactions',
      data: {
        element: element,
        widget: widget,
        time: time
      }
    })
      .catch((err) => {
        console.error(err);
      });
  };

  const trackClick = (e) => {
    var widgetClasses = {
      'nav-bar': 'Navigation bar',
      'po-overview-container': 'Product overview',
      'related-products': 'Related products',
      'questions-answers': 'Questions and answers',
      'ratings-reviews': 'Ratings and reviews'
    };

    var timestamp = new Date();

    var findWidget = (element) => {
      if (element.parentElement.className === 'widgets-main' || element.className === 'nav-bar') {
        return widgetClasses[element.className];
      } else if (element.parentElement.id === 'modal-root') {
        return element.className.includes('modal') ? 'Modal' : 'Modal backdrop';
      } else {
        return findWidget(element.parentElement);
      }
    };
    var widget = findWidget(e.target);

    var classes = e.target.className;
    if (typeof classes === 'object') {
      classes = classes.baseVal || '';
    }
    var classList = classes.split(' ');
    var element = e.target.localName;
    for (var i = 0; i < classList.length; i++) {
      if (classList[i].length > 0) {
        element += '.' + classList[i];
      }
    }

    postInteraction(element, widget, timestamp);
  };

  return (
    <div onClick={trackClick}>
      <NavBar setProduct={getProductById}/>
      <div className="widgets-main">
        {Object.keys(currentProduct).length !== 0 && (
          <ContextWrapper currentProduct={currentProduct} />
        )}
        <RelatedProducts product={currentProduct} getProductById={getProductById}/>
        <QuestionsAnswers currentProduct={currentProduct} />
        <RatingsReviews product={currentProduct} />
      </div>
    </div>
  );
};

export default App;