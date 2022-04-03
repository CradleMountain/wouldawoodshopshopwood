import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RatingBreakdown from './components/ratingBreakdown.js';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      metadata: {}
    };

    this.getReviewMetadata = this.getReviewMetadata.bind(this);
    this.getReviewMetadata(this.props.product.id);
  }

  // componentDidMount() {
  //   this.getReviewMetadata(this.props.product.id);
  // }

  getReviewMetadata(productId) {
    if (productId !== undefined) {
      axios({
        method: 'GET',
        url: `/reviews/meta`,
        params: {
          'product_id': productId
        }
      })
        .then(({ data }) => {
          console.log(data);
          this.setState({
            metadata: data
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  render() {
    // var metadata = this.getReviewMetadata(this.props.product.id);
    if (Number(this.state.metadata.product_id) !== this.props.product.id) {
      this.getReviewMetadata(this.props.product.id);
    } else if (this.state.product.id === undefined) {
      return (<div></div>);
    }
    console.log('PRODUCT:', this.props.product);
    console.log('METADATA:', this.state.metadata);
    return (
      <div className="ratings-reviews">
        <h2>Ratings &amp; Reviews</h2>
        <div className="rr-breakdowns">
          <RatingBreakdown metadata={this.state.metadata} product={this.props.product}/>
        </div>
        <div className="rr-reviews"></div>
      </div>
    );
  }
}

export default RatingsReviews;