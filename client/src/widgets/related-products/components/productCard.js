import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import _ from "underscore";

import StarRating from "../../../components/starRating.js";

const ProductCard = ({ product, icon, onClick, getProductById }) => {
  const [defaultStyle, setDefaultStyle] = useState({});
  const [rating, setRating] = useState(0);

  useEffect(() => {
    getRating()
      .then((ratings) => {
        var sum = 0;
        var total = 0;
        for (var rating in ratings) {
          sum += Number(rating) * Number(ratings[rating]);
          total += Number(ratings[rating]);
        }
        var result = Math.round((sum / total) * 10) * 0.1;
        setRating(result);
      })
      .catch((err) => {
        console.error(err);
      });
    getDefaultStyle()
      .then((data) => {
        setDefaultStyle(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [product]);

  const changeProductHandler = () => {
    getProductById(product.id);
  };

  const getRating = () => {
    return axios({
      method: "GET",
      url: "/reviews/meta",
      params: {
        product_id: product.id,
      },
    }).then(({ data }) => {
      return data.ratings;
    });
  };

  const getDefaultStyle = () => {
    return axios({
      method: "GET",
      url: `/products/${product.id}/styles`,
    }).then(({ data }) => {
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i]["default?"]) {
          return data.results[i];
        }
      }
      return data.results[0];
    });
  };

  const isValid = (styleObj) => {
    return (
      styleObj &&
      styleObj.style_id &&
      styleObj.photos[0].url
    );
  }

  if (isValid(defaultStyle)) {
    return (
      <div className="rp-product-card">
        <div className="rp-card-action">
          <FontAwesomeIcon
            icon={icon}
            onClick={() => {
              onClick(product);
            }}
          />
        </div>
        <div className="rp-card-info">
          <div className="rp-category">{product.category}</div>
          <div className="rp-name" onClick={changeProductHandler}>
            {product.name}
          </div>
          <div className="rp-card-images" onClick={changeProductHandler}>
            <img src={defaultStyle.photos[0].thumbnail_url} />
          </div>
          <div>
            {defaultStyle.sale_price ? (
              <>
                <div className="rp-price rp-price-sale">
                  ${defaultStyle.sale_price}
                </div>
                <div className="rp-price rp-price-slash">
                  ${product.default_price}
                </div>
              </>
            ) : (
              <div>${product.default_price}</div>
            )}
          </div>
          <div className="rp-card-stars">
            <StarRating rating={rating} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProductCard;
