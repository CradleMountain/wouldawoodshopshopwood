import axios from 'axios';

const apiHelpers = {
  get: (endpoint = '') => {
    console.log(endpoint);
    axios
      .get(`http://localhost:3000/products${endpoint}`)
      .then((data) => {
        console.log("apiHelper.get DATA: ", data);
      })
      .catch((err) => {
        console.log("apiHelper.get ERROR: ", err);
      });
  },

  shout: () => {
    console.log('HELLO, I AM THE API HELPER!')
  }
};

export default apiHelpers;


// axios({
//   params: {product_id: 37312},
//   method: 'GET',
//   url: '/products'
// )}


// const path = require('path');
// const express = require('express');
// const axios = require('axios');
// const { GITHUB_API_KEY } = require('../config.js');

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, '../client/dist')));

// app.use('/*', (req, res) => {
//   req.url = req.originalUrl;
//   if (req.url !== '/') {
//     axios({
//       method: req.method,
//       url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe${req.url}`,
//       data: req.body,
//       headers: {
//         'Authorization': GITHUB_API_KEY
//       }
//     })
//       .then((response) => {
//         res.set(response.headers)
//           .status(response.status)
//           .send(response.data);
//       })
//       .catch((err) => {
//         console.error(err);
//         res.status(500).send(err);
//       });
//   } else {
//     res.end();
//   }
// });

// app.listen(3000, () => { console.log('Listening on port 3000...'); });