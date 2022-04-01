import React, { useState, useEffect } from "react";

import axios from "axios";

import MainCarousel from './carousel/MainCarousel.js';
import api from './apiHelpers.js';

const ProductOverview = (props) => {

  const [products, setProducts] = useState([]);

  const dummyProducts = [
    "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80",
    "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  ];

  useEffect(() => {
    //api.shout();
    //api.get('/?page=2&count=3');
    //api.get('/37311/styles')
   //api.get('/37312/styles')
    //api.get('/37313/styles')
    //api.get('/37314/styles')
    //api.get('/37311/related')
    //api.get('/37311/styles')
    setProducts(dummyProducts);
  }, []);

  return (
    <MainCarousel products={products} />
  );
};

export default ProductOverview;
