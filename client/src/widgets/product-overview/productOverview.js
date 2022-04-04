import React, { useState, useEffect } from "react";

import axios from "axios";
import 'regenerator-runtime/runtime';

import MainCarousel from "./carousel/MainCarousel.js";
import api from "./apiHelpers.js";

const ProductOverview = (props) => {
  const [currentProduct, setCurrentProduct] = useState([]);

  const dummyProducts = [
    "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80",
    "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
  ];

  useEffect(() => {
    api.shout();
    getProductStyle('37311')
    //let productData = api.get("/?page=1&count=10");
  }, []);

  const getProductStyle = async () => {
    let data = await api.get('/37311/styles');
    console.log('relatedData: ', data.data)
    //console.log(data);
    console.log('stateData: ',products);
  };

  return (
    <div>
      {/* <MainCarousel products={products} /> */}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default ProductOverview;
