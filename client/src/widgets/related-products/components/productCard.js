import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const ProductCard = ({ product, icon, onClick }) => {
  const getDefaultStyle = () => {
    return axios({
      method: 'GET',
      url: `/products/${product.id}/styles`
    })
      .then(({ data }) => {
        for (var i = 0; i < data.results.length; i++) {
          if (data.results[i]['default?']) {
            return data.results[i];
          }
        }
        return data.results[0];
      });
  };

  const [defaultStyle, setDefaultStyle] = useState({});

  useEffect(() => {
    getDefaultStyle()
      .then((data) => {
        setDefaultStyle(data);
      })
      .catch((err) => {
        console.error(err);
      })
  }, [product]);

  if (defaultStyle && defaultStyle.style_id) {
    return (
      <div className="rp-product-card">
        <div className="rp-card-action">
            <FontAwesomeIcon icon={icon} onClick={() => { onClick(product); }}/>
        </div>
        <div className="rp-card-info">
          <div>{product.category}</div>
          <div>{product.name}</div>
          <div className="rp-card-images">
            <img src={defaultStyle.photos[0].thumbnail_url}/>
          </div>
          <div>
            {defaultStyle.sale_price
              ? <>
                <div className="rp-price-sale">${defaultStyle.sale_price}</div>
                <div className="rp-price-slash">${product.default_price}</div>
              </>
              : <div>${product.default_price}</div>}
          </div>
        </div>
      </div>
      // category
      // product name
      // price of default style (sale price)
      // star rating
    );
  } else {
    return (<div className="rp-product-card"></div>);
  }
};

export default ProductCard;