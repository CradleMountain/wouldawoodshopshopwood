const path = require('path');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { GITHUB_API_KEY } = require('../config.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/upload', express.static(path.join(__dirname, '../client/dist/upload.html')));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/*', (req, res) => {
  req.url = req.baseUrl;
  if (!(['/', '/favicon.ico', '/upload']).includes(req.url)) {
    axios({
      method: req.method,
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe${req.url}`,
      data: req.body,
      headers: {
        'Authorization': GITHUB_API_KEY
      },
      params: req.query
    })
      .then((response) => {
        res.set(response.headers)
          .status(response.status)
          .send(response.data);
      })
      .catch((err) => {
        console.error(err);
        if (err.response) {
          res.set(err.response.headers)
          .status(err.response.status)
          .send();
        } else {
          res.status(500).send();
        }
      });
  } else {
    res.end();
  }
});

app.listen(3000, () => { console.log('Listening on port 3000...'); });