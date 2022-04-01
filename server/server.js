const path = require('path');
const express = require('express');
const axios = require('axios');
const { GITHUB_API_KEY } = require('../config.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/*', (req, res) => {
  req.url = req.baseUrl;
  if (req.url !== '/' && req.url !== '/favicon.ico') {
    axios({
      method: req.method,
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe${req.url}`,
      data: req.body,
      headers: {
        'Authorization': GITHUB_API_KEY
      }
    })
      .then((response) => {
        res.set(response.headers)
          .status(response.status)
          .send(response.data);
      })
      .catch((err) => {
        console.error(err);
        res.set(err.response.headers)
          .status(err.response.status)
          .send();
      });
  } else {
    res.end();
  }
});

app.listen(3000, () => { console.log('Listening on port 3000...'); });