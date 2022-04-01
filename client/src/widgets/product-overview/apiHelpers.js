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